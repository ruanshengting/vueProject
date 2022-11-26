import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
const app = createApp(App)
app.use(router) //这样，这个app就可以使用这个路由了。
app.mount('#app')
