import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
// import Chart from '@/pages/Chart/Index'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    }
    // {
    //   path: '/chart',
    //   name: 'chart',
    //   component: Chart,
    //   meta: {
    //     requiresAuth: true
    //   }
    // }
  ]
})

export default router
