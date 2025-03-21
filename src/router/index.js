import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../Views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // Usar import.meta.env.BASE_URL en lugar de process.env.BASE_URL
  routes: [
    {
      path: '/',
      redirect: '/Home',
    },
    {
      path: '/Home',
      name: 'Home',
      component: HomeView, // Sin paréntesis aquí
    },
  ],
})

export default router
