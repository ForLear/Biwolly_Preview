import Vue from 'vue'
/* 引入ElementUI组件库 */
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
/* 引入Lottie动画库 */
import Lottie from 'vue-lottie'

import App from './App.vue'
import router from './router'
/* vuex */
import store from './store'

/* 是否开启Debug模式 */
Vue.config.productionTip = false

Vue.use(ElementUI)

/* 全局注册lottie组件 */
Vue.component('lottie', Lottie)

/* 异常捕获 */
Vue.config.errorHandler = function(msg, vm, trace) {
  console.log('全局异常捕获')
  console.log(msg)
  console.log(vm)
  console.log(trace)
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
 