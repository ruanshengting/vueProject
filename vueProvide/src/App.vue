<template>
  <div
    v-for="(comp, index) of components"
    :key="index"
    @click="currentComp = comp.name"
    :class="{ active: currentComp === comp.name }"
  >
    {{ comp.title }}
  </div>
  <component :is="currentComp"></component>
  <div></div>
</template>

<script>
import weixin from './components/Weixin.vue'
import pay from './components/Pay.vue'
export default {
  data() {
    return {
      currentComp: 'weixin',
      components: [
        { name: 'weixin', title: '微信' },
        { name: 'pay', title: '支付' },
      ],
    }
  },
  components: {
    weixin,
    pay,
  },
}
</script>

<style lang="scss" scoped>
div {
  border: 1px solid #ccc;
  transition: 0.5s;
  &.active {
    background-color: #00c9a7;
  }
}
</style>
