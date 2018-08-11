import { getAuthInfo, setAuthInfo, clearAuthInfo, checkResp, handleErr, ajax } from './ajax'

export { getAuthInfo, setAuthInfo, clearAuthInfo, checkResp, handleErr }

/* 注册 */
export const register = function(params) {
  return ajax
    .post('/api/users', params)
    .then((res) => {
      return ajax.checkResp(res) 
    })
}

/* 登录 */
export const login = function(params) {
  return ajax
    .post('/api/authorizations', params)
    .then((res) => {
      return ajax.checkResp(res)
    })
}