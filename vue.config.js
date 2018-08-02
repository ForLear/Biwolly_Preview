/* vue-cli 3.0  vue.config.js配置 */

/* 测试环境 */
const BaseTest = '/'
/* 正式环境 */
const BaseDevp = '/'

const outputTest = 'dist_test'
const outputDevp = 'dist_devp'

const IsProd = process.env.NODE_DEV === 'production'

/*  */
const path = require('path');
function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  /* 基本路径 */
  baseUrl: IsProd ? BaseDevp : BaseTest,
  
  /* 输出文件路径 */
  outputDir: IsProd ? outputDevp : outputTest,

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
    port: 2018,
    /* 代理配置 后台API相关 */
    // proxy: {
    //   '/api': {
    //     target: process.env.VUE_VUE_APP_API_BASE_PATH,
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/api': '/api'
    //     }
    //   }
    // },
  },

  /* 第三方插件 */
  pluginOptions: {

  },

}