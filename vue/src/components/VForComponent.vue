<template>
  <div>
    <!-- key绑定的值是数字或者字符串 -->
    <!-- <div v-for="(value, key, index) of obj" :key="key">
      {{ value }}---{{ key }}---index:{{ index }}
    </div> -->
    <div v-for="(lesson, index) of lessons" :key="index">
      <template v-if="!lesson.isDelete">{{ lesson.title }}</template>
    </div>
  </div>
</template>

<script>
//v-if的优先级大于v-for
import lessons from '../../data/lesson'
export default {
  data() {
    return {
      lessons,
      obj: {
        name: 'ava',
        age: 18,
      },
    }
  },
}
</script>

<style></style>
