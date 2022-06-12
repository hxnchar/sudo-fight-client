module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-sass-guidelines',
    'stylelint-prettier/recommended',
    'stylelint-config-prettier',
  ],
  rules: {
    'max-nesting-depth': 5,
  },
};
