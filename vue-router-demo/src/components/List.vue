<template>
  <h1>列表</h1>
  <ul>
    <li v-for="item in blogList" :key="item.id">
      <router-link :to="'/blog/' + item.id">{{ item.title }}</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      blogList: [
        { id: 1, title: 'router教学1' },
        { id: 2, title: 'router教学2' },
        { id: 3, title: 'router教学3' },
        { id: 4, title: 'router教学4' },
        { id: 5, title: 'router教学5' },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
