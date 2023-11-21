/**
 * Created by VICSOLWANG.
 * Date: 2023/11/12 16:16
 * Email: vic.sol.wang@gmail.com
 */

export default {
  '**/*.{js,ts}': [
    'prettier --write --list-different',
    'eslint --no-error-on-unmatched-pattern --fix',
  ],
  '**/*.json': ['prettier --write --list-different'],
};
