module.exports = {
  lintOnSave: false,
  configureWebpack: {
    externals: {
      vue: 'Vue',
      'd2-crud-rc': 'd2CrudPlus',
      lodash: 'lodash'
    }
  }
}
