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
    <!-- <hdButton :content="appcontent" :disabled="false" type="cool" />
    <hdButton content="Hello" hdTip="提示：" :disabled="true" type="yes" />
    <hdButton
      v-bind="{ content: '保存', type: 'yes', style: 'margin-top:20px' }"
    /> -->
  </div>
</template>

<script>
import hdButton from './components/Button.vue'
export default {
  components: { hdButton },
  data() {
    return {
      appcontent: 'hhhhhhhh ',
      btContent: 'avaTest',
      testObj: {
        text: 'test',
      },
    }
  },
}
</script>

<style lang="scss" scoped></style>
