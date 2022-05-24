//创建根组件,
const app = Vue.createApp({
  data() {
    return {
      name: '根组件--父亲',
    }
  },
  template: `<div>{{name}}---<xj /></div>`,
})

app.component('xj', {
  data() {
    return {
      name: 'ava--家庭成员',
    }
  },
  template: `<h2>{{name}}</h2>`,
})
const vm = app.mount('#app')
