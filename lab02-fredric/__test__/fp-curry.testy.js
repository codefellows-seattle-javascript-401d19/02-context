'use strict';

const fp = require('../lib/fp.js');

describe('<fp.test.js>', () => {
  describe('tests for <fp.map>', () => {
    test('fp.map should return a new <array> with the callback <function> applied on the original elements unless there are errors', () => {
      expect(fp.map(
        n => n * 2, [1, 2, 3]
      )).toEqual([2, 4, 6]);
    });
    test('throw an exception if NOT an <array>', () => {
      expect(() => {
        fp.map((n => n * 2),
          'This is a string, NOT an <array>');
      }).toThrow();
    });
  });

  describe('tests <fp.reduce>', () => {
    test('fp.reduce will return a single value when applying a <function> on a <accumulator> and the <array>', () => {
      expect(fp.reduce(
        (accumulator, currentValue) => {
          return accumulator + currentValue;
        }, [1, 2, 3],
        0
      )).toBe(6);
    });

    test('An exception will be thrown if callback is NOT a <function>', () => {
      expect(() => {
        fp.reduce('This is a STRING, NOT a <function>', [1, 2, 3],
          0);
      }).toThrow();
      expect(() => {
        fp.reduce(
          [1, 2, 3], [1, 2, 3],
          0);
      }).toThrow();
    });

    test('An exception will be thrown if the collection is NOT an <array>', () => {
      expect(() => {
        fp.reduce(
          (accumulator, currentValue) => {
            return accumulator + currentValue;
          },
          'This is a STRING, NOT an <array>',
          0);
      }).toThrow();
    });

    describe('Tests for <fp.filter>', () => {
      test('<fp.filter> will return an <array> of elements that passed through the callback filter', () => {
        expect(fp.filter(
          (n => n < 3),
          [1, 2, 3]
        )).toEqual([1, 2]);
      });

      test('An exception will be thrown if the collection is NOT a <array>', () => {
        expect(() => {
          fp.filter(n => n < 3,
            'This is a STRING, NOT an <array>');
        }).toThrow();
      });

      test('An exception will be thrown if the callback is NOT a <function>', () => {
        expect(() => {
          fp.filter(
            'string',
            [1,2,3]);
        }).toThrow();
      });
    });

    describe('tests for <fp.slice>', () => {
      test('<fp.slice> will return a new <array> with numbers sliced from the original <array>', ()=> {
        expect(fp.slice(1, 4, [1, 2, 3, 5, 6]
        )).toEqual([2, 3, 5]);
      });

      test('An exception will be thrown if collection is not a <array>', () => {
        expect(() => {
          fp.slice(
            1,
            4,
            'collection not an array');
        }).toThrow();
      });

      test('An exception will be thrown if begin or end is not a number', () => {
        expect(() => {
          fp.slice(
            'string',
            4,
            [1,2,3,5,6,7,8]);
        }).toThrow();
        expect(() => {
          fp.slice(
            1,
            true,
            [1,2,3,5,6,7,8]);
        }).toThrow();
      });
    });
  });
});
