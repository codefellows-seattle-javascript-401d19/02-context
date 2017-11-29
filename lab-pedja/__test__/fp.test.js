'use strict';

const fp = require('../lib/fp');

describe('fp.js', () => {

  // testing fp.map function
  describe('fp.map', () => {

    test('returns array with values multiplied with 2', () => {
      expect(fp.map(
        (num) => num * 2,
        [0, 1, 2]
      )).toEqual([0, 2, 4]);
    });

    test('exception will be thrown if error occurs', () => {
      expect(
        () => {
          fp.map('I\'m not a function ()', [0, 1, 2]);
      }).toThrow();
      expect(
        () => {
          fp.map(
            (num) => num * 2,
            'one'
          );
      }).toThrow();
    });
  });

  // testing fp.filter function
  describe('fp.filter', () => {

    test('return value should be number higher than 3', () => {
      expect(fp.filter(
        (num) => num > 3,
        [1, 2, 3, 4, 5]
      )).toEqual([4, 5]);
    });

    test('exception will be thrown if error occurs', () => {
      expect(
        () => {
          fp.filter('I\'m not a function ()', [0, 1, 2]);
      }).toThrow();
      expect(
        () => {
          fp.filter(
            (num) => num > 3,
            'one'
          );
      }).toThrow();
    });
  });

  // testing fp.reduce function
  describe('fp.reduce', () => {

    test('return value should be sum of the collection if callback is adding them', () => {
      expect(fp.reduce(
        (accu, curr) => {
          return accu + curr;
        },
        [1, 2, 3],
        10
      )).toBe(16);
    });

    test('exception will be thrown if error occurs', () => {
      expect(
        () => {
          fp.reduce('I\'m not a function ()', [0, 1, 2], 10);
        }
      ).toThrow();
      expect(
        () => {
          fp.reduce(
            (accu, curr) => {
              return accu + curr;
            },
            [0, 1, 2],
            'someString');
        }
      ).toThrow();
    });
  });

});
