<template>
  <div>
    <header><slot name="header" /></header>
    <main><slot /></main>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
div {
  border: 1px solid #ddd;
  margin-top: 20px;
  border-radius: 15px;
  header {
    border-bottom: solid 1px #ddd;
    padding: 10px;
  }
  main {
    padding: 10px;
  }
}
</style>
