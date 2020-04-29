import Vue from 'vue'
/* 引入ElementUI组件库 */
import ElementUI from 'element-ui'
/* 项目内组件路径 */
import Biwolly from '@/common/components'
import 'element-ui/lib/theme-chalk/index.css'
/* 引入Lottie动画库 */
import Lottie from 'vue-lottie'

import App from './App.vue'
import router from './router'
/* vuex */
import store from './store'

/* Public */
import Fn from './common/js/public'
import Data from './common/js/data'

/* viewport */
import { viewport } from '@Fn/viewport'

/* 是否开启Debug模式 */
Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(Biwolly)

/* 全局注册lottie组件 */
Vue.component('lottie', Lottie)

/* 全局公用函数 */
Vue.prototype.$fn = Fn
Reflect.ownKeys(Data).forEach(key => {
  Reflect.set(Vue.prototype, key, Data[key])
  // Reflect.defineProperty(Vue.prototype, key, {
  //   enumerable: true,
  //   configurable: false,
  //   get() {
  //     return Reflect.get(Data, key)
  //   },
  //   set(val) {
  //     Reflect.set(Vue.prototype, key, Data[key])
  //   },
  // })
})


Object.defineProperty(Vue.prototype, '$Fn', {
  enumerable: true,
  set() {
    console.error('不允许更改的方法')
  },
  get() {
    return Fn
  }
})
/* 全局公用函数 */

/* 启用viewport */
viewport(window, document)
/* 启用viewport */

/* 异常捕获 */
// Vue.config.errorHandler = function(msg, vm, trace) {
//   console.log('全局异常捕获')
//   console.log(msg)
//   console.log(vm)
//   console.log(trace)
// }

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
 