/**
 * 接收前端傳來的多語言檔案，解析後寫入 Google Sheet。
 * 前端請求格式預期為：
 * {
 *   files: {
 *     chinese: string | null,
 *     english: string | null,
 *     thai: string | null,
 *     japanese: string | null
 *   }
 * }
 */
function doPost(e) {
  try {
    // 1) 解析前端傳來的 JSON
    const body = JSON.parse(e.postData.contents);
    const files = body.files || {};

    // 2) dataMap 用來彙整所有 key -> 各語言 value
    // 形狀：{
    //   "common.action": { chinese: "操作", english: "Action", thai: "ดำเนินการ", japanese: "操作" },
    //   ...
    // }
    const dataMap = {};

    // 3) 分別處理 4 種語言檔案
    if (files.chinese) {
      const parsedObj = parseLangFile(files.chinese);
      fillDataMap(dataMap, parsedObj, "chinese");
    }
    if (files.english) {
      const parsedObj = parseLangFile(files.english);
      fillDataMap(dataMap, parsedObj, "english");
    }
    if (files.thai) {
      const parsedObj = parseLangFile(files.thai);
      fillDataMap(dataMap, parsedObj, "thai");
    }
    if (files.japanese) {
      const parsedObj = parseLangFile(files.japanese);
      fillDataMap(dataMap, parsedObj, "japanese");
    }

    // 4) 將結果寫入 Google Sheets
    const sheet = SpreadsheetApp.openById("1WfxL4daUYj8EASJaihXgtqz59_qtbg0n29s1aeMQ0pA").getActiveSheet();
    // （若想保留舊資料，請改為其他處理方式；此處為示範，直接清空）
    sheet.clearContents();

    // 寫入標題列
    const header = ["key", "chinese", "english", "thai", "japanese"];
    sheet.appendRow(header);

    // 取得所有 key 並排序（可依需求調整排序方式）
    const allKeys = Object.keys(dataMap).sort();

    // 逐行寫入
    allKeys.forEach(key => {
      const row = [
        key,
        dataMap[key].chinese || "",
        dataMap[key].english || "",
        dataMap[key].thai || "",
        dataMap[key].japanese || "",
      ];
      sheet.appendRow(row);
    });

    // 5) 回傳成功 JSON
    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    // 若有錯誤，回傳錯誤訊息
    return ContentService
      .createTextOutput(JSON.stringify({ error: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * 將巢狀物件展開成單層 { "xxx.yyy": "value" } 結構
 */
function flattenObject(obj, prefix = "") {
  let result = {};
  for (let key in obj) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      const nested = flattenObject(obj[key], prefix + key + ".");
      Object.assign(result, nested);
    } else {
      result[prefix + key] = obj[key];
    }
  }
  return result;
}

/**
 * 將某語言的 flatten 結果合併到 dataMap
 * @param {Object} dataMap - 最終要寫入表格的總資料
 * @param {Object} flattenedObj - parseLangFile(...) 後的單層物件
 * @param {string} lang - "chinese" | "english" | "thai" | "japanese"
 */
function fillDataMap(dataMap, flattenedObj, lang) {
  for (const key in flattenedObj) {
    if (!dataMap[key]) {
      dataMap[key] = {};
    }
    dataMap[key][lang] = flattenedObj[key];
  }
}

/**
 * 將 .ts 檔案字串去除常見的 TypeScript/ES Modules 語法後，用 eval() 解析成 JS 物件，再 flatten。
 * - 移除 import 行
 * - 移除 export type/interface
 * - 移除 export default
 * - 移除 named export (export { ... })
 * - 移除 const <var>[: <型別>] =
 * - 移除結尾分號
 * - 最後若內容是 { ... }，用 eval() 轉成物件
 */
function parseLangFile(rawString) {
  // 若需要除錯，可使用 Logger.log(...) 在 Apps Script 中查看

  let content = rawString.trim();

  // 1) 移除所有 import 行 (若有多行 import)
  content = content.replace(/^import\s+.*$/gm, "");

  // 2) 移除所有 export type/interface 行
  content = content.replace(/^export\s+(type|interface)\s+.*$/gm, "");

  // 3) 移除 named export，例如 "export { ja };"
  content = content.replace(/^export\s*\{.*\}\s*;?$/gm, "");

  // 4) 移除 "export default <var>;"
  content = content.replace(/export\s+default\s+\w+\s*;?/g, "");

  // 5) 移除 "const <var>[: <型別>] ="
  //    若你的變數名有破折號 (e.g. en-us)，可改成 /const\s+([\w-]+)/
  content = content.replace(/const\s+\w+(\s*:\s*[\w<>\[\],\s-{}|?&]*)?\s*=\s*/, "");

  // 6) 移除結尾分號
  content = content.replace(/;\s*$/, "");

  // 7) 用 eval() 將物件字面值轉成 JS 物件
  let parsed;
  try {
    parsed = eval("(" + content + ")");
  } catch (err) {
    throw new Error("Parse error: " + err.message + "\n=== 解析字串 ===\n" + content);
  }

  // 8) flatten 巢狀物件
  const flattened = flattenObject(parsed);
  return flattened;
}

function testDoPost() {
  const fakeEvent = {
    postData: {
      contents: JSON.stringify({
        files: {
          chinese: "const zhTW = { common: { action: '操作' } }; export default zhTW;",
          english: "const en = { common: { action: 'Action' } }; export default en;",
          thai: "const th = { common: { action: 'ดำเนินการ' } }; export { th };",
          japanese: "const ja = { common: { action: '操作' } }; export { ja };",
        }
      })
    }
  };
  const result = doPost(fakeEvent);
  Logger.log("=== 測試回傳 === " + result.getContent());
}

