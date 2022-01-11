module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb'],
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
  },
  rules: {
    'no-restricted-syntax': 0,
    'max-classes-per-file': 0,
    'import/prefer-default-export': 0,
    'operator-linebreak': [2, 'after'],
  },
};
