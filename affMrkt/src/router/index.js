import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/main/Home.vue'
import Reset from '../views/user/Reset.vue'
import Register from '../views/user/Register.vue'
import CategoryView from "@/views/main/Category.vue";
import TagView from "@/views/main/Tag.vue";
import AllCategoriesView from "@/views/main/AllCategories.vue";
import AllTagsView from "@/views/main/AllTags.vue";
import PostView from "@/views/main/posts.vue"



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/category',
      name: "category",
      component: CategoryView
    },
    {
      path: '/tag',
      name: 'tag',
      component: TagView
    },
    {
      path: '/catagories/:category',
      name: "Category",
      component: AllCategoriesView
    },
    {
      path: '/tags',
      name: "Tags",
      component: AllTagsView
    },
    {
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/main/About.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: Register,

    },
    {
      path: '/login',
      name: 'login-page',
      component: () => import('../views/user/Login.vue')
    },
    {
      path: '/posts',
      name: 'posts',
      component: PostView,
      // meta: {
      //   requiresAuth: true,
      // }
    },
    {
      path: '/reset-pass',
      name: 'Recovery',
      component: Reset
    },
  ],
})


// routes requiring auth are redirected to login-page
router.beforeEach((to, from) => {
  if(to.meta.requiresAuth && to.name !=='login-page'){
    return { name: 'login-page'}
  }
})

export default router
