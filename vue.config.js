/* vue-cli 3.0  vue.config.js配置 */

/* 测试环境 */
const BaseTest = '/'
/* 正式环境 */
const BaseDevp = '/'

const outputDevp = 'dist_test'
const outputProd = 'dist_prod'

const IsProd = process.env.NODE_ENV === 'production'

/*  */
const path = require('path');
function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  /* 基本路径 */
  baseUrl: IsProd ? BaseDevp : BaseTest,
  
  /* 输出文件路径 */
  outputDir: IsProd ? outputProd : outputDevp,

  /* 配置目录别名 */
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
  },

  /* PWA相关 */
  pwa: {},

  /* 用于嵌套生成的静态资产（js，css，img，fonts）的目录 */
  // assetsDir: '',

  /* 以多页模式构建应用程序使用到 */
  // page: undefined,

  /* 是否生成源图 */
  productionSourceMap: !IsProd,

  /* CSS相关 */
  css: {
    /* 启用CSS Module */
    modules: true,
  },

  /* 本地服务配置 */
  devServer: {
    
    /* 本地服务端口号 */
    port: 8102,
    // host: '0.0.0.0',
    /* 代理配置 后台API相关 */
    proxy: {
      '/v1': {
        target: process.env.VUE_APP_API_BASE_PATH,
        changeOrigin: true,
        pathRewrite: {
          '^/v1': '/v1'
        }
      }
    },
  },

  /* 第三方插件 */
  pluginOptions: {

  },
}