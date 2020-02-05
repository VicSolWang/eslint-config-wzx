/**
 * Created by VicSolWang.
 * Date: 2020-02-01 0:34
 * Email: vic.sol.wang@gmail.com
 */

module.exports = {
	env: {
		browser: true,
	},
	extends: 'eslint-config-airbnb-base',
	rules: {
		indent: ['error', 'tab'],
		'no-console': [
			'error',
			{
				allow: ['warn', 'error'],
			},
		],
		'no-tabs': 'off',
	},
};
