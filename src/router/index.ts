import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import UploadView from '../views/UploadView.vue'  // 新增上傳頁面的 view

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(import.meta.env.BASE_URL),  // ← 改成 Hash 模式
  routes: [
    {
      path: '/',
      name: 'upload',
      component: UploadView,
    }
  ],
})

export default router
