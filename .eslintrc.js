// http://eslint.org/docs/user-guide/configuring
module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true
  },
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  rules: {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    "no-mixed-spaces-and-tabs": [0],
    "no-tabs": 0,
    "skipBlankLines": 0,
    "ignoreComments": 0,
    "no-trailing-spaces": [2, { "skipBlankLines": true }],
    "no-multiple-empty-lines": 0,
    "space-before-function-paren": 0,
    "quotes": 0,
    "comma-dangle": 0,
    "padded-blocks": 0,
    "indent": 0,
    "no-trailing-spaces": 0,
    "no-unused-vars": 0,
    "camelcase": 0

  },
  globals: {}
}