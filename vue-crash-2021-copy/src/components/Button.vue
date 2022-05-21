<template>
  <button @click="onClick()" class="btn" :style="{ background: color }">
    {{ text }}
  </button>
</template>
<script>
/* eslint-disable */
export default {
  name: 'Button',
  props: {
    text: String,
    color: String,
  },
  methods: {
    onClick() {
      this.$emit('btn-click')
    },
  },
}
</script>
