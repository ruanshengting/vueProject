<template>
  <div class="hello">
    <input type="text" v-model="num1" @keyup="add()" />
    <span>+</span>
    <input type="text" v-model="num2" @keyup="add()" />
    <span>=</span>
    <span>{{ result }}</span>
  </div>
</template>

<script>
/* eslint-disable */
import { ref } from 'vue'
export default {
  name: 'HelloWorld',

  setup() {
    //  console.log(this)//无法打印this
    const num1 = ref(0) //设置初始值
    const num2 = ref(0)
    const result = ref(0)
    function add() {
      result.value = parseInt(num1.value) + parseInt(num2.value)
    }
    return { num1, num2, result, add }
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
