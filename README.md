# eslint-config-wzx

[![NPM version](https://img.shields.io/npm/v/eslint-config-wzx)](https://www.npmjs.com/package/eslint-config-wzx)
[![node](https://img.shields.io/node/v/eslint-config-wzx)](https://nodejs.org)
[![Build Status](https://travis-ci.com/VicSolWang/eslint-config-wzx.svg?branch=master)](https://travis-ci.com/VicSolWang/eslint-config-wzx)
[![codecov](https://codecov.io/gh/VicSolWang/eslint-config-wzx/branch/master/graph/badge.svg)](https://codecov.io/gh/VicSolWang/eslint-config-wzx)
[![NPM downloads](https://img.shields.io/npm/dt/eslint-config-wzx)](https://www.npmjs.com/package/eslint-config-wzx)

The custom eslint rules based on [eslint-config-airbnb-base](https://www.npmjs.com/package/eslint-config-airbnb-base). (Support Typescript Eslint)

# Installation

    npm install --save-dev eslint-config-wzx

Note: Typescript eslint needs to install [typescript](https://www.npmjs.com/package/typescript), [@typescript-eslint/parser](https://www.npmjs.com/package/@typescript-eslint/parser), [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin).
   
    npm install --save-dev typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin

# Usage

Add eslint-config-wzx to the "extends" in your `.eslintrc.* file`.

    {
      "extends": "wzx"
    }

Note: Typescript eslint needs `tsconfig.json` in your project root directory.

# License

[MIT](LICENSE).
