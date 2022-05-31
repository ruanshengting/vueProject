<template>
  <label>
    <div>{{ title }}</div>
    <div><input v-model="content" /></div>
  </label>
  <div>{{ webname }}</div>
</template>

<script>
export default {
  props: ['title', 'modelValue'],
  emits: ['update:modelValue'],
  data() {
    return {
      content: this.modelValue, //不要直接修改prop，所以先在data中赋值，再用去使用
    }
  },
  watch: {
    content(value) {
      console.log(value)
      this.$emit('update:modelValue', value) //这样的话，父组件的v-model也会改变
    },
  },
  inject: ['webname'],
}
</script>

<style lang="scss" scoped>
label {
  display: flex;
  align-items: center;
  div {
    color: #666;
    font-size: 16px;
    margin-top: 10px;
    width: 100px;
  }
  input {
    border: solid 2px #ddd;
    padding: 5px;
    color: #666;
    outline: none;
  }
}
</style>
