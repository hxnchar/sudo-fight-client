module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  parserOptions: {
    sourceType: 'module',
  },
  overrides: [
    {
      files: '*.{ts,tsx}',
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      parserOptions: {
        project: 'tsconfig.json',
      },
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:prettier/recommended',
      ],
      rules: {
        'import/prefer-default-export': 'off',
      },
    },
  ],
};
