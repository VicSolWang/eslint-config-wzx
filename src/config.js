/**
 * Created by VICSOLWANG.
 * Date: 2021/12/18 20:38
 * Email: vic.sol.wang@gmail.com
 */

const config = {
  extends: ['airbnb-base', 'prettier'],
  plugins: ['import'],
  rules: {
    'global-require': 'warn',
    'import/no-dynamic-require': 'warn',
    'no-bitwise': 'off',
    'no-nested-ternary': 'off',
    'no-script-url': 'warn',
    'no-underscore-dangle': 'off',
  },
};

try {
  require('typescript');
  require('@typescript-eslint/parser');
  require('@typescript-eslint/eslint-plugin');
  require('eslint-config-airbnb-typescript');
  config.overrides = [
    {
      files: ['*.ts', '*.tsx'],
      extends: ['airbnb-typescript/base', 'prettier'],
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  ];
} catch (err) {
  console.error(err);
}

module.exports = config;
