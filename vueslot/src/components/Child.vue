<template>
  <div>------ this is a child component ------</div>
  <Grandchild />
  <div>------ this is a child component ------</div>
</template>
<script>
import Grandchild from './Grandchild.vue'
export default {
  components: { Grandchild },
}
</script>
