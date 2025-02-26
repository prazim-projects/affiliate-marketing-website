import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Products from '../views/Products.vue'
import Reset from '../views/Reset.vue'
import Register from '../views/Register.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/About.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: Register,

    },
    {
      path: '/login',
      name: 'login-page',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/products',
      name: 'prods',
      component: Products
    },
    {
      path: '/reset-pass',
      name: 'Recovery',
      component: Reset
    },
  ],
})

export default router
