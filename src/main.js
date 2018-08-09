import Vue from 'vue'

import App from './App.vue'
import router from './router'
/* vuex */
import store from './store'

/* 是否开启Debug模式 */
Vue.config.productionTip = false

/* 异常捕获 */
Vue.config.errorHandler = function(msg, vm, trace) {
  console.log(msg)
  console.log(vm)
  console.log(trace)
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
