# a-timestamp-generator

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Travis](https://img.shields.io/travis/adorsys/npm-timestamp-generator.svg?style=flat-square)](https://travis-ci.org/adorsys/npm-timestamp-generator/builds/)
[![Coverage Status](https://img.shields.io/coveralls/adorsys/npm-timestamp-generator.svg?style=flat-square)](https://coveralls.io/github/adorsys/npm-timestamp-generator?branch=master)
[![npm](https://img.shields.io/npm/v/a-timestamp-generator.svg?style=flat-square)](https://www.npmjs.com/package/a-timestamp-generator)
[![npm](https://img.shields.io/npm/dm/a-timestamp-generator.svg?style=flat-square)](https://www.npmjs.com/package/a-timestamp-generator)
[![license](https://img.shields.io/github/license/adorsys/npm-timestamp-generator.svg?style=flat-square)](https://github.com/adorsys/npm-timestamp-generator/blob/master/LICENSE)

A generator for creating timestamps.

## Homepage
[https://adorsys.github.io/npm-timestamp-generator/](https://adorsys.github.io/npm-timestamp-generator/)

## Installation

````
npm install a-timestamp-generator
````

## Usage

``` js
import TimestampGenerator from 'a-timestamp-generator';
const tg = new TimestampGenerator()
const firstTimestamp = tg.generate();
const secondTimestamp = tg.generate();

firstTimestamp < secondTimestamp // is always true
```

## Tests

First install dev dependencies with `npm install`, then run `npm test`.
