/**
 * Created by VICSOLWANG.
 * Date: 2021/12/18 20:38
 * Email: vic.sol.wang@gmail.com
 */

import { FlatCompat } from '@eslint/eslintrc';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

let $config = [...compat.extends('airbnb-base', 'prettier')];

try {
  await import('typescript');
  await import('@typescript-eslint/parser');
  await import('@typescript-eslint/eslint-plugin');
  $config = [
    ...$config,
    ...compat.config({
      overrides: [
        {
          files: ['*.ts', '*.tsx', '*.mts', '*.cts'],
          extends: ['airbnb-base', 'airbnb-typescript/base', 'prettier'],
          parserOptions: {
            project: './tsconfig.json',
          },
          rules: {
            '@typescript-eslint/naming-convention': 'warn',
            '@typescript-eslint/no-unused-vars': 'warn',
          },
        },
      ],
    }),
  ];
} catch (error) {
  console.info(
    'Note: Typescript eslint needs to install typescript, @typescript-eslint/parser, @typescript-eslint/eslint-plugin.',
  );
}

const config = [
  ...$config,
  {
    rules: {
      'global-require': 'warn',
      'no-bitwise': 'off',
      'no-nested-ternary': 'off',
      'no-param-reassign': 'warn',
      'no-script-url': 'warn',
      'no-underscore-dangle': 'off',
      'import/no-dynamic-require': 'warn',
      'import/no-extraneous-dependencies': 'warn',
      'import/no-named-as-default': 'warn',
      'import/no-named-as-default-member': 'warn',
      'import/no-unresolved': 'warn',
    },
  },
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  },
];

export default config;
