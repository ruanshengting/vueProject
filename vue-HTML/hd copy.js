//创建根组件,
const app = Vue.createApp({
  data() {
    return {
      name: 'hdr',
      html: `<div style="color:red">Red</div>`,
    }
  },
})

const vm = app.mount('#app')
setTimeout(() => {
  vm.$data.name = 'ava'
}, 1000)
