import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/index.scss'
import {createPinia} from 'pinia';
import * as interceptor from '@/services/interceptors';
import '@mdi/font/css/materialdesignicons.css';

const pinia = createPinia();
const app = createApp(App)

app.use(pinia)
app.use(router)

app.mount('#app')
