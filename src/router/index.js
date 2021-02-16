import { createRouter, createWebHashHistory } from 'vue-router'
import TwoLayout from '../layout/twoLayout.vue'
const routes = [
  {
    path: '/',
    component: TwoLayout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: () => import(/* webpackChunkName:'home' */ 'views/home/home.vue')
      },
      {
        path: '/cart',
        component: () => import(/* webpackChunkName:'cart' */ 'views/cart/cart.vue')
      },
      {
        path: '/order',
        component: () => import(/* webpackChunkName:'order' */ 'views/order/order.vue')
      },
      {
        path: '/profile',
        component: () => import(/* webpackChunkName:'profile' */ 'views/profile/profile.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName:'login' */ 'views/login/login')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName:'register' */ 'views/register/register')
  }
]

const router = createRouter({
  linkActiveClass: 'active',
  history: createWebHashHistory(),
  routes
})

export default router
