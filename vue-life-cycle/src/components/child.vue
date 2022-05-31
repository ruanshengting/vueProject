<template>
  <div ref="test">this is dom {{ hd }}</div>
</template>

<script>
export default {
  data() {
    return {
      hd: 'ava test',
    }
  },
  beforeCreate() {
    //在实例初始化之后、进行数据侦听和事件/侦听器的配置之前同步调用。
    console.log(
      '子组件 beforeCreate 此阶段为实例初始化之后，此时的数据观察和事件机制都未形成，不能获得DOM节点。',
      this.hd,
    )
  },
  created() {
    //
    console.log(
      '子组件 created：在这个阶段vue实例已经创建，仍然不能获取DOM元素。一般来说，如果组件在加载的时候需要和后端有交互，放在这俩个钩子函数（beforeCreate/created）执行都可以，如果是需要访问props、data等数据的话，就需要使用created钩子函数',
      this.hd,
    )
  },
  beforeMount() {
    console.log(
      '子组件 beforeMount：对应的钩子函数是beforemount，在这一阶段，我们虽然依然得不到具体的DOM元素，但vue挂载的根节点已经创建，下面vue对DOM的操作将围绕这个根元素继续进行；beforeMount这个阶段是过渡性的，一般一个项目只能用到一两次。',
      this.hd,
    )
    console.log('this.$refs.test=', this.$refs.test)
  },
  mounted() {
    console.log(
      '子组件 对应的钩子函数是mounted。mounted是平时我们使用最多的函数了，一般我们的异步请求都写在这里。在这个阶段，数据和DOM都已被渲染出来。 ',
      this.hd,
    )
    console.log('this.$refs.test=', this.$refs.test)
  },
  beforeUpdate() {
    this.hd = 'hello'
    console.log(
      '🚀 ~ file: App.vue ~ line 42 ~ beforeUpdate ~ this.hd ',
      this.hd,
    )
  },
  updated() {
    this.hd = 'updated hello'
    console.log('🚀 ~ file: App.vue ~ line 46 ~ updated ~  this.hd ', this.hd)
  },
  beforeUnmount() {
    console.log('子组件beforeUnmount' + this.hd)
  },
  unmounted() {
    console.log('子组件unmounted' + this.hd)
  },
}
</script>

<style lang="scss" scoped></style>
