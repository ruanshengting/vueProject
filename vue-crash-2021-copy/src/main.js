import { createApp } from 'vue'
import App from './App.vue'
import router from './router' //import router
createApp(App).use(router).mount('#app')
// 把路由注入到根实例中，启动路由。这里其实还有一种方法，就像vuex  store 注入到根实例中一样，我们也可以把vueRouter 直接注入到根实例中。在main.js中引入路由，注入到根实例中。
