import { createRouter, createWebHistory } from 'vue-router'
import UploadView from '../views/UploadView.vue'  // 新增上傳頁面的 view

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'upload',
      component: UploadView,
    }
  ],
})

export default router
