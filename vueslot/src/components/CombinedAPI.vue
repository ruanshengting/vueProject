<template>
  <hr />
  <br />
  组合式API
  <div>模版里面ref变量会被自动解析 count={{ count }}</div>
  <button @click="changeCount">changeCount</button>
  <br />
  <div>{{ obj.name }}</div>
  <div>{{ name }}</div>
  <div>{{ children.name }}</div>
  <button @click="changeObjName">changeObjName</button>
  <br />
  <hr />
</template>
<script>
import { ref, reactive, toRefs } from 'vue'
export default {
  setup() {
    //代替了created()和beforeCreated()
    const count = ref(0) //ref使得变量变成响应式对象
    function changeCount() {
      count.value++ //使用的时候用.value
    }

    //通过reactive定义引用类型的数据
    const obj = reactive({ name: 'Ava', age: 23, children: { name: 'test' } })
    function changeObjName() {
      obj.name = 'RST'
      obj.children.name = 'child'
    }
    //toRefs使得结构后的数据重新获得响应式,toRefs中要传入一个Object
    //通过ES6中的扩展运算符结构之后，数据就不是响应式的
    return {
      changeCount,
      count,
      changeObjName,
      obj,
      ...toRefs(obj),
    }
  },
}
</script>
