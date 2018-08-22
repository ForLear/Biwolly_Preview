/* api请求 */ 
module.exports = {
  /* 请求基本路径 */
  ApiBasePath: process.env.BI_WO_LLY,

  /* 最大响应时间 */
  ApiMaxResponseTime: 3e4,

  /* 请求返回正常 */
  ApiResultCodeNormal: 0,

  /* 尚未登录/登录过期 */
  ApiResultCodeNoLogin: 1011,

  /* 请求错误 */
  ApiResultCodeServerErr: 10000,

  /* 客户端处理信息 状态码 < 0 */
  ApiHandleCodeClientErr: -99999,
}