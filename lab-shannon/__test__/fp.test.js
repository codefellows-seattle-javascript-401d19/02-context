'use strict';

const fp = require('../lib/fp');

describe(`fp.test.js`, () => {
  describe(`fp.map function should return`, () => {
    test(`fp.map should return a new array with each element following the result of the callback function on the input provided`, () => {
      expect(fp.map(x => x + 1, [1,2,3])).toEqual([2,3,4]);
    })
  })
});
