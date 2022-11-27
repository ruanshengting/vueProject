<template>
  <div>
    <h2>shopMain</h2>
  </div>
</template>
<script>
export default {
  props: ['id'],
  mounted() {
    console.log('shopMain', this.id)
  },
}
</script>
