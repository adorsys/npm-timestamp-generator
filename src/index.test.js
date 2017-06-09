require('babel-polyfill');

const { generateTimestamp } = require('../dist/index');
const t = require('tap');
const td = require('testdouble');

const originalNow = Date.now;

t.test('generateTimestamp', (t1) => {
  // arrange
  const expected = 4711;
  const fn = td.function('now');
  td.when(fn()).thenReturn(expected);
  Date.now = fn;

  // act
  const first = generateTimestamp();
  const second = generateTimestamp();

  // assert
  t1.ok(first === expected, 'returns the expected timestamp');
  t1.true(first < second, 'subsequent calls return increasing timestamps');

  // cleanup
  t1.tearDown(() => {
    Date.now = originalNow;
  });
  t1.end();
});
