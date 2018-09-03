/* 拿到types中的常量进行修改 */
import * as types from './mutation-types'

/* mutations里是一些方法 */
const mutations = {
  /* 方法名就是mutation-types中的值,第一个参数能获取到当前state.js中的state,第二个参数就是提交mutations时传的值 */
  [types.TEST_DATA](state, test) {
    state.testDate = test
  },
}

export default mutations