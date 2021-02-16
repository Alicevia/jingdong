const path = require('path')
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        views: path.resolve(__dirname, 'src/views'),
        comp: path.resolve(__dirname, 'src/comp')
      }
    }
  }

}
