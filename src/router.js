import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/main',
      name: 'main',
      component: () => import('./views/Main.vue')
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('./views/Products.vue')
    },
    {
      path: '/userInfo',
      name: 'userInfo',
      component: () => import('./views/UserInfo.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('./views/Cart.vue')
    },
    {
      path: '/confirm',
      name: 'confirm',
      component: () => import('./views/Confirm.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('./views/Register.vue')
    },
    {
      path: '/userPage',
      name: 'userPage',
      component: () => import('./views/UserPage.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('./views/Admin.vue')
    }
  ]
})
