import Vue from 'vue'
import Router from 'vue-router'

import Home from '../pages/homePage/home.vue'

/* 使用路由 */
Vue.use(Router)

const home = {
  path: '/home',
  name: 'Home',
  component: Home,
  Children: [],
}

home.Children.push()

const base = [
  home,
  {
    path: '/*',
    name: '404',
  },
]

const router = new Router({
  /* vue-router两种模式: hash, history */
  mode: 'history',
  linkActiveClass: 'active',
  history: false,
  routes: base,
})

/* 路由监听 */
router.beforeEach((to, from, next) => {
  /* 验证登录信息等 */

  next()
})

export default router