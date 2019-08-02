import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/content/homepage/homepage'
import Solution from '@/components/content/solution/solution'
import Product from '@/components/content/product/product'
import Contact from '@/components/content/contactUs/contactUs'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/Solution',
      name: 'Solution',
      component: Solution
    },
    {
      path: '/product',
      name: 'product',
      component: Product
    },
    {
      path: '/contactUs',
      name: 'contactUs',
      component: Contact
    }
  ]
})
