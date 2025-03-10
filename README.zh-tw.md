📄 **語言:** [繁體中文](README.zh-tw.md) | [English](README.md)

# i18nSheetSync - 前端

**Demo:** [i18nSheetSync Demo](https://wendyhsinyun.github.io/i18nSheetSync/)

## 🎥 Demo

![Demo](./src/assets/demo.gif)

## 📖 概要

一個簡單的網頁介面，讓使用者可以上傳 `.ts` 語言檔案並同步翻譯到 Google Sheets，同時支援從 Google Sheets 匯出 `.ts` 格式的翻譯檔案。

## 🔑 主要功能

- 上傳 `.ts` i18n 語言檔案 (例如: `zh-TW.ts`, `en.ts`)
- 自動展平巢狀結構，適合在 Google Sheets 中管理
- 將翻譯同步至 [Google Sheets](https://docs.google.com/spreadsheets/d/1WfxL4daUYj8EASJaihXgtqz59_qtbg0n29s1aeMQ0pA/edit?gid=0)
- 從 Google Sheets 匯出翻譯並轉換回 `.ts` 檔案

## 📋 工作流程

1. 上傳 `.ts` 語言檔案。
2. 點擊「確認」按鈕將檔案同步至 Google Sheets。
3. 如有需要，可匯出翻譯檔案。

## 📁 語言檔案

- 使用根目錄 `lang` 資料夾中的範例檔案，或 [點此下載](https://drive.google.com/drive/folders/1AG-jlfU-ssdxNzR7qC1BrczIn7NUjK71?usp=sharing)。
- 僅支援特定格式的 `.ts` 檔案。

## 🛠 技術棧

- **框架:** Vue 3 (Composition API + TypeScript)
- **檔案處理:** JavaScript FileReader API
- **後端:** Google Apps Script (用於與 Google Sheets 的 REST API 整合)

### 使用方式

1. 複製專案:

```bash
git clone https://github.com/WendyHsinYun/i18nSheetSync.git
```

2. 安裝相依套件:

```bash
npm install
```

3. 啟動開發伺服器:

```bash
npm dev
```

4. 構建並部署:

```bash
npm run build   # 構建專案，生成靜態文件
npm run deploy  # 部署到 GitHub Pages
```

---

**讓 Google Sheets 簡化 i18n 管理！** 🚀

---
