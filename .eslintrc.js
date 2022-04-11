module.exports = {
  extends: ['airbnb', 'plugin:prettier/recommended'],
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
    jquery: true,
    jest: true,
  },
  rules: {
    'prefer-promise-reject-errors': 0,
    'no-use-before-define': 0,
    'max-len': ['error', { code: 120 }],
    'jsx-a11y/accessible-emoji': 0,
    'import/extensions': 0,

    // react plugin
    'react/function-component-definition': 0,
    'react/jsx-props-no-spreading': 0,
    'react/display-name': 1,
    'react/no-array-index-key': 0,
    'react/react-in-jsx-scope': 0,
    'react/prop-types': 0,
    'react/forbid-prop-types': 0,
    'react/no-unescaped-entities': 0,
    'react/require-default-props': 0,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx', '.tsx'],
      },
    ],

    // prettier plugin
    'prettier/prettier': [
      'error',
      {
        printWidth: 120,
        singleQuote: true,
        tabWidth: 2,
        useTabs: false,
        semi: true,
        arrowParens: 'always',
        trailingComma: 'es5',
        bracketSpacing: true,
      },
    ],

    // react-hooks plugin
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
  plugins: ['html', 'react', 'react-hooks', '@typescript-eslint/eslint-plugin', 'prettier'],
};
