'use strict';

const fp = require('../lib/fp');

describe('fp.js tests', () => {
  describe('When called correctly, fp.map should take in a callback function and an array / array-like object, and return an Array.', () => {
    test('When called with an array, fp.map() should return a mapped array', () => {
      expect(fp.map(
        num => num * 2,
        [1, 2, 3]
      )).toEqual([2, 4, 6]);

      expect(fp.map(
        word => word + word,
        ['hi', 'there']
      )).toEqual(['hihi', 'therethere']);
    });

    test('When called with arguments are args, an acted-on array should be returned.', () => {
      expect(
        (function(){
          return fp.map(
            num => num * 2,
            arguments
          );
        })(1, 1.5, 5)
      ).toEqual([2, 3, 10]);

      expect(
        ((...args) => {
          return fp.map(
            word => word.toUpperCase(),
            args
          );
        })('i', 'use', 'sPrEaD!')
      ).toEqual(['I', 'USE', 'SPREAD!']);
    });

    test('When called with a non-array, but iterable object, like a string, the object should be returned as an array with its elements acted upon.', () => {
      expect(fp.map(
        char => char + char,
        'hey'
      )).toEqual(['hh', 'ee', 'yy']);

      expect(fp.map(
        num => Number(num) * 3,
        '123'
      )).toEqual([3, 6, 9]);
    });

    test('If the second argument is not an iterable object, an exception should be thrown.', () => {
      expect(() => {
        fp.map(
          ele => ele,
          456
        );
      }).toThrow();

      expect(() => {
        fp.map(
          ele => ele,
          null
        );
      }).toThrow();
    });

    test('If there are less than two arguments, an exception should be thrown.', () => {
      expect(() => {
        fp.map(
          ele => ele
        );
      }).toThrow();

      expect(() => {
        fp.map();
      }).toThrow();
    });
  });

  describe('When called correctly, fp.filter should take in a callback function and an array / array - like object, and return an Array.', () => {
    test('When given a valid callback function and an array, a filtered array should be returned.', () => {
      expect(
        fp.filter(
          num => num > 3,
          [1, 2, 3, 4, 5]
        )
      ).toEqual([4, 5]);

      expect(
        fp.filter(
          word => /schmoo/.test(word),
          ['shmee', 'schmaack', 'schmoo', 'schmoopoppy', 'shmapps']
        )
      ).toEqual(['schmoo', 'schmoopoppy']);
    });

    test('When given a valid callback and a string, a filtered array should be returned.', () => {
      expect(
        fp.filter(
          char => char === 'p',
          'schmeeple-schmapple-peups'
        )
      ).toEqual(['p', 'p', 'p', 'p', 'p']);
    });
  });
});