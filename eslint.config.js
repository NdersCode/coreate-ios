import js from '@eslint/js';
import typescriptParser from '@typescript-eslint/parser';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';

export default [
  js.configs.recommended,
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        require: 'readonly', // Allow require for React Native
        module: 'readonly',
        __dirname: 'readonly',
        console: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': typescriptPlugin,
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/ban-ts-comment': 'off', // Allow @ts-ignore
      'no-undef': 'off', // Turn off for TypeScript files
    },
  },
  {
    ignores: [
      'node_modules/',
      '.expo/',
      'ios/',
      'android/',
      '*.config.js',
    ],
  },
];