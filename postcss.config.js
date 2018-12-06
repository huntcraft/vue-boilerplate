module.exports = {
  syntax: 'postcss-scss',
  plugins: {
    'postcss-preset-env': {
      features: {
        'nesting-rules': true
      }
    }
  }
};
