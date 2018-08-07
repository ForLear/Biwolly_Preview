import VueRouter from 'vue-router'
import * as axios from 'axios'
import constant from '@/constant'

/* 缓存信息 */
const CacheKeyOfAuth = '__CacheKeyOfAuth__'

/* 保存缓存信息 */
export const setAuthInfo = function(user) {
  if(!user) return

  const userStr = JSON.parse(user)
  sessionStorage.setItem(CacheKeyOfAuth, userStr)
}

/* 清空缓存信息 */
export const clearAuthInfo = function() {
  sessionStorage.setItem(CacheKeyOfAuth, null)
}

/* 获取缓存信息 */
export const getAuthInfo = function() {
  let user = sessionStorage.getItem(CacheKeyOfAuth)
  user = user && JSON.parse(user)
  return user
}

/* 检查API响应情况 */
const checkRespones = function(res) {
  const code = res.ResultCode
  if(code === ApiApiResultCodeNormal) {
    /* API响应正常 */
    return Promise.resolve(res)
  }
  
  const error = new Error()
  error.code = code
  error.msg = res.ResultMessage
  return Promise.resolve(res)
}

/* API响应错误时 */
const handleError = function(err) {
  /* 未登录 */
  if(err.code === constant.ApiResultCodeNoLogin) {
    console.log('尚未登录')
    VueRouter.push('/login')
    return
  }

  /* 其它逻辑错误 */
  if(err.code > 0) {
    /* 服务端错误信息 */
    console.log('服务端:\n', err.msg || '未知')
  } else {
    /* 客户端错误信息 */
    console.log('客户端:\n', err.msg || '未知')
  }
}