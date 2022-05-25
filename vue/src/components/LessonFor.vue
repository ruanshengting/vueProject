<template>
  <button>价格</button>
  <button>评论数</button>
  <template v-for="lesson of lessonList" :key="lesson.id">
    <div>{{ lesson.title }}</div>
  </template>
</template>

<script>
import lessons from '../../data/lesson'
export default {
  data() {
    return { lessons }
  },
  computed: {
    lessonList() {
      return this.lessons
    },
  },
}
</script>

<style></style>
