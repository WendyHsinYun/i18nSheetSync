<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <h1 class="text-2xl font-semibold mb-6">上傳語言檔案</h1>

    <div class="space-y-4">
      <!-- 中文檔案上傳 -->
      <div class="flex flex-col items-center">
        <label class="btn cursor-pointer mb-2" :class="{'bg-blue-500': !chineseFile}">
          中文檔案 (必填)
          <input type="file" accept=".ts" @change="handleFileChange('chinese', $event)" class="hidden" />
        </label>
        <p v-if="chineseFile" class="text-lg text-green-600">已選擇檔案: {{ chineseFile.name }}</p>
      </div>

      <!-- 英文檔案上傳 -->
      <div class="flex flex-col items-center">
        <label class="btn cursor-pointer mb-2" :class="{'bg-blue-500': !englishFile}" :disabled="!chineseFile">
          英文檔案 (選填)
          <input type="file" accept=".ts" @change="handleFileChange('english', $event)" class="hidden" :disabled="!chineseFile" />
        </label>
        <p v-if="englishFile" class="text-lg text-green-600">已選擇檔案: {{ englishFile.name }}</p>
      </div>

      <!-- 泰文檔案上傳 -->
      <div class="flex flex-col items-center">
        <label class="btn cursor-pointer mb-2" :class="{'bg-blue-500': !thaiFile}" :disabled="!chineseFile">
          泰文檔案 (選填)
          <input type="file" accept=".ts" @change="handleFileChange('thai', $event)" class="hidden" :disabled="!chineseFile" />
        </label>
        <p v-if="thaiFile" class="text-lg text-green-600">已選擇檔案: {{ thaiFile.name }}</p>
      </div>

      <!-- 日文檔案上傳 -->
      <div class="flex flex-col items-center">
        <label class="btn cursor-pointer mb-2" :class="{'bg-blue-500': !japaneseFile}" :disabled="!chineseFile">
          日文檔案 (選填)
          <input type="file" accept=".ts" @change="handleFileChange('japanese', $event)" class="hidden" :disabled="!chineseFile" />
        </label>
        <p v-if="japaneseFile" class="text-lg text-green-600">已選擇檔案: {{ japaneseFile.name }}</p>
      </div>

      <!-- 確認按鈕 -->
      <button
        class="btn bg-green-500 mt-6 px-6 py-3 rounded-md text-white hover:bg-green-600"
        @click="handleConfirm"
        :disabled="!chineseFile"
      >
        確認
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const chineseFile = ref<File | null>(null)
const englishFile = ref<File | null>(null)
const thaiFile = ref<File | null>(null)
const japaneseFile = ref<File | null>(null)

const handleFileChange = (language: string, event: Event) => {
  const input = event.target as HTMLInputElement
  const file = input.files ? input.files[0] : null

  if (file) {
    if (language === 'chinese') chineseFile.value = file
    if (language === 'english') englishFile.value = file
    if (language === 'thai') thaiFile.value = file
    if (language === 'japanese') japaneseFile.value = file
  }
}

const handleConfirm = () => {
  if (chineseFile.value) {
    // 這裡會處理後續的 Google Sheets 連動邏輯（先忽略）
    alert('檔案已上傳，將進行後續處理！')
  }
}
</script>

<style scoped>
/* 這邊的樣式會使用 Unocss */
</style>
