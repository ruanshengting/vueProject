<template>
  <div>this is a page</div>
  <button @click="goPage()">Jump to another page</button>
</template>
<script>
export default {
  methods: {
    goPage() {
      //通过push方法,直接传递url
      //  this.$router.push('/')
      //通过push方法,传递OBJECT
      //this.$router.push({ path: '/about' })
      // 通过push方法,传递OBJECT,实现URL传递参数
      //  this.$router.push({ path: '/news', query: { id: '9999' } })
      // 通过push方法,通过name指定页面,传递OBJECT,实现URL传递参数(有问号？)
      // this.$router.push({ name: 'about', query: { username: 'eduardo' } })
      // 通过push方法,通过path指定页面,传递OBJECT,实现URL传递参数(有问号？)
      /*//替换当前页面 方法1
      this.$router.push({
        path: '/about',
        query: { username: 'eduardo' },
        replace: true,
      })
      */
      //替换当前页面 方法2
      this.$router.replace({
        path: '/about',
        query: { username: 'eduardo' },
      })
    },
  },
}
</script>
