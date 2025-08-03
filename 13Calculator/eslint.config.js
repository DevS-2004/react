export default {
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  plugins: ['react'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2021,
    sourceType: 'module'
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    'react/prop-types': 'off'
  }
};
