<template>
  <div class="flex flex-col items-center p-10 bg-gray-50 min-h-screen">
    <h2 class="text-3xl font-bold mb-8 text-gray-800">上傳語言檔案</h2>

    <div class="w-full max-w-md bg-white shadow-lg rounded-lg p-6 mb-8">
      <div v-for="lang in languages" :key="lang.name" class="mb-6 flex items-center">
        <span class="w-28 text-gray-800 font-bold">
          {{ lang.label }} <span class="text-red-500">{{ lang.required ? '(必填)' : '(選填)' }}</span>
        </span>

        <label class="btn bg-gray-200 text-gray-700 font-bold px-4 py-1 rounded-md cursor-pointer hover:bg-gray-300 transition duration-200 mx-2">
          瀏覽…
          <input
            type="file"
            accept=".ts"
            class="hidden"
            @change="onFileChange(lang.name, $event)"
            :disabled="lang.name !== 'chinese' && !languages.find(l => l.name === 'chinese')?.file"
          />
        </label>

        <span class="text-sm text-gray-600 font-semibold">
          {{ lang.file ? lang.file.name : '未選擇檔案。' }}
        </span>
      </div>
    </div>

    <div class="flex space-x-6 mt-6">
      <button
        class="bg-green-500 px-6 py-2 rounded-md text-white font-bold hover:bg-green-600 transition duration-200"
        @click="handleUpload"
        :disabled="!languages.find(l => l.name === 'chinese')?.file"
      >
        確認
      </button>
      <button
        class="bg-red-500 px-6 py-2 rounded-md text-white font-bold hover:bg-red-600 transition duration-200"
        @click="handleClear"
      >
        清除
      </button>
    </div>

    <!-- Loading overlay：上傳期間顯示 -->
    <div v-if="isLoading" class="loading-overlay">
      <div class="spinner"></div>
    </div>
  </div>
</template>


<script setup lang="ts">
import { reactive, ref } from 'vue';
import { uploadLangFiles } from '@/services/apiService';

interface LangFile {
  name: string;
  label: string;
  required: boolean;
  file: File | null;
}

const languages = reactive<LangFile[]>([
  { name: 'chinese', label: '中文檔案', required: true, file: null },
  { name: 'english', label: '英文檔案', required: false, file: null },
  { name: 'thai', label: '泰文檔案', required: false, file: null },
  { name: 'japanese', label: '日文檔案', required: false, file: null },
]);

const isLoading = ref(false);

function onFileChange(lang: string, event: Event) {
  const input = event.target as HTMLInputElement;
  const file = input.files ? input.files[0] : null;
  const index = languages.findIndex(item => item.name === lang);
  if (index !== -1) {
    languages[index].file = file;
  }
}

function readFileAsText(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = () => reject(reader.error);
    reader.readAsText(file, 'utf-8');
  });
}

async function handleUpload() {
  if (!languages.find(l => l.name === 'chinese')?.file) {
    alert("請先選擇中文檔案！");
    return;
  }

  isLoading.value = true;

  try {
    const results = await Promise.all(
      languages.map(lang => lang.file ? readFileAsText(lang.file) : Promise.resolve(null))
    );
    const filesPayload: Record<string, string | null> = {};
    languages.forEach((lang, idx) => {
      filesPayload[lang.name] = results[idx];
    });
    const payload = { files: filesPayload };

    const res = await uploadLangFiles(payload);
    isLoading.value = false;
    if (res.success) {
      alert("檔案已成功上傳到 Google Sheets！");
    } else {
      alert("上傳失敗：" + res.error);
    }
  } catch (err) {
    isLoading.value = false;
    console.error("上傳過程中發生錯誤：", err);
    alert("上傳過程中發生錯誤，請查看主控台。");
  }
}

function handleClear() {
  languages.forEach(lang => {
    lang.file = null;
  });
  const fileInputs = document.querySelectorAll('input[type="file"]') as NodeListOf<HTMLInputElement>;

    fileInputs.forEach((input) => {
    input.value = '';
  });
}
</script>


<style scoped>
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.spinner {
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.btn:disabled {
  cursor: not-allowed;
  opacity: 0.6;
}
</style>
