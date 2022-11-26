import { createRouter, createWebHashHistory } from 'vue-router' //创建路由
import List from './components/List.vue'
import Blog from './components/Blog.vue'
import Login from './components/Login.vue'
const router = createRouter({
  history: createWebHashHistory(), //内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  routes: [
    { path: '/', component: List },
    { path: '/blog/:id', component: Blog }, //加上:id获取参数
    { path: '/login', component: Login },
  ],
})
router.beforeEach((to, from, next) => {
  console.log(
    '************每次路由切换的时候都会调用这个beforeEach方法，那么我们可以在这里验证token**********',
  )
  console.log('to=', to)
  console.log('from=', from)
  let token = localStorage.getItem('name')
  console.log(
    '🚀 ~ file: router.js ~ line 20 ~ router.beforeEach ~ token',
    token,
  )
  if (token || to.path === '/login') {
    next() //如果在参数中写了next，但是在方法中不用，那么这个app就无法跳转。
    console.log(
      '************如果有token或者要跳转到login页面，那么就使用next()方法让页面继续跳转**********',
    )
  } else {
    next('/login')
  }
})
export default router
