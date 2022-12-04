/*main.js是整个vue的入口 不要写太多的逻辑， 在这里专门对路由进行处理*/
import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router'
// 1. 定义路由组件.
// 也可以从其他文件导入
//静态导入
//import Home from '../views/Home.vue'
//import About from '../views/About.vue'
import User from '../views/User.vue'
import NotFound from '../views/NotFound.vue'
import News from '../views/News.vue'
import StyleOne from '../views/StyleOne.vue'
import StyleTwo from '../views/StyleTwo.vue'
import Parent from '../views/Parent.vue'
import Page from '../views/Page.vue'
import shopTop from '../views/shopTop.vue'
import shopFooter from '../views/shopFooter.vue'
import shopMain from '../views/shopMain.vue'
//路由懒加载，用到时再加载
const Home = () => import('../views/Home.vue')
const About = () => import('../views/About.vue')
// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [
  {
    path: '/',
    /*//根据path重定向
  redirect: '/home' 
  */
    //根据命名路由重定向
    // redirect: { name: 'home' },
    //根据方法重定向
    redirect: (to) => {
      console.log(to) //当前的path
      return {
        name: 'home',
      }
    },
  }, //重定向
  { path: '/home', component: Home, name: 'home' },
  {
    path: '/about',
    component: About,
    name: 'about' /*给页面name属性*/,
    //单独的路由守卫
    beforeEnter: (to, from, next) => {
      console.log('About to=', to)
      console.log('About from=', from)
      if (123 == 123) {
        //条件不成立的话 about的router-view是不会出现的
        next()
      }
    },
  },
  { path: '/page', component: Page },
  {
    path: '/user/:id',
    component: User,
    props: true,
  },
  {
    path: '/shop/:id',
    components: {
      default: shopMain,
      shopTopViewName: shopTop,
      shopFooterViewName: shopFooter,
    },
    //给命名视图添加props,只有default视图才接收id
    props: {
      default: true,
      shopTopViewName: false,
      shopFooterViewName: false,
    },
  },
  {
    name: 'news',
    //+表示一至多，*表示零至多
    //使用正则表示参数只能是数字
    //path: '/news/:id(\\d+)',
    //有多个参数
    //path: '/news/:id+',
    //有0～多个参数
    // path: '/news/:id*',
    //'/news/:id?':参数不可以叠加,也就是说可以有0～1个参数 参数是什么都行
    path: '/news/:id?',
    component: News,
  },
  {
    path: '/parent',
    alias: ['/father', '/daddy'], //起别名，通过这个path也能访问这个组件
    component: Parent,
    //如果在Parent组件里这样写 <router-link to="/parent/style2">Go to Style2</router-link> 那么children的path就不用加/
    //如果在Parent组件里这样写 <router-link to="/style2">Go to Style2</router-link> 那么children的path就要加/
    children: [
      {
        path: 'style1',
        component: StyleOne,
      },
      { path: 'style2', component: StyleTwo },
    ],
  },
  {
    path: '/:path(.*)',
    component: NotFound,
  },
]

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  // history: createWebHashHistory(),
  history: createWebHistory(), //使用历史模式。
  //两者的区别在于 Hash模式的URL有#,但是历史模式没有#
  routes, // `routes: routes` 的缩写
})
/*全局守卫
router.beforeEach((to, from, next) => {
  console.log('to=', to)
  console.log('from=', from)
  next() //通行证
})
*/

export default router //导出路由，使得这个路由可以被挂载到main.js上
