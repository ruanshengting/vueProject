//创建根组件,
const app = Vue.createApp({
  data() {
    return {
      name: 'hdr',
      event: 'click',
      num: 1,
      tip: '',
    }
  },
  computed: {
    // 有缓存特性。对性能有好处,只要num没有变化，computed属性就不会再计算
    //计算属性写法1:
    error() {
      return this.num === 0
        ? '不能继续减少'
        : this.num === 10
        ? 'Cannot add anymore'
        : ''
    },
    //计算属性写法2:用get/set的写法
    error: {
      get() {
        const message =
          this.num === 0
            ? '不能继续减少'
            : this.num === 10
            ? 'Cannot add anymore'
            : ''
        if (message) {
          this.tip + message
        }
      },
      set(tip) {
        //和class这一块有点类似
        this.tip = tip
      },
    },
  },
  methods: {
    //     error() {
    //       return this.num === 0
    //         ? '不能继续减少'
    //         : this.num === 10
    //         ? 'Cannot add anymore'
    //         : ''
    //     },
    add() {
      this.error = '添加提示'
      if (this.num < 10) {
        this.num++
      }
    },
    desc() {
      this.error = '减少提示' //会自动用set的方法
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
