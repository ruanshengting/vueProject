<template>
  <div :class="[type, { disabled }]">
    <span v-bind="$attrs">{{ hdTip }}</span>
    显示子组件的content： {{ content }}
  </div>

  <button @click="content = '子组件的change'">子组件的change</button>
  <hr />
  <button @click="text = '子组件改变object'">子组件改变object</button>
  <span>This is text:{{ text }}</span>
  <div>{{ arr }}</div>
</template>

<script>
export default {
  //props: ['content'], //这个content要用''包起来
  props: {
    //Props:用于父组件向子组件传递数据，不要把它当成响应式数据。
    testObj: {
      type: Object,
    },
    content: {
      type: String,
      default: 'Yes',
      required: true, //一定要有这个值传过来
    },
    arr: {
      type: Array,
      default() {
        //数组和对象是引用类型，如果直接default:  相当于所有组件共用一个数据？？引用类型要用函数形式
        return [1, 2, 3]
      },
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'info',
      validator(v) {
        console.log(v)
        console.log(['yes', 'no', 'info'].includes(v))
        return ['yes', 'no', 'info'].includes(v)
      },
    },
    hdTip: String,
  },
  data() {
    return {
      text: this.content, //把content props变成响应式的初始值
      arr: this.testObj,
    }
  },
  watch: {
    //使用watch监听props:content之后，prop就是响应式数据了
    content(v) {
      this.text = v
    },
  },
}
</script>

<style lang="scss" scoped>
div {
  background-color: #4b4453;
  color: #fff;
  padding: 5px 10px;
  opacity: 0.6;
  transition: 1s;
  &:hover {
    opacity: 1;
  }
  &.disabled {
    background-color: #c34a36;
  }
}
</style>
