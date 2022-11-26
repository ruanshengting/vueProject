import { createApp } from 'vue'
import App from './App.vue'
import router from './router' //引入router

import './assets/main.css'

const app = createApp(App)

app.use(router) //挂载router，要放在.mount之前

app.mount('#app')
