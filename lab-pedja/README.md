![cf](https://i.imgur.com/7v5ASc8.png) 02: Lab Tools and Context
======

## Feature Tasks
#### fp Module
Created in lib/ directory fp.js constains fp module that exports an object.
fp module has 4 stand alone functions `map`, `filter`, `reduce`, and `slice`.

* Both `fp.map` and `fp.filter` take 2 parameters `(callback, collection)` and will return new Array.
Map will return array with items multiplied with 2.
Filter function will return an array of numbers that are higher than 3.
`callback` parameter has to be a function and `collection` has to be an object. If `fp.map` and `fp.filter` are invoked with not valid arguments exception will be thrown and new TypeError will be printed.

* `fp.reduce` takes three parameters `(callback, initialState, collection)` and returns a sum of all items in collection array.
If function is invoked with callback argument that is not a function or with initialValue argument that is not a number, exception will be thrown and new TypeError will be printed.

* `fp.slice` takes three parameters `(begin, end, collection)` and returns new array.If function is invoked with `begin` and `end` arguments that are not a number, exception will be thrown and new TypeError will be printed.
