/* 初始化入口文件 Vuex */
import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'
import state from './state'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

/* Vuex调试工具 */
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  getters,
  mutations,
  state,

  /* 开发环境使用,会损耗性能 */
  strict: debug,
  /* 插件 */
  plugins: debug ? [createLogger()] : []
})
