'use strict';

const fp = require('../lib/fp');

describe(`fp.test.js`, () => {
  describe(`fp.map function`, () => {
    test(`fp.map should return a new array with each element altered based on the callback function`, () => {
      expect(fp.map(x => x + 1, [1,2,3])).toEqual([2,3,4]);
      expect(fp.map(x => x + 1, [])).toEqual([]);
      expect(fp.map(x => x * 2, [1,2,3])).toEqual([2,4,6]);
    });
    test(`fp.map should throw an error if the callback provided is not a function`, () => {
      expect(() => {
        fp.map(`I'm not a function`, [1,2,3])
      }).toThrow(`The callback you provided is not a function`)
    });
  })
  describe(`fp.filter`, () => {
    test(`fp.filter should return a new array with only the elements which fit the specifications provided`, () => {
      expect(fp.filter(num => num > 8, [7,8,9])).toEqual([9]);
      expect(fp.filter(string => string.length > 2, ['a', 'hello', 'eh', 'goodbye'])).toEqual(['hello', 'goodbye']);
    });
  })

  // describe(`fp.slice`, () => {
  //   test(`fp.slice should return a portion of the input from the specified start point to end point (not inclusive`, () => {
  //     expect(fp.slice(0, 3, 'coding')).toEqual('cod');
  //   })
  // })
});
