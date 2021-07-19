module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
  ? '/Notes/'
  : '/',
  productionSourceMap: false,
  filenameHashing: true
};