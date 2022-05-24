const app = Vue.createApp({
  data() {
    return {
      name: 'ava',
      value: 'myid', //设置成无效值，这个div就没有这个属性
      arg: 'id',
    }
  },
})
const vm = app.mount('#app')
setTimeout(() => {
  vm.id = 'https://www.baidu.com'
  vm.name = 'change'
  vm.arg = 'href'
}, 2000)
