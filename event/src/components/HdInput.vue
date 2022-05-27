<template>
  <div>
    <input type="text" :value="content" @input="change" />
    {{ content }}
  </div>
</template>

<script>
export default {
  props: ['modelValue'], //默认情况下，组件上的 v-model 使用 modelValue 作为 prop 和 update:modelValue 作为事件,所以 在附件中可以直接写  <HdInput v-model="title" />
  emits: ['update:modelValue'], //子组件声明事件
  data() {
    //不要直接修改props
    return { content: this.modelValue }
  },
  methods: {
    change(event) {
      this.content = event.target.value
      this.$emit('update:modelValue', this.content)
    },
  },
}
</script>

<style lang="scss" scoped></style>
