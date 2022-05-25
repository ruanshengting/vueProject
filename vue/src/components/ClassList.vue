<template>
  <section :class="$attrs.class">用$attrs.class接受父组件传递的class</section>
  <div class="classList">
    <div v-for="(lesson, index) in lessons" :key="index">
      <span :class="{ isDelete: lesson.isDelete }">{{ lesson.title }}</span>
      <button @click="lesson.isDelete = !lesson.isDelete">
        {{ lesson.isDelete ? 'cancel' : 'delete' }}
      </button>
    </div>
  </div>
</template>

<script>
import lessons from '../../data/lesson'
export default {
  data() {
    return {
      lessons,
    }
  },
  methods: {
    onDelete(lesson) {
      lesson.isDelete = true
    },
  },
}
</script>

<style lang="scss" scoped>
.classList {
  div {
    display: flex;
    justify-content: space-between;
    span {
      &.isDelete {
        text-decoration: line-through;
      }
    }
  }
}
</style>
