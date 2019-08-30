import VueRouter from 'vue-router'
import * as Axios from 'axios'
import constant from '@/constant'

const baseURL = ''

/* 缓存信息 */
const CacheKeyOfAuth = '__CacheKeyOfAuth__'

/* 保存缓存信息 */
export const setAuthInfo = user => {
  if (!user) return

  const userStr = JSON.stringify(user)
  sessionStorage.setItem(CacheKeyOfAuth, userStr)
}

/* 清空缓存信息 */
export const clearAuthInfo = () => {
  sessionStorage.setItem(CacheKeyOfAuth, null)
}

/* 获取缓存信息 */
export const getAuthInfo = () => {
  let user = sessionStorage.getItem(CacheKeyOfAuth)
  /* JS短路表达式 */
  user = user && JSON.parse(user)
  return user
}

/* 封装try/catch */
const awaitWrap = promise => {
  return promise
    .then(data => [data, null])
    .catch(err => [null, handleErr(err)])
}

/* 检查API响应情况 */
const checkRespones = (res, msg) => {
  // console.log('API响应: ', res)
  const data = msg ? res.meta : res
  const code = res.ResultCode
  /* code判断拦截器中请求状态, msg为undefined表示成功发送请求, 返回数据 */
  if (code === constant.ApiResultCodeNormal || msg === undefined) {
    /* API响应正常 */
    return Promise.resolve(data)
  }

  const error = new Error()
  error.code = code
  error.msg = res.ResultMessage || '大兄弟不但什么都没写,连0都没有返回'
  return Promise.reject(error)
}

/* API响应错误时 */
const handleError = err => {
  // console.log(err)
  /* 未登录 */
  if (err.code === constant.ApiResultCodeNoLogin) {
    console.log('尚未登录')
    VueRouter.push('/login')
    return
  }
  /* 其它逻辑错误 */
  if (err.code > 0) {
    /* 服务端错误信息 */
    console.error('服务端:', err.msg || '未知')
  } else {
    /* 客户端错误信息 */
    console.error('客户端:', err.msg || '未知')
  }
}

/* axios请求控制器初始化 */
let controller = null

/* 停止回调 */
const stopCallback = cancel => {
  controller = cancel
}

/* axios实例 */
const instance = Axios.create({
  /* 请求方式 */
  methods: 'post',

  /* API地址 */
  baseURL: constant.ApiBasePath,
  // baseURL: baseURL,

  /* 请求超时 */
  timeout: constant.ApiMaxResponseTime,

  /* 请求格式 */
  contentType: 'application/json;charset=UTF-8',
  /* 表单请求格式 */
  /* headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  }, */

  /* 请求格式 */
  responseType: 'json',

  /* 数据上传回调 */
  upload () {
  },

  /* 干掉指定token */
  cancelToken: new Axios.CancelToken(stopCallback)
})

/* 停止回调方法关联到axios实例中 */
instance.cancel = msg => {
  if (controller) controller(msg)
}

/* 请求拦截器: 发送请求之前 */
instance.interceptors.request.use(req => {
  // console.log('请求拦截器: ', req)
  const Req = req || {}
  // const { data } = Req
  /* 封装已经认证的信息 */
  const auto = getAuthInfo()
  if (auto) {
    const userInfo = `${auto.token_type} ${auto.assets_token}`
    Req.headers.Authorization = userInfo
  }

  return Req
}, (err) => {
  const Err = err || new Error()
  return Promise.reject(Err)
})

/* 响应请求拦截器钩子: 在接口函数发送请求前 */
instance.interceptors.response.use(res => {
  // console.log('拦截器钩子获取参数: ', res)
  /* 解构赋值, 取res.data和res.status */
  const { data, status } = res

  const back = {}
  back.data = data
  back.status = status
  return checkRespones(data, '拦截器')
}, (err) => {
  const Err = err
  // console.log('拦截器钩子获取错误: ', err.response)

  /* 抛出错误 */
  err.code = err.response.data.ResultCode || 2000
  err.msg = err.response.data.ResultMessage || '你掉网了大兄弟'
  return Promise.reject(Err)
})

export const handleErr = handleError

export const checkResp = checkRespones

export const wrap = awaitWrap

export const ajax = instance