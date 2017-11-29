'use strict';

const fp = require('../lib/fp');

describe('fp.js', () => {
  describe('fp.map', () => {
    test('map should return a new array which applies a function to each value of input array', () => {
      expect(fp.map(x => x * 2, [1,2,3])).toEqual([2,4,6]);
      expect(fp.map(x => x, 'hello')).toEqual(['h', 'e', 'l', 'l', 'o']);
    });
    test('map should return exception if first input is not a function', () => {
      expect( () => {
        fp.map('not a function', [1,2,3]);
      }).toThrow();
    });
    test('map should return exception if 2nd input is not an array or string', () => {
      expect( () => {
        fp.map(x => x * 2, true);
      }
      ).toThrow();
      expect( () => {
        fp.map(x => x * 2, null);
      }
      ).toThrow();
    });
  });
});

describe('fp.js', () => {
  describe('fp.filter', () => {
    test('filter should return an array of items which pass the callback', () => {
      expect(fp.filter(x => x.length > 5, ['cat', 'dog', 'elephant'])).toEqual(['elephant']);
    });
    test('filter should return exception if first input is not a function', () => {
      expect( () => {
        fp.filter('not a function', ['cat', 'dog', 'elephant']);
      }).toThrow();
    });
    test('filter should return exception if 2nd input is not iterable', () => {
      expect( () => {
        fp.filter(x => x.length > 5, true);
      }).toThrow();
    });
  });
});

describe('fp.js', () => {
  describe('fp.reduce', () => {
    test('reduce should return value of sum of the collection', () => {
      expect(fp.reduce( (acc, curr) => {
        return acc + curr;
      },
      [1,2,3],
      0)).toEqual(6);
    });
    test('reduce should return exception if first input is not a function', () => {
      expect( () => {
        fp.reduce(('not a function', [1,2,3], 0)).toThrow();
      });
    });
    test('reduce should return exception if 2nd input is not iterable', () => {
      expect( () => {
        fp.reduce( (acc, curr) => {
          return acc + curr;
        }, true, 0);
      }).toThrow();
      expect( () => {
        fp.reduce( (acc, curr) => {
          return acc + curr;
        }, null, 0);
      }).toThrow();
    });
  });
});

describe('fp.js', () => {
  describe('fp.slice', () => {
    test('slice should return a portion of the given array from begin to end', () => {
      expect(fp.slice(0, 2, ['cat', 'dog', 'elephant'])).toEqual(['cat', 'dog']);
    });
    test('slice throws an exception if the first or second arguments are not integers', () => {
      expect( () => {
        fp.slice((1.2, 2, ['cat', 'dog', 'elephant'])).toThrow();
      });
      expect( () => {
        fp.slice((1, '', ['cat', 'dog', 'elephant'])).toThrow();
      });
    });
    test('slice throws an exception if the 3rd argument is not iterable', () => {
      expect( () => {
        fp.slice((0, 2, 1)).toThrow();
      });
      expect( () => {
        fp.slice((0, 2, '')).toThrow();
      });
    });
  });
});
