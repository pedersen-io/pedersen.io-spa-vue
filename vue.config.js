module.exports = {
  lintOnSave: false,
  productionSourceMap: false,
  parallel: false,
  chainWebpack: (config) => {
    config.plugins.delete('eslint');
  },
};
