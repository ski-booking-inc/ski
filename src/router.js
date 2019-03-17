import Vue from 'vue'
import Router from 'vue-router'
import auth from './auth';

Vue.use(Router)

let router = new Router({
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
      component: () => import('./views/Products.vue'),
      children: [
        {
          path: '/age',
          name: 'age',
          component: () => import ('./components/Age.vue'),
          children: [
            {
              path: 'level',
              name: 'level',
              component: () => import ('./components/Level.vue')
            }
          ]
        }
      ]
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
      path: '/userPage',
      name: 'userPage',
      component: () => import('./views/UserPage.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('./views/Admin.vue'),
      meta: { requiresAuth: true },
      children: [
        {
          path: '/adminAdd',
          name: 'adminAdd',
          component: () => import('./components/AdminAdd.vue')
        },
        {
          path: '/adminBooking',
          name: 'adminBooking',
          component: () => import('./components/AdminBooking.vue')
        },
        {
          path: '/adminProducts',
          name: 'adminProducts',
          component: () => import('./components/AdminProducts.vue'),
          children: [
            {
              path: '/adminEdit/:id',
              name: 'adminEdit',
              component: () => import('./components/AdminEdit.vue')
            }
          ]
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue')
    }
  ]
})

// If Auth is required && false, go to /login
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth) && !auth.isAuthenticated()) {
    next({
      path: '/login'
    });
  } else {
    next();
  }
});

export default router;
