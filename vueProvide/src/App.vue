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
  <input v-model="teacher" />
  {{ teacher }}
  <div></div>
</template>

<script>
import weixin from './components/Weixin.vue'
import pay from './components/Pay.vue'
export default {
  // provide: {
  //   webname: 'text', //这个数据可以穿透，在所有的组件中使用
  // 如果传递的只是一个字符串，就可以这样使用}
  provide() {
    //如果要传递的是data中的数据，那么我们就吧provide写成函数的形式
    return {
      webname: this.teacher,
    }
  },
  data() {
    return {
      teacher: { name: 'MyTeacher' },
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
