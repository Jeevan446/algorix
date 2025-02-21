Algorix
Algorix is a versatile JavaScript utility package that provides a collection of useful functions for common algorithmic tasks. This package can be used in both Node.js and browser environments and supports both CommonJS (require) and ES Modules (import) syntax.

Installation
You can install Algorix via npm:
npm install algorix

Usage

CommonJS (Node.js)
const algoObject = require('algorix');

ES Modules
import algoObject from 'algorix';


Functions

1. percentegeChange(oldValue, newValue)
Calculates the percentage change between two values.

Parameters:
oldValue (Number): The original value.
newValue (Number): The new value.

Returns:
(String): The percentage change as a string with four decimal places, followed by a % symbol. If oldValue is 0, it returns Infinity.

Example:
console.log(algoObject.percentegeChange(50, 75)); // "50%"
console.log(algoObject.percentegeChange(0, 100)); // Infinity


2. factor(num = 10)
Generates an array of factors for a given number.

Parameters:
num (Number): The number to find factors for. Default is 10.

Returns:
(Array): An array of factors. If the input is invalid (not an integer or less than 1), it returns undefined.

Example:
console.log(algoObject.factor(12)); // [1, 2, 3, 4, 6, 12]
console.log(algoObject.factor(7)); // [1, 7]
console.log(algoObject.factor(0)); // undefined


3. randRange(min, max, condition = 0)
Generates a random number within a specified range.

Parameters:
min (Number): The lower bound of the range.
max (Number): The upper bound of the range.
condition (Number): Determines the type of random number generated. Use 0 for integers and 1 for floating-point numbers. Default is 0.

Returns:
(Number | String): A random number within the range. If the range is invalid, it returns "Invalid".

Example:
console.log(algoObject.randRange(1, 10)); // Random integer between 1 and 10
console.log(algoObject.randRange(1, 10, 1)); // Random float between 1 and 10
console.log(algoObject.randRange(10, 1)); // "Invalid"


4. randInsert(length = 4, IndexValuepair = null)
Generates a random number of a specified length, with optional fixed digits at specific indices.

Parameters:
length (Number): The length of the number to generate. Default is 4.
IndexValuepair (Array): An array of objects specifying fixed digits at specific indices. Each object should have index and value properties. Default is null.

Returns:
(Number): A random number of the specified length.

Example:
console.log(algoObject.randInsert(5)); // Random 5-digit number
console.log(algoObject.randInsert(5, [{ index: 1, value: 9 }, { index: 3, value: 7 }])); // Random 5-digit number with 9 at index 1 and 7 at index 3


5. isPrime(a)
Checks if a number is prime.

Parameters:
a (Number): The number to check.

Returns:
(Boolean): true if the number is prime, otherwise false.

Example:
console.log(algoObject.isPrime(7)); // true
console.log(algoObject.isPrime(10)); // false


6. reverse(a)
Reverses a number, string, or array.

Parameters:
a (Number | String | Array): The input to reverse.

Returns:
(Number | String | Array): The reversed input. If the input is invalid, it returns "Invalid".


Example:
console.log(algoObject.reverse(123)); // 321
console.log(algoObject.reverse("hello")); // "olleh"
console.log(algoObject.reverse([1, 2, 3])); // [3, 2, 1]
console.log(algoObject.reverse(null)); // "Invalid"


License
This project is licensed under the MIT License. See the LICENSE file for details.


Feel free to contribute or report issues on GitHub.