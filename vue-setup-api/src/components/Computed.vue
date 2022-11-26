<template>
  <h1>苹果0.5一斤</h1>
  <button @click="decrease">-</button>
  <span>{{ number }}</span>
  <button @click="increase">+</button>
</template>

<script>
import { computed } from 'vue'
export default {
  setup() {
    const number = computed(() => {
      return 10
    })
    return { number }
  },
}
</script>

<style lang="scss" scoped></style>
