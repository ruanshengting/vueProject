<script>
import ClassComponent from './components/ClassComponnet.vue'
import ClassList from './components/ClassList.vue'
import StyleComponent from './components/StyleComponent.vue'
export default {
  data() {
    return {}
  },
  components: { ClassComponent, ClassList, StyleComponent },
}
</script>

<template>
  <!-- <ClassList class="hdxj" /> -->
  <StyleComponent />
</template>

<style>
.hd {
  background-color: #ccc;
}
</style>
