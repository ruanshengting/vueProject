<template>
  <button
    @click="orderBy = 'price'"
    :class="{ 'order-type': orderBy === 'price' }"
  >
    价格
  </button>
  <button
    @click="orderBy = 'comments'"
    :class="{ 'order-type': orderBy === 'comments' }"
  >
    评论数
  </button>
  <button
    @click="lessonList = 'asc'"
    :class="{ 'order-type': orderType === 'asc' }"
  >
    ASC
  </button>
  <button
    @click="lessonList = 'desc'"
    :class="{ 'order-type': orderType === 'desc' }"
  >
    DESC
  </button>
  orderType= {{ orderType }}
  <template v-for="lesson of lessonList" :key="lesson.id">
    <div>
      {{ lesson.title }}--Price:{{ lesson.price }}--comment:{{
        lesson.comments
      }}
    </div>
  </template>
</template>

<script>
import lessons from '../../data/lesson'
export default {
  data() {
    return { lessons, orderBy: 'price', orderType: 'asc' }
  },
  computed: {
    lessonList: {
      get() {
        return this.lessons.sort((a, b) => {
          return this.orderType === 'asc'
            ? a[this.orderBy] - b[this.orderBy]
            : b[this.orderBy] - a[this.orderBy]
        })
      },
      set(type) {
        this.orderType = type
      },
    },
  },
}
</script>

<style>
.order-type {
  background-color: #c34a36;
}
</style>
