import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/views/Index.vue'
import store from "../store";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Index,
    alias: "/home",
    meta: { pageTitle: 'Home' }
  },
  {
    path: '/details/:bookId',
    name: 'Details',
    component: () => import('@/views/Details'),
    meta: { pageTitle: 'Details' },
    props: true
  },
  {
    path: "*",
    name: "NotFound",
    meta: { pageTitle: 'Not Found' },
    component: () => import("@/views/404.vue")
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
  store
})

router.afterEach((to, from) => {
  document.title = `${process.env.VUE_APP_TITLE} | ${to.meta.pageTitle}`
  window.scroll(0, 0)
})

export default router
