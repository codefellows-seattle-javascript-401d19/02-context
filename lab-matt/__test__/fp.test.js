'use strict';

const fp = require('../lib/fp.js');

describe('fp.js', () => {
  describe('fp.map - (map multiplies each element by 2)', () => {

    test('[0, 1, 2] => [0, 2, 4]', () => {
      expect(fp.map(currentElement => currentElement * 2,
        [0, 1, 2])).toEqual([0,2,4]);
    });

    test('empty array returns an empty array', () => {
      expect(fp.map(currentElement => currentElement * 2,
        [])).toEqual([]);
    });

    test('if any element is not a number will throw an error', () => {
      expect(() => {
        fp.map(currentElement => {
          if (typeof(currentElement) !== 'number') throw new TypeError('array can only include numbers');
          return currentElement * 2;
        },
        [1, 4, null]);
      }).toThrow();
    });
  });

  describe('fp.filter - (returns previous array with only the words that are longer than 5 letters)', () => {
    const words = ['foobar', 'truthy', 'falsy', 'true', 'one'];
    test(`['foobar', 'truthy', 'falsy', 'true', 'one'] => ['foobar', 'truthy']`, () => {
      expect(fp.filter((currentElement) => currentElement.length > 5, words)).toEqual(['foobar', 'truthy']);
    });
  });
});
