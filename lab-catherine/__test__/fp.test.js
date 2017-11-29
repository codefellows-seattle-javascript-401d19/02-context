'use strict';

const fp = require('../lib/fp');

// catherine - fp.map test functions

describe('fp.test.js', () => {
  describe(('fp.map'), () => {
    test('testing that .map is functioning properly', () => {
      expect(fp.map(a => a * 3, 
        [1, 2, 3]
      )).toEqual([3, 6, 9]);
    });
    test('testing that .map callback must be a function', () => {
      expect(() => {
        fp.map('a', 
          [1, 2, 3]
        );
      }
      ).toThrow();
    });
    test('testing that .map collection must be an object', () => {
      expect(() => {
        fp.map(a => a * 3, 
          'hello'
        );
      }
      ).toThrow();
    });
    test('testing that .map will return an empty array as an empty array', () => {
      expect(fp.map(a => a * 3,
        []
      )).toEqual([]);
    });
    test('testing that .map will throw an error if passed a value that is not a number', () => {
      expect(() => {
        fp.map(a => {
          a * 3;
          if(typeof a !== 'number') throw new TypeError('array can only include numbers');
        },
        [1, null, 3]
        );
      }
      ).toThrow();
    });
  });

  // catherine - fp.filter test functions

  describe(('fp.filter'), () => {
    test('testing that .filter is functioning properly', () => {
      expect(fp.filter(a => a < 3,
        [1, 2, 3]
      )).toEqual([1, 2]);
    });
    test('testing that .filter callback must be a function', () => {
      expect(() => {
        fp.filter('a', 
          [1, 2, 3]
        );
      }
      ).toThrow();
    });
    test('testing that .filter collection must be an object', () => {
      expect(() => {
        fp.filter(a => a * 3, 
          'hello'
        );
      }
      ).toThrow();
    });
    test('testing that .filter will return an empty array as an empty array', () => {
      expect(fp.filter(a => a * 3,
        []
      )).toEqual([]);
    });
    test('testing that .filter will throw an error if passed a value that is not a number', () => {
      expect(() => {
        fp.filter(a => {
          a * 3;
          if(typeof a !== 'number') throw new TypeError('array can only include numbers');
        },
        [1, null, 3]
        );
      }
      ).toThrow();
    });
  });



//   describe(('fp.reduce'), () => {
//     test('testing that .reduce is functioning properly', () => {
 
//     });
//   });
//   describe(('fp.slice'), () => {
//     test('testing that .slice is functioning properly', () => {
 
//     });
//   });

});