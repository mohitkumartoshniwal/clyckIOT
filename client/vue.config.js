module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000'
      },
    },
    port: 8008
  }
}