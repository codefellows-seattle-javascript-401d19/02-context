'use strict';

const fp = require('../lib/fp');

describe('fp.test.js', () => {

  describe('testing functionality for fp.map', () => {

    test('does map return expected values', () => {
      expect(fp.map(
        e => e + 2,
        [0, 1, 2]
      )).toEqual([2, 3, 4]);
    });
  });

  describe('testing invalid input for fp.map', () => {

    test('is an error thrown with invalid values in collection', () => {
      const newFun = () => {
        fp.map(
          e => e + 2,
          [null, 1, 2]
        );
      };
      const noColl = () => {
        fp.map(
          e => e + 2,
          []
        );
      };
      const noArr = () => {
        fp.map(
          e => e + 2,
          'whatsup'
        );
      };
      expect(newFun).toThrow();
      expect(noColl).toThrow();
      expect(noArr).toThrow();
    });

    test('is an error thrown with invalid callback', () => {
      const badFun = () => {
        fp.map(
          'hello',
          [0, 1, 2]
        );
      };
      expect(badFun).toThrow();
    });
  });

  describe('testing functionality for fp.filter', () => {

    test('does filter return expected values', () => {
      expect(fp.filter(
        e => e < 5,
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
      )).toEqual([0, 1, 2, 3, 4]);
    });
  });

  describe('testing invalid input for fp.filter', () => {

    test('is an error thrown with invalid values in collection', () => {
      const newFilt = () => {
        fp.filter(
          e => e < 2,
          [null, 1, 2]
        );
      };
      const noFiltColl = () => {
        fp.filter(
          e => e < 2,
          []
        );
      };
      const noFiltArr = () => {
        fp.filter(
          e => e < 2,
          'whatsup'
        );
      };
      expect(newFilt).toThrow();
      expect(noFiltColl).toThrow();
      expect(noFiltArr).toThrow();
    });

    test('is an error thrown with invalid callback', () => {
      const badFilt = () => {
        fp.filter(
          'hello',
          [0, 1, 2]
        );
      };
      expect(badFilt).toThrow();
    });
  });

  describe('testing functionality for fp.reduce', () => {

    test('does reduce return expected values', () => {
      expect(fp.reduce(
        (a, c) => a + c,
        [1, 2, 3],
        0
      )).toEqual(6);
    });
  });

  describe('testing invalid input for fp.reduce', () => {

    test('is an error thrown with invalid values in collection', () => {
      const newRed = () => {
        fp.reduce(
          (a, c) => a + c,
          [1, 'wawa', 3],
          0
        );
      };
      const noRedColl = () => {
        fp.reduce(
          (a, c) => a + c,
          [],
          0
        );
      };
      const noRedArr = () => {
        fp.reduce(
          (a, c) => a + c,
          'whatevs',
          0
        );
      };
      expect(newRed).toThrow();
      expect(noRedColl).toThrow();
      expect(noRedArr).toThrow();
    });

    test('is an error thrown with invalid accumulator', () => {
      const badAcc = () => {
        fp.reduce(
          (a, c) => a + c,
          [1, 2, 3],
          'a'
        );
      };
      expect(badAcc).toThrow();
    });

    test('is an error thrown with invalid callback', () => {
      const badRed = () => {
        fp.reduce(
          'nah',
          [1, 2, 3],
          0
        );
      };
      expect(badRed).toThrow();
    });
  });

  describe('testing functionality for fp.slice', () => {

    test('does slice return expected values', () => {
      expect(fp.slice(
        [0, 1, 2, 3],
        1,
        3
      )).toEqual([1, 2]);
      expect(fp.slice(
        ['apple', 'banana', 'orange', 'plum'],
        undefined,
        undefined
      )).toEqual(['apple', 'banana', 'orange', 'plum']);
    });
  });

  describe('testing invalid input for fp.slice', () => {

    test('if a start or end value is supplied, it must be an integer not longer than array.length', () => {
      const newSli = () => {
        fp.slice(
          [1, 2, 3],
          'boop'
        );
      };
      const newSli2 = () => {
        fp.slice(
          [1, 2, 3],
          2,
          ['boop', 'lololololol']
        );
      };
      const newSli3 = () => {
        fp.slice(
          [1, 2, 3],
          4
        );
      };

      expect(newSli).toThrow();
      expect(newSli2).toThrow();
      expect(newSli3).toThrow();
    });

    test('is an error thrown with an invalid collection', () => {
      const badSli = () => {
        fp.slice(
          'foofoo'
        );
      };
      expect(badSli).toThrow();
      const noSliArr = () => {
        fp.slice(
          []
        );
      };
      expect(noSliArr).toThrow();
    });
  });
});
