import { createRouter, createWebHistory } from 'vue-router'
import Main from '../views/index.vue'
import Home from '../views/Home.vue'
import Product from '../views/product/product.vue'
import History from '../views/history/history.vue'

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/product',
    name: 'product',
    component: Product
  },
  {
    path: '/history',
    name: 'history',
    component: History
  }
  // {
  //   path: '/',
  //   name: 'main',
  //   component: Main,
  //   redirect: '/home',
  //   children: [
  //     {
  //       path: 'home',
  //       name: 'home',
  //       component: Home
  //     },
  //     {
  //       path: 'history',
  //       name: 'history',
  //       component: History
  //     },
  //     {
  //       path: 'product',
  //       name: 'product',
  //       component: Product
  //     }
  //   ]
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
