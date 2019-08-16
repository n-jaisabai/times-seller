import Vue from 'vue'
import Router from 'vue-router'
import Home from './layouts/Home.vue'
import Warehouse from './layouts/Warehouse.vue'
import Detail from './components/Detail.vue'
import About from './views/About.vue'
import Categories from './views/Categories'
import ProductsAdmin from './views/ProductsAdmin'
import Signin from './layouts/Signin'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/signin',
      name: 'signin',
      component: Signin
    },
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
    },
    {
      path: '/warehouse',
      name: 'warehouse',
      component: Warehouse,
      children: [
        {
          path: 'home',
          name: 'home'
        },
        {
          path: 'products',
          name: 'products',
          component: ProductsAdmin
        },
        {
          path: 'users',
          name: 'users'
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
