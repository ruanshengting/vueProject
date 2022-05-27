<template>
  <div>
    <hr />
    基本类型是单向流传值。引用类型是双向传值。
    <hdButton
      :content="btContent"
      :disabled="false"
      type="yes"
      :testObj="testObj"
    />

    <hr />
    <button @click="btContent = '父组件change'">父组件btContent</button>
    {{ btContent }}
    <hr />
    <button @click="testObj.text = '父组件testObj'">父组件testObj</button>
    {{ testObj }}
    <hr />
    非props属性的传递
    <hdButton
      content="非props属性的传递"
      :disabled="false"
      type="no"
      id="1234"
      class="testProps"
    />
    <!-- <hdButton :content="appcontent" :disabled="false" type="cool" />
    <hdButton content="Hello" hdTip="提示：" :disabled="true" type="yes" />
    <hdButton
      v-bind="{ content: '保存', type: 'yes', style: 'margin-top:20px' }"
    /> -->
    <button @click="myAlert">myAlert</button>
    <sendEvent :click="myAlert" text="hhhh" />
  </div>
</template>

<script>
import hdButton from './components/Button.vue'
import sendEvent from './components/sendEvent.vue'
export default {
  components: { hdButton, sendEvent },
  data() {
    return {
      appcontent: 'hhhhhhhh ',
      btContent: 'avaTest',
      testObj: {
        text: 'test',
      },
    }
  },
  methods: {
    myAlert() {
      alert('myAlert')
    },
  },
}
</script>

<style lang="scss" scoped></style>
