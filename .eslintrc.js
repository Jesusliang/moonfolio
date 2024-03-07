module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', 'standard', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',
    'react/jsx-first-prop-new-line': [1, 'multiline'],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    semi: 'off',
    '@typescript-eslint/semi': ['error', 'never'],
    'key-spacing': ['error', { beforeColon: false, afterColon: true }]
  },
  globals: {
    NodeJS: true
  }
}
