<template>
  <div @click="d1" style="background-color: #c34a36;">
    <div @click="d2" style="background-color: #845ec2; width: 200px;">D2</div>
  </div>
  <div @click="d1" style="background-color: #c34a36;">
    <div @click.stop="d2" style="background-color: #845ec2; width: 200px;">
      .stop相当于 event.stopPropagation()阻止向上冒泡，这样就只执行了d2方法
    </div>
  </div>
  <div @click.capture="d1" style="background-color: #af5d00;">
    <div @click="d2" style="background-color: #009efa; width: 200px;">
      .capture:添加事件监听器时使用事件捕获模式,即内部元素触发的事件先在此处理，然后才交由内部元素进行处理，也就是说先执行d1再执行d2
    </div>
  </div>
  <div @click.self="d1" style="background-color: #af5d00;">
    <div @click="d2" style="background-color: #009efa; width: 200px;">
      只当在 event.target
      是当前元素自身时触发处理函数,即事件不是从内部元素触发的.比方说这个d1里面包含这d2的时候是不会被触发的，直接点击到d1的时候才被触发
    </div>
  </div>
  <!-- 点击事件将只会触发一次 -->
  <a @click.once="doThis">点击事件将只会触发一次</a>
  <a @click.prevent="doThis" href="https://ww.baidu.com">
    .prevent阻止默认事件
  </a>
  <div
    @scroll.passive="d1"
    style="border: 1px solid #af5d00; height: 200px; overflow-y: auto;"
  >
    <div
      @click="d2"
      style="background-color: #009efa; width: 200px; height: 2000px;"
    >
      .passive 会告诉浏览器你不想阻止事件的默认行为，这样可以提高性能
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    d1() {
      console.log('this is d1')
    },
    d2(event) {
      console.log('this is d2')
    },
    doThis() {
      console.log('doThis')
    },
  },
}
</script>

<style lang="scss" scoped>
div {
  margin-top: 30px;
}
</style>
