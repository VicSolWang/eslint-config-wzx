/**
 * Created by VICSOLWANG.
 * Date: 2020/02/16 0:42
 * Email: vic.sol.wang@gmail.com
 */

const test = require('ava');
const { ESLint } = require('eslint');
const rule = require('./index');

const isObject = (obj) => typeof obj === 'object' && obj !== null;

const isArray = (array) => Array.isArray(array);

test('Test basic properties of config.', (t) => {
  t.true(isArray(rule.plugins));
  t.true(isObject(rule.rules));
});

test('Load config in eslint to validate all rule syntax is correct.', async (t) => {
  const eslint = new ESLint();
  const code = 'const foo = 1;\nconst bar = () => {};\nbar(foo);\n';
  const results = await eslint.lintText(code);
  t.is(((results || [])[0] || {}).errorCount, 0);
});
