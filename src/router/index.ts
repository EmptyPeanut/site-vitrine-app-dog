import HomeViewVue from '@/views/HomeView.vue'
import LoginViewVue from '@/views/LoginView.vue'
import ProfileViewVue from '@/views/ProfileView.vue';
import RegisterViewVue from '@/views/RegisterView.vue';
import AdminViewVue from '@/views/AdminView.vue';
import UserIhmView from '@/views/admin/users/UserIhmView.vue';
import { createRouter, createWebHistory } from 'vue-router';
import UserDetailsViewVue from '@/views/admin/users/UserDetailsView.vue';


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
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminViewVue,
      //@todo Vérifier que l'utilisateur est bien un admin, faire un point d'arrêt exprés dans l'api
      beforeEnter: (to, from, next) => {
        const userToken = localStorage.getItem('user');
        const parsedUserToken = userToken ? JSON.parse(userToken) : null;
        if (!parsedUserToken) {
          next(from.path);
        } else {
          if (parsedUserToken.roles.includes('ADMIN') || parsedUserToken.roles.includes('MODERATOR')) {
            next();
          }else {
            next(from.path);
          }
        }
      },
      children: [
        {
          path: '',
          name: 'defaultAdmin',
          redirect: { name: 'users' }
        },
        {
          path: 'users',
          name: 'users',
          component: UserIhmView,
        },
        {
          path: 'user/:id',
          name: 'userDetails',
          component: UserDetailsViewVue,
          props: (route) => ({
            userId: route.params.id
          })
        },
        {
          path: 'events',
          name: 'events',
          component: () => import('@/views/admin/events/EventsView.vue')
        },
      ]
    }
  ]
})

export default router
