const path = require('path');

module.exports = {
  extends: ['airbnb', 'plugin:vue/recommended'],
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  env: { browser: true },
  plugins: ['vue', 'import'],
  rules: {
    indent: [ 'error', 2 ],
    'linebreak-style': [ 'error' , 'windows'],
    'no-console': [ 'error' , {'allow': ['warn', 'error']}],
    'no-param-reassign': ['error', { 'props': false }],
    'arrow-body-style': ['error', 'as-needed'],
    'arrow-parens': ['error', 'as-needed'],
    // 'comma-dangle': ['error', 'never'],
    'import/no-extraneous-dependencies': ['error', { devDependencies : true}],
    'prefer-destructuring': [ 'error', { 'object': true, 'array': false }],
    'jsx-a11y/label-has-for': [ 2, {
      components: [ 'Label' ],
      required: {
        every: [ 'id' ]
      }
    }],
    'vue/max-attributes-per-line': [2, {
      singleline: 4,
      multiline: {
        max: 1,
        allowFirstLine: false
      }
    }]
  },
  'settings': {
    'import/core-modules': [ 'store', 'components', 'common', 'ducks', 'middleware' ],
    'import/resolver': {
      webpack: {
        config: path.resolve(__dirname, 'config/webpack.dev.js')
      }
    }
  }
};
