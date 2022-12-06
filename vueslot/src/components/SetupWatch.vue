<template>
  如果想用watch监听对象的某个属性，则第一个监听的参数使用函数返回: () =>
  user.name

  <div>
    this is counter: {{ counter }}
    <button @click="changeCounter">change counter</button>
  </div>

  <div>
    this is user.name: {{ user.name }}
    <button @click="changeUserName">change user.name</button>
  </div>
</template>
<script>
import { ref, reactive, watch, watchEffect } from 'vue'
export default {
  setup() {
    const counter = ref(0)
    const user = reactive({ name: 'ava', age: 18 })
    function changeCounter() {
      counter.value++
    }
    function changeUserName() {
      user.name = 'RST'
    }
    watch(counter, (newVal, oldVal) => {
      console.log(
        '🚀 ~ file: setupWatch.vue:28 ~ watch ~ newVal,oldVal',
        newVal,
        oldVal,
      )
    })
    // 如果想用watch监听对象的某个属性，则第一个监听的参数使用函数返回
    watch(
      () => user.name,
      (newVal, oldVal) => {
        console.log(
          '🚀 ~ file: setupWatch.vue:28 ~ watch ~ newVal,oldVal',
          newVal,
          oldVal,
        )
      },
    )
    /**
     * 1.watchEffect不需要指定监听的属性，自动收集依赖，只要这个回调函数中的属性发生了变化，那么watchEffect就会被触发
     * 2.watchEffect不能得到新旧值
     * 3.watchEffect在组件初始化的时候就会被调用一次
     * */
    watchEffect(() => {
      console.log('🚀 ~watchEffect user.name=', user.name)
    })
    return {
      counter,
      user,
      changeCounter,
      changeUserName,
    }
  },
}
</script>
