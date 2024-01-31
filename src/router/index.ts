import { createRouter, createWebHistory } from 'vue-router'
import TestView from '../views/TestView.vue'
import TestApi from '../views/TestApi.vue'

const Home = {
  template: "<p>Hello World!</p>"
}
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/profile',
      name: 'profile',
      component: TestApi
    },
    {
      path: '/test',
      name: 'Test',
      component: TestView
    }
  ]
})

export default router
