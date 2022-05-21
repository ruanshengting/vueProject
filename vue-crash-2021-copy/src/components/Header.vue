<template>
  <header>
    <h1>{{ title }}</h1>
    <Button text="Add Task" color="green" />
  </header>
</template>
<script>
/* eslint-disable */
import Button from './Button.vue' //import组件
export default {
  name: 'Header',
  props: {
    title: {
      type: String, //设置属性值的类型
      default: 'Hi All', //设置默认属性值
    },
  },
  components: {
    Button, //声明组件
  },
}
</script>
<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>
