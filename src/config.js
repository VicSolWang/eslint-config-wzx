/**
 * Created by VICSOLWANG.
 * Date: 2021/12/18 20:38
 * Email: vic.sol.wang@gmail.com
 */

const customRules = {
  'global-require': 'warn',
  'import/no-dynamic-require': 'warn',
  'import/no-extraneous-dependencies': 'warn',
  'import/no-unresolved': 'warn',
  'no-bitwise': 'off',
  'no-nested-ternary': 'off',
  'no-param-reassign': 'warn',
  'no-script-url': 'warn',
  'no-underscore-dangle': 'off',
};

const config = {
  extends: ['airbnb-base', 'prettier'],
  rules: customRules,
};

try {
  require('typescript');
  require('@typescript-eslint/parser');
  require('@typescript-eslint/eslint-plugin');
  config.overrides = [
    {
      files: ['*.ts', '*.tsx'],
      extends: ['airbnb-base', 'airbnb-typescript/base', 'prettier'],
      parserOptions: {
        project: './tsconfig.json',
      },
      rules: {
        ...customRules,
        '@typescript-eslint/no-unused-vars': 'warn',
      },
    },
  ];
} catch (err) {
  console.info(
    'Note: Typescript eslint needs to install typescript, @typescript-eslint/parser, @typescript-eslint/eslint-plugin.',
  );
}

module.exports = config;
