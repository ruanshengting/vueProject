<template>
  <div class="hello">
    <input type="text" v-model="state.num1" />
    <span>+</span>
    <input type="text" v-model="state.num2" />
    <span>=</span>
    <span>{{ state.result }}</span>
    <button type="button" @click="clickEvent()">emit event</button>
  </div>
</template>

<script>
/* eslint-disable */
//import { ref } from 'vue'
import { reactive, computed } from 'vue' //reactive管理状态，计算属性：computed
export default {
  name: 'HelloWorld',

  setup() {
    //无法打印this
    const state = reactive({
      //把整个组件的状态都抽离出来
      num1: 0,
      num2: 0,
      result: computed(() => parseInt(state.num1) + parseInt(state.num2)), //这样就不需要add方法了
    })

    // function add() {
    //   //改变setup中的数据
    //   state.result = parseInt(state.num1) + parseInt(state.num2)
    // }
    const clickEvent = () => {
      console.log('hello~')
    }
    return { state, clickEvent }
  },
  // date() {
  //   return {
  //     num1: 0,
  //     num2: 0,
  //     result,
  //   }
  // },
  // computed: {
  //   result() {
  //     return parseInt(this.num1) + parseInt(this.num2) //记得加this.
  //   },
  // },
  // methods: {
  //   add() {
  //     this.result = parseInt(this.num1) + parseInt(this.num2)
  //     return this.result
  //   },
  // },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
