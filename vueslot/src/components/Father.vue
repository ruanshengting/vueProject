<template>
  <div>------ this is a father component ------</div>
  <Child />
  <button @click="msg = 'My Vue'">改变msg</button>
  <div>Father中的msg: {{ msg }}</div>
  <div>------ this is a father component ------</div>
</template>
<script>
import Child from './Child.vue'
export default {
  components: { Child },
  data() {
    return {
      msg: 'this is from Father.vue msg',
      obj: {
        msg: 'this is from Father.vue Object',
      },
    }
  },
  //如果要使用组件中的实例，需要将Provide写成返回对象的函数
  //Provide和inject不是响应式的。解决方法1:用对象。解决方法2:函数返回响应式数据
  provide() {
    //父组件提供数据
    // return { message: this.msg }
    return {
      //解决方法1:用对象。  obj: this.obj,
      message: () => this.msg, //解决方法2:函数返回响应式数据,传递的是一个函数
    }
  },
  beforeUpdate() {
    console.log('🚀 ~ 页面发生改变时~beforeUpdate')
  },
  updated() {
    console.log('🚀 ~ file: Father.vue:31 ~updated')
  },
  beforeUnmount() {
    console.log('🚀 ~ file: Father.vue:31 ~beforeUnmount')
  },
  unmounted() {
    console.log('🚀 ~ file: Father.vue:31 ~unmounted')
  },
}
</script>
