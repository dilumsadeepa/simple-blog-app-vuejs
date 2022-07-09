import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/Register.vue')
    },
    {
      path: '/dashbord',
      name: 'dashbord',
      component: () => import('../views/Dashbord.vue'),
      meta: {
        authRequired: true,
      }
    },
    {
      path: '/adminblog',
      name: 'blog',
      component: () => import('../views/Adminblog.vue'),
      meta: {
        authRequired: true,
      }
    },
    {
      path: '/addblog',
      name: 'addblog',
      component: () => import('../views/AddBlog.vue'),
      meta: {
        authRequired: true,
      }
    },
    {
      path: '/viewblog/:id',
      name: 'viewblog',
      component: () => import('../views/ViewBlog.vue'),
      meta: {
        authRequired: true,
      }
    },
    {
      path: '/editblog/:id',
      name: 'editblog',
      component: () => import('../views/EditBlog.vue'),
      meta: {
        authRequired: true,
      }
    }
  ]
})

export default router
