import Vue from 'vue'
import Router from 'vue-router'
import Home from './layouts/Home.vue'
import Detail from './components/Dtail.vue'
import About from './views/About.vue'
import Addmin from './components/Addmin.vue'
import home2 from './components/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/addmin',
      name: 'addmin',
      component: Addmin
    },
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        { path: 'home2',
          name: 'home2',
          component: home2 },
        { path: 'detail',
          name: 'detail',
          component: Detail },
        {
          path: 'about',
          name: 'about',
          component: About
        }
      ]
    }
  ]
})
