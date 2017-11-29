

## Lab 02 class 401d19 Documentation

The exported values of fp.js is an object named fp.

Functions
<fp.map> has an arity of 2 callback(function), collection(array).
returns a new <array> with the callback <function> applied on the original elements unless there are errors.
It’s limitations are that it should take any array and throws a TypeError if collection input is not an array.

<fp.reduce> has an arity of 3 callback(function), collection(array)and initialValue(string, number)
will return a single value when applying a <function> on a <accumulator> and the <array>.
It’s limitations are that it should take any array and optional initialValue and throws a TypeError if collection input is not an array.
And will throw a TypeError if callback is not a function.

<fp.filter> has an arity of 2 callback(function), collection(array).
will return an <array> of elements that are passed through the callback filter
It’s limitations are that it should take any array and throws a TypeError if collection input is not an array.
And will throw a TypeError if callback is not a function.

<fp.slice> has an arity: 3 begin(number), end(number), collection(array)
will return a new <array> with numbers sliced from the original <array>
It’s limitations are that it should take any array and will throw a TypeError if collection input is not an array.
And will throw a TypeError if begin or end are not a number.
