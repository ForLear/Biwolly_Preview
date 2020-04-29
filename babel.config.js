module.exports = {
  presets: [
    '@vue/app',
    // [{ modules: false }]
  ],
  plugins: [ 
    /* 减少element-ui的打包体积 */
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibraryName: 'theme-chalk',
      }
    ],
    [
      'import',
      {
        libraryName: 'components',
        customName: name => `src/components/${name}`,
      }
    ],
  ]
}