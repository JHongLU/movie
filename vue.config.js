module.exports = {
  // devServer: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://localhost:8080',
  //       ws: true,
  //       changeOrigin: true,
  //       pathRewrite: {
  //         '^/api': '/'
  //       }
  //     }
  //   }
  // },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/travelt/'
    : '/',
  outputDir: 'dist'
}