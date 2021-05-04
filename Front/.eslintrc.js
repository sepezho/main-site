module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: ['airbnb-typescript'],
  rules: {
    'import/no-unresolved': 'off', // todo Узнать что за правило и почему оно плохо работает
    'import/prefer-default-export': 'off',
    'arrow-body-style': 'off',
    'no-empty-pattern': 'off',
    'padded-blocks': 'off',
    'space-before-function-paren': 'off',
    'react/jsx-props-no-spreading': 'off',
    'implicit-arrow-linebreak': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'max-len': ['error', {'tabWidth': 2, code: 120}],
    'object-curly-newline': 'off',
    'object-curly-spacing': 'off',
    'no-confusing-arrow': 'off',
    'consistent-return': 'off',
    'no-return-assign': 'off',
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        'multiline': {
          'delimiter': 'semi',
          'requireLast': true,
        },
        'singleline': {
          'delimiter': 'comma',
          'requireLast': false,
        },
      },
    ],
  },
  settings: {
    'import/resolver': {
      typescript: {
        "alwaysTryTypes": true
      },
    },
  },
};
