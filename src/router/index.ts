import HomeViewVue from '@/views/HomeView.vue'
import LoginViewVue from '@/views/LoginView.vue'
import ProfileViewVue from '@/views/ProfileView.vue';
import RegisterViewVue from '@/views/RegisterView.vue';
import { createRouter, createWebHistory } from 'vue-router';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeViewVue
    },
    {
      path: '/login',
      name: 'login',
      component: LoginViewVue,
      beforeEnter: (to, from, next) => {
        const userToken = localStorage.getItem('user');
        if (userToken) {
          next(from.path);
        } else {
          next();
        }
      }
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileViewVue,
      beforeEnter: (to, from, next) => {
        const userToken = localStorage.getItem('user');
        if (!userToken) {
          next(from.path);
        } else {
          next();
        }
      }
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterViewVue,
      beforeEnter: (to, from, next) => {
        const userToken = localStorage.getItem('user');
        if (userToken) {
          next(from.path);
        } else {
          next();
        }
      }
    }
  ]
})

export default router
