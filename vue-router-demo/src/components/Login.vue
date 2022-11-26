<template>
  <div>
    this is login page
  </div>
  <form @submit.prevent="login">
    <!-- 这里加prevent是为了不要让form去刷新页面 -->
    <div>
      <label>username:</label>
      <input type="text" v-model="username" />
    </div>
    <div>
      <label>password:</label>
      <input type="password" v-model="password" />
    </div>
    <button>Login</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    login() {
      console.log('记得要新开一个匿名窗口来测试这个功能')
      if (this.username === 'ava' && this.password === '123') {
        this.$router.push('/')
        localStorage.setItem('name', '12345678')
      } else {
        alert('Wrong!!!')
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
