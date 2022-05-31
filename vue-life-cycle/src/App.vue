<template>
  <div ref="test">this is dom</div>
  <button @click="show = !show">
    show改变的时候也会触发beforeUpdate和Updated
  </button>
  <child v-if="show" ref="child" />
</template>

<script>
import child from './components/child.vue'

export default {
  components: { child },
  data() {
    return {
      hd: 'ava test',
      show: true,
    }
  },
  beforeCreate() {
    //在实例初始化之后、进行数据侦听和事件/侦听器的配置之前同步调用。
    console.log(
      '父组件 beforeCreate 此阶段为实例初始化之后，此时的数据观察和事件机制都未形成，不能获得DOM节点。',
      this.hd,
    )
  },
  created() {
    //
    console.log(
      '父组件 created：在这个阶段vue实例已经创建，仍然不能获取DOM元素。一般来说，如果组件在加载的时候需要和后端有交互，放在这俩个钩子函数（beforeCreate/created）执行都可以，如果是需要访问props、data等数据的话，就需要使用created钩子函数',
      this.hd,
    )
    // setTimeout(() => {
    //   this.hd = 'hdr'
    // }, 1000) //光写着一条setTimeout,不会触发update,但是如果在html中使用了hd,就会触发update
  },
  beforeMount() {
    console.log(
      '父组件 beforeMount：对应的钩子函数是beforemount，在这一阶段，我们虽然依然得不到具体的DOM元素，但vue挂载的根节点已经创建，下面vue对DOM的操作将围绕这个根元素继续进行；beforeMount这个阶段是过渡性的，一般一个项目只能用到一两次。',
      this.hd,
    )
    console.log('this.$refs.test=', this.$refs.test)
  },
  mounted() {
    console.log(
      '父组件 对应的钩子函数是mounted。mounted是平时我们使用最多的函数了，一般我们的异步请求都写在这里。在这个阶段，数据和DOM都已被渲染出来。 ',
      this.hd,
    )
    console.log('this.$refs.test=', this.$refs.test)
  },
  beforeUpdate() {
    //数据改变了之后会触发update
    console.log('父组件beforeUpdate：' + this.hd)
    console.log(
      '父组件beforeUpdate---child组件不显示时，可以被beforeUpdate读取到 this.$refs.child=',
      this.$refs.child,
    )
  },
  updated() {
    //有新的数据来，会触发update：比如有新消息来了，自动让滚动条移动到底部
    console.log('父组件updated：' + this.hd)
    console.log(
      '父组件updated---child组件显示时，可以被update读取到 this.$refs.child=',
      this.$refs.child,
    )
  },beforeUnmount(){
    console.log('父组件beforeUnmount'+this.hd)
  },
  unmounted(){
     console.log('父组件unmounted'+this.hd)
  }
}
</script>

<style lang="scss" scoped></style>
