import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import './public/assets/scss/main.scss'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios'
import App from './App.vue'
import router from './router'

window.axios = axios

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
