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
  watch: {
    num(newValue, oldValue) {
      console.log(
        '🚀 ~ file: 14watch的使用.js ~ line 13 ~ num ~ newValue, oldValue',
        newValue,
        oldValue,
      )
      this.error =
        newValue === 0
          ? '不能继续减少'
          : newValue === 5
          ? 'Cannot add anymore'
          : ''
      //检测num属性
    },
  }, //option API:
  methods: {
    add() {
      this.error = ''
      if (this.num < 5) {
        this.num++
      }
    },
    desc(event) {
      this.error = ''
      if (this.num > 0) {
        this.num--
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
