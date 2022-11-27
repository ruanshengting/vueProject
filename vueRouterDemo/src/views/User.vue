<template>
  <div>
    this is User
  </div>
</template>
<!-- vue2的做法
<script>
export default {
  props: ['id'],
  mounted() {
    console.log(this.$route.params.id) //$route是当前活跃的路由对象
    //用了prop:true之后就可以直接使用this.id了
    console.log(this.id)
  },
}
</script>
-->
<!-- vue3的做法

-->
<script setup>
// import { useRoute } from 'vue-router'
// console.log(useRoute().params.id)
const props = defineProps({
  id: String,
})
console.log('🚀 ~ file: User.vue ~ line 27 ~ props', props)
</script>
