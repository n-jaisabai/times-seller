import Vue from 'vue'
import Router from 'vue-router'
import Home from './layouts/Home.vue'
import Detail from './components/Dtail.vue'
import About from './views/About.vue'
import Categories from './views/Categories'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect: 'categories',
      children: [
        { path: 'categories',
          name: 'categories',
          component: Categories },
        {
          path: 'about',
          name: 'about',
          component: About
        }
      ]
    },
    {
      path: '/categories',
      name: 'categories',
      component: Home,
      children: [
        {
          path: 'about',
          name: 'about',
          component: About
        },
        {
          path: ':id',
          name: 'detail',
          component: Detail
        }
      ]
    }
    // {
    //   path: '*',
    //   name: '404',
    //   redirect: '/'
    // }
  ]
})
