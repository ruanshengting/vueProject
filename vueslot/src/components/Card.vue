<template>
  <div style="border: 2px solid #ddd;" @click="show(content)">
    <slot />
    <header><slot name="header" /></header>
    <main><slot name="main" /></main>
    <footer><slot name="footer" /></footer>
  </div>
</template>

<script>
export default {
  props: ['content'],
  methods: {
    show(content) {
      console.log('子组件的content:' + content)
    },
  },
}
</script>

<style lang="scss" scoped>
div {
  header,
  main,
  footer {
    padding: 10px;
  }
  main {
    border-width: 1px 0 1px 0;
    border-style: solid;
    border-color: #ddd;
  }
}
</style>
