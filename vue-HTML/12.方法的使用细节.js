//创建根组件,
const app = Vue.createApp({
  data() {
    return {
      name: 'hdr',
      event: 'click',
      num: 1,
      error: '',
    }
  },
  methods: {
    add() {
      this.error = ''
      if (this.num < 10) {
        this.num++
      } else {
        this.error = 'Cannot add anymore'
      }
    },
    desc(event) {
      this.error = ''
      if (this.num > 0) {
        this.num--
      } else {
        this.error = '不能继续减少'
      }
    },
    go(event, title) {
      console.log(
        '🚀 ~ file: 12.方法的使用细节.js ~ line 14 ~ go ~ title',
        title,
      )
      console.log('click.prevent相当于在这个方法里面写event.preventDefault()')
    },
  },
})
const vm = app.mount('#app')
