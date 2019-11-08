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
  rules: {
    "no-console": "off",
    "no-plusplus": "off",
    "no-param-reassign": "off",
    "import/no-extraneous-dependencies": "off"
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: {
          resolve: {
            alias: {
              '~': __dirname,
            }
          }
        }
      }
    }
  }
}
