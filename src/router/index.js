import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/home'

/* 具体模块路由 */
import Biwolly from './Biwolly_routes/biwolly'

/* 使用路由 */
Vue.use(Router)

const home = {
  path: '/',
  name: 'Home',
  component: Home,
  children: [],
}

home.children.push(...Biwolly)

const base = [
  home,
  {
    path: '/*',
    name: '404',
  },
]

const router = new Router({
  /* vue-router两种模式: hash, history */
  // mode: 'history',
  linkActiveClass: 'active',
  history: false,
  routes: base,
})

/* 路由监听 */
router.beforeEach((to, from, next) => {
  /* 验证登录信息等 */
  if(to.path === '/fans') {
    next()
  }

  if(to.path === '/') {
    next({ path: '/fans' })
  }
  next()
})

export default router