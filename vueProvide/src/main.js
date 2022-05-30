import { createApp } from 'vue'
import App from './App.vue'
import Card from './components/Card.vue'
import XInput from './components/XInput.vue'
const app = createApp(App)
app.component('card', Card) //配置全局组件，这样以后使用到这个组件就不用再import了
app.component('XInput', XInput)
app.mount('#app')
