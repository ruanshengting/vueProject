<template>
  <div>---------- this is GrandChild component {{ newMsg }} ----------</div>
</template>
<script>
export default {
  inject: ['message'], //得到父组件提供的数据
  //inject: ['obj'],
  computed: {
    newMsg: function () {
      return this.message()
    },
  },
}
</script>
