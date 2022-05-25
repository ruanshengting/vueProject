<script>
import ClassComponent from './components/ClassComponnet.vue'
import ClassList from './components/ClassList.vue'
import StyleComponent from './components/StyleComponent.vue'
import IfComment from './components/IfComment.vue'
import VForComponent from './components/VForComponent.vue'
import LessonFor from './components/LessonFor.vue'
import ArrComponent from './components/ArrComponent.vue'
import EventFixComp from './components/EventFixComp.vue'
import keyComp from './components/keyComp.vue'
import InputComp from './components/InputComp.vue'
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
    ArrComponent,
    EventFixComp,
    keyComp,
    InputComp,
  },
}
</script>

<template>
  <!-- <ClassList class="hdxj" /> -->
  <!-- <StyleComponent /> -->
  <!-- <IfComment /> -->
  <!-- <VForComponent v-for="n in 3" :key="n" /> -->
  <!-- <LessonFor /> -->
  <!-- <ArrComponent /> -->
  <!-- <EventFixComp /> -->
  <!-- <keyComp /> -->
  <InputComp />
</template>

<style>
.hd {
  background-color: #ccc;
}
</style>
