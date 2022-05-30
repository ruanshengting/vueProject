<template>
  <div>
    <slot name="icon"></slot>
    {{ lesson.title }}
    <slot :id="lesson.id" />
  </div>
</template>

<script>
export default {
  props: ['lesson'],
}
</script>

<style lang="scss" scoped></style>
