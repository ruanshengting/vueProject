<template>
  <button @click="orderBy = 'price'">价格</button>
  <button @click="orderBy = 'comments'">评论数</button>
  <template v-for="lesson of lessonList" :key="lesson.id">
    <div>{{ lesson.title }}</div>
  </template>
</template>

<script>
import lessons from '../../data/lesson'
export default {
  data() {
    return { lessons, orderBy: 'price' }
  },
  computed: {
    lessonList() {
      return this.lessons.sort((a, b) => {
        return a[this.orderBy] - b[this.orderBy]
      })
    },
  },
}
</script>

<style></style>
