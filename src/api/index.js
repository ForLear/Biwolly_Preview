import { getAuthInfo, setAuthInfo, clearAuthInfo, checkResp, handleErr, ajax } from './ajax'

export { getAuthInfo, setAuthInfo, clearAuthInfo, checkResp, handleErr }

export const register = function(params) {
  return ajax
    .post('/api/users', params)
    .then((res) => {
      return ajax.checkResp(res)
    })
}