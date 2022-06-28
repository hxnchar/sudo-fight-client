module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'metarhia',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'import'],
  rules: {
    'max-len': ['error', { code: 120 }],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
    },
  ],
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};
