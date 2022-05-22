import { createRouter, createWebHashHistory } from 'vue-router'
import About from '../views/About'
import Home from '../views/Home'
const routes = [
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
]
const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
})
export default router
