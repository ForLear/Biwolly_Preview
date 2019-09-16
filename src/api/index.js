import { getAuthInfo, setAuthInfo, clearAuthInfo, checkResp, handleErr, wrap, ajax } from './axios'

export { getAuthInfo, setAuthInfo, clearAuthInfo, checkResp, handleErr, wrap }

/* 注册 */
export const register = params => 
  ajax
    .post('/api/users', params)
    .then(res => checkResp(res))

/* 登录 */
export const login = params =>
  ajax
    .post('/api/authorizations', params)
    .then(res => checkResp(res))
    