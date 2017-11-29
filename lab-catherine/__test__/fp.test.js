'use strict';

const fp = require('../lib/fp');

//++++++++++++++++++++++++++++++++++++
// catherine - fp.map test functions
//++++++++++++++++++++++++++++++++++++

describe('fp.test.js', () => {

  describe(('testing to see if fp.map is functioning as expected'), () => {

    test('testing that .map is functioning properly', () => {
      expect(fp.map(a => a * 3, 
        [1, 2, 3]
      )).toEqual([3, 6, 9]);
    });
  });

  describe(('testing to see if fp.map contains invalid input'), () => {
    
    test('will an error be thrown with an invalid callback', () => {
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
    
    test('testing that .map will throw an error if empty', () => {
      expect(() => {
        fp.map(a => a * 3,
          []
        );
      }
      ).toThrow();
    });
    
    test('testing that .map will throw an error if passed a value that is not a number', () => {
      expect(() => {
        fp.map(a => {
          a * 3;
        },
        [1, null, 3]
        );
      }
      ).toThrow();
    });
  });

  //++++++++++++++++++++++++++++++++++++
  // catherine - fp.filter test functions
  //++++++++++++++++++++++++++++++++++++

  describe(('testing to see if fp.filter is functioning as expected'), () => {
    test('testing that .filter is functioning properly', () => {
      expect(fp.filter(a => a < 3,
        [1, 2, 3]
      )).toEqual([1, 2]);
    });
  });

  describe(('testing to see if fp.filter contains invalid input'), () => {

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

    test('testing that .filter will throw an error if empty', () => {
      expect(() => {
        fp.filter(a => a * 3,
          []
        );
      }
      ).toThrow();
    });

    test('testing that .filter will throw an error if passed a value that is not a number', () => {
      expect(() => {
        fp.filter(a => {
          a * 3;
        },
        [null, null, 3]
        );
      }
      ).toThrow();
    });
  });

  //++++++++++++++++++++++++++++++++++++
  // catherine - fp.reduce test functions
  //++++++++++++++++++++++++++++++++++++

  describe(('fp.reduce'), () => {
    test('testing that .reduce is functioning properly', () => {
      expect(fp.reduce(
        (a,b) => (a + b),
        [0, 1, 2],
        0
      )
      );
    });
    test('testing that .reduce callback must be a function', () => {
      expect(() => {
        fp.reduce('a,b', 
          [0, 1, 2],
          0
        );
      }
      ).toThrow();
    });
    test('testing that .reduce collection must be an object', () => {
      expect(() => {
        fp.reduce(
          (a,b) => (a + b),
          'hello',
          0
        );
      }
      ).toThrow();
    });
  });
});