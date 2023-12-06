/**
 * Created by VICSOLWANG.
 * Date: 2023/11/9 14:54
 * Email: vic.sol.wang@gmail.com
 */

import config from './src/config.js';
import ignoreConfig from './eslintignore.config.js';

export default [
  ...config,
  {
    rules: {
      'import/extensions': 'off',
    },
  },
  {
    ignores: ignoreConfig,
  },
];
