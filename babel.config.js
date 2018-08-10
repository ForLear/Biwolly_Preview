module.exports = {
  presets: [
    '@vue/app'
    // ['es2015', { modules: false }]
  ],
  plugins: [ 
    /* 减少element-ui的打包体积 */
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibraryName: 'theme-chalk',
      },
    ],
  ],
}