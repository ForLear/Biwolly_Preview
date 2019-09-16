/* vue-cli 3.0  vue.config.js配置 */

/* 测试环境 */
// const BaseTest = '/'
const BaseTest = 'dist_test/'
/* 正式环境 */
// const BaseDevp = '/'
const BaseDevp = 'dist_prod/'

const outputDevp = 'dist_test'
const outputProd = 'dist_prod'

const IsProd = process.env.NODE_ENV === 'production'

/* 配置chainWebpack */
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
      .set('@Fn', resolve('src/common/js'))
      .set('@Mixins', resolve('src/components/mixins'))
  },

  /* PWA相关 */
  pwa: {},

  /* 用于嵌套生成的静态资产（js，css，img，fonts）的目录 */
  // assetsDir: 'static',

  /* 以多页模式构建应用程序使用到 */
  // page: undefined,

  /* 是否生成源图 */
  productionSourceMap: !IsProd,

  /* CSS相关 */
  css: {
    /* 是否启用CSS Module(尚未配置) */
    modules: false,
  },

  /* 本地服务配置 */
  devServer: {
    /* 本地服务端口号 */
    port: 8102,
    /* 代理配置 后台API相关 */
    proxy: {
      '/api': {
        target: process.env.BI_WO_LLY,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      },
    },
  },

  /* 第三方插件 */
  pluginOptions: {

  },
}