<template>
  <div>this is news</div>
</template>
<script>
export default {
  data() {
    return {
      age: 18,
    }
  },
  //可以在路由组件内直接定义路由导航守卫(传递给路由配置的)
  beforeRouteEnter(to, from, next) {
    //这个方法里面 拿不到this
    console.log('About to=', to)
    console.log('About from=', from)
    console.log('路由进入组件之前')
    next((THAT) => {
      console.log(THAT.age) //这样就可以拿到data里的值
    })
  },
  beforeRouteUpdate() {
    console.log('路由更新组件之前')
  },
  beforeRouteLeave() {
    console.log('路由离开组件之前')
  },
}
</script>
