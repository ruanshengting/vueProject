<template>
  <div>
    this is User
  </div>
</template>
<!-- vue2的做法
<script>
export default {
  mounted() {
    console.log(this.$route.params.id) //$route是当前活跃的路由对象
  },
}
</script>
-->
<!-- vue3的做法-->
<script setup>
import { useRoute } from 'vue-router'
console.log(useRoute().params.id)
</script>
