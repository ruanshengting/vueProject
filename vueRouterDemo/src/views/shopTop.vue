<template>
  <div>-----------this is shopTop-------------</div>
  <!-- 父组件访问子组件,$ref -->
  <!-- ref:用来给元素或者子组件注册引用信息 -->
  <Home ref="hello" />
  <div>
    <button ref="testButton" @click="sendParent">提交数据给父组件</button>
  </div>
  <div>-----------this is shopTop-------------</div>
</template>
<script>
import Home from './Home.vue'
export default {
  components: { Home },
  data() {
    return {
      msg: 'This is shopTop page',
    }
  },
  methods: {
    //step1:在子组件中触发事件
    sendParent() {
      // this.$emit('事件名称', '发送的参数')
      this.$emit('injectMsg', this.msg)
    },
  },
  mounted() {
    console.log('this.$refs=', this.$refs)
    console.log(this.$refs.testButton.innerHTML)
  },
}
</script>
