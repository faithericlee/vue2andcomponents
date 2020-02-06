import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/cookies',
    name: 'cookies',
    component: resolve => require(['../views/Cookies.vue'], resolve),
  },
  {
    path: '/edit',
    name: 'edit',
    component: resolve => require(['../views/Edit.vue'], resolve),
  },
  {
    path: '/highlightjs',
    name: 'highlightjs',
    component: resolve => require(['../views/Highlightjs.vue'], resolve),
  },
  {
    path: '/clipboardjs',
    name: 'clipboardjs',
    component: resolve => require(['../views/Clipboardjs.vue'], resolve),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
