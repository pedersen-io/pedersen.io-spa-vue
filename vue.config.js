module.exports = {
  lintOnSave: false,
  chainWebpack: (config) => {
    config.plugins.delete('eslint');
  },
};
