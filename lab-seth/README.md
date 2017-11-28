In your README.md describe the exported values of each module defined in your lib/ directory. Every function description should include it's airty (expected number of parameters), the expected data for each parameter (data-type and limitations), and it's behavior (for both valid and invalid use). Feel free to write any additional information in your README.md.


arithmetic.js exports an object named Arithmetic that has sub and add functions that add or subtract the input values, but if any of the input values are not numbers then the function returns null.
add has an airity of 2, returns the sum of the inputs
sub has an airity of 2, returns the second input minus the first input.

greet.js exports and object named Greet that takes a string input and outputs a concatenated strong of "hello <input>", but if any of the input values are not strings then the function returns null.
greet has an airity of 1.
