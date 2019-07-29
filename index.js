module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint:recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
  ],
  plugins: [
    '@typescript-eslint',
    'react',
    'jest',
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
