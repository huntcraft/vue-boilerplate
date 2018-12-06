const configMap = {
  development: {
    scopedName: '[folder]-[name]-[local]-[hash:base64:5]'
  },
  production: {
    scopedName: '[hash:base64:5]'
  }
}

module.exports = function (api) {
  const env = api.env();
  // api.cache(true);

  const presets = [
    ['@babel/preset-env', { modules: false }]
  ];

  const plugins = [
    '@babel/proposal-class-properties',
    '@babel/proposal-object-rest-spread',
    '@babel/plugin-syntax-dynamic-import'
  ];

  return {
    presets,
    plugins
  };
}
