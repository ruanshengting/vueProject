<template>
  <h2 @click="click">test send Evtn</h2>
  {{ click }}
  <h1>{{ text }}</h1>
</template>

<script>
export default {
  props: {
    click: { type: Function },
    text: {
      type: String,
    },
  },
}
</script>

<style lang="scss" scoped></style>
