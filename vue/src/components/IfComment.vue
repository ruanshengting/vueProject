<template>
  <template v-for="(lesson, index) of lessons" :key="index">
    <div v-if="lesson.isDelete" style="background: red;">
      {{ lesson.title }}
    </div>
    <!-- <div v-else-if="lesson.price > 100" style="background: #d65db1;">
      {{ lesson.title }}
    </div> -->
    <template v-else>
      {{ lesson.title }}
    </template>
  </template>
</template>

<script>
//使用v-show它会把元素渲染出来，只是用display:none给它隐藏了，v-if这个dom实际是不存在的
//使用v-show的情况：如果这个数据经常变化，比如它会根据一个值的变化来决定是否显示，这个值又经常变换，那就用v-show。template不支持v-show.
//用v-if的情况:初次渲染完了之后就不变化了。（切换频率不高）
import lessons from '../../data/lesson'
export default {
  data() {
    return {
      lessons,
    }
  },
}
</script>

<style></style>
