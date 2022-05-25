<template>
  <div>
    Arr
  </div>
</template>

<script>
const obj = { name: 'ava' }
export default {
  data() {
    return { obj }
  },
  mounted() {
    //渲染完成，dom挂载完成之后开始执行
    console.log(this.obj.name)
  },
}
</script>

<style lang="scss" scoped></style>
