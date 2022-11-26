//import VueRouter from 'vue-router'
const User = {
  template: '<div>User comp</div>',
}
const router = new VueRouter({
  routes: [
    {
      path: '/user/:id',
      component: User,
    },
  ],
})
var app = new Vue({
  el: '#app',
  router,
})
