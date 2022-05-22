<template>
  <header>
    <h1>{{ title }}</h1>
    <Button
      v-show="homePage"
      @btn-click="$emit('toggle-add-task')"
      :text="showAddTask ? 'Close' : 'Add Task'"
      :color="showAddTask ? 'red' : 'green'"
    />
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
    showAddTask: Boolean,
  },
  components: {
    Button, //声明组件
  },
  computed: {
    homePage() {
      return this.$route.path === '/'
    },
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
