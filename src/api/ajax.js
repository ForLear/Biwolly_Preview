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
  return Promise.reject(res)
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

/* axios请求控制器初始化 */
let controller = null

/* 停止回调 */
const stopCallback = function(cancel) {
  controller = cancel
}

/* axios实例 */
const instance = Axios.create({
  /* 请求方式 */
  methods: 'post',

  /* API地址 */
  baseURL: constants.ApiBasePath,

  /* 请求超时 */
  timeout: constants.ApiMaxResponseTime,

  /* 请求格式 */
  contentType: 'application/json;charset=UTF-8',

  /* 请求格式 */
  responseType: 'json',

  /* 数据上传回调 */
  upload() {
  },

  /* 干掉指定token */
  cancelToken: new Axios.CancelToken(stopCallback)
})

/* 停止回调方法关联到axios实例中 */
instance.cancel = function(message) {
  if (controller) {
    controller(message)
  }
}

/* 请求拦截器 */
instance.interceptors.request.use((req) => {
  const Req = req || {}
  // const { data } = Req

  /* 封装已经认证的信息 */
  const auto = getAutoInfo()
  if(auto) {
    const userInfo = `${auto.token_type} ${auto.assets_token}`
    Req.headers.Authorization = userInfo
  }

  return Req
}, (err) => {
  const Err = err || new Error()
  return Promise.reject(Err)
})

/* 响应请求拦截器钩子 */
instance.interceptors.response.use((res) => {
  const { data } = res
  return checkRespones(data)
}, (err) => {
  const Err = err
  err.code = 2000
  err.msg = '你掉网了大兄弟'
  return Promise.reject(Err)
})


export const handleErr = handleError

export const checkResp = checkRespones

export const ajax = instance