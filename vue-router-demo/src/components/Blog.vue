<template>
  <div>博客详情:{{ $route.params.id }}</div>
  <p>
    {{ blogContent }}
  </p>
</template>

<script>
export default {
  data() {
    return {
      blogContent: '',
    }
  },
  methods: {
    getBlog(id) {
      switch (id) {
        case '1':
          this.blogContent = 'this is first blog'
          break
        case '2':
          this.blogContent = 'this is 2nd blog'
          break
        case '3':
          this.blogContent = 'this is 3th blog'
          break
        case '4':
          this.blogContent = 'this is 4th blog'
          break
        case '5':
          this.blogContent = 'this is 5th blog'
          break
      }
    },
  },
  created() {
    let id = this.$route.params.id
    this.getBlog(id)
  },
}
</script>

<style lang="scss" scoped></style>
