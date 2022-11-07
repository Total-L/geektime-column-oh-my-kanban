module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb/hooks',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'no-unused-expressions': ['error', { allowShortCircuit: true }],
    'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['evt'] }],
    'react/prop-types': ['error', { skipUndeclared: true }],
    'react/no-unknown-property': ['error', { ignore: ['css'] }],
  },
};
