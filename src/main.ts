import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/index.css'
import {authStore, key} from './store/authStore'

const app = createApp(App)

app.use(router)
app.use(authStore, key)

app.mount('#app')
