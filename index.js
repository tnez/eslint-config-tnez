module.exports = {
  extends: [
    'standard',
    'prettier',
    'plugin:react/recommended',
  ],
  plugins: [
    'import',
    'promise',
    'jest',
    'prettier',
    'standard',
    'react',
  ],
  env: {
    browser: true,
    node: true,
    jest: true,
    'jest/globals': true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
  rules: {
    // eslint
    'sort-keys': ['error', 'asc', { caseSensitive: true, natural: true }],

    // eslint-plugin-import
    'import/order': ['error', { 'newlines-between': 'always' }],
    'import/prefer-default-export': 0,

    // jest
    'jest/consistent-test-it': ['error', {'fn': 'test'}],
    'jest/expect-expect': 'error',
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'warn',
    'jest/no-identical-title': 'error',
    'jest/no-jest-import': 'error',
    'jest/no-large-snapshots': ['warn', { maxSize: 300 }],
    'jest/prefer-strict-equal': 'warn',
    'jest/prefer-to-be-null': 'error',
    'jest/prefer-to-be-undefined': 'error',
    'jest/prefer-to-have-length': 'error',
    'jest/valid-expect': 'error',

    // prettier
    'prettier/prettier': [
      'error',
      // following rules should match .prettierrc
      {
        semi: false,
        singleQuote: true,
        trailingComma: 'all',
      },
    ],

    // react
    'react/prop-types': 0,
  },
}
