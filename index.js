module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
  ],
  plugins: ['@typescript-eslint', 'react', 'jest'],
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json',
    sourceType: 'module',
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

    // jest
    'jest/consistent-test-it': ['error', { fn: 'test' }],
    'jest/expect-expect': 'error',
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'warn',
    'jest/no-identical-title': 'error',
    'jest/no-jest-import': 'error',
    'jest/no-large-snapshots': ['warn', { maxSize: 300 }],
    'jest/prefer-strict-equal': 'warn',
    'jest/prefer-to-be': 'error',
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

    // typescript
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-use-before-define': 0,
  },
}
