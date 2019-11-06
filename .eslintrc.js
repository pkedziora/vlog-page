module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    jest: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:nuxt/recommended'
    //'@nuxtjs',
  ],
  // add your custom rules here
  rules: {
  }
}
