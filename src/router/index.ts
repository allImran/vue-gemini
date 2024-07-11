import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'textOutput',
      component: () => import('../views/TextOutput.vue')
    },
    {
      path: '/streamed-output',
      name: 'streamedOutput',
      component: () => import('../views/StreamedOutput.vue')
    },
    {
      path: '/image-compare',
      name: 'imageCompare',
      component: () => import('../views/ImageCompare.vue')
    },
    {
      path: '/file-upload',
      name: 'fileUpload',
      component: () => import('../views/FileUpload.vue')
    }
  ]
})

export default router
