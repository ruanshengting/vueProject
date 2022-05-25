<script>
import ClassComponent from './components/ClassComponnet.vue'
import ClassList from './components/ClassList.vue'
import StyleComponent from './components/StyleComponent.vue'
import IfComment from './components/IfComment.vue'
import VForComponent from './components/VForComponent.vue'
import LessonFor from './components/LessonFor.vue'
export default {
  data() {
    return {}
  },
  components: {
    ClassComponent,
    ClassList,
    StyleComponent,
    IfComment,
    VForComponent,
    LessonFor,
  },
}
</script>

<template>
  <!-- <ClassList class="hdxj" /> -->
  <!-- <StyleComponent /> -->
  <!-- <IfComment /> -->
  <!-- <VForComponent v-for="n in 3" :key="n" /> -->
  <LessonFor />
</template>

<style>
.hd {
  background-color: #ccc;
}
</style>
