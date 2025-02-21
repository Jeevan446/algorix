
# algorix
algorix is a versatile JavaScript utility package that provides a collection of useful functions for common algorithmic tasks. This package can be used in both Node.js and browser environments and supports both CommonJS (require) and ES Modules (import) syntax.



## Installation
You can install Algorix via npm:

```bash
  npm install algorix
```
    
## Usage

```commonjs
const algoObject = require('algorix');
or
import {algoObject} from 'algorix';
```







## functions
1) percentegeChange(oldValue, newValue)

```bash
console.log(algoObject.percentegeChange(50, 75));   // Output: "50%"
console.log(algoObject.percentegeChange(0, 100));   // Output: "Infinity"
console.log(algoObject.percentegeChange(100, 50));  // Output: "-50%"
console.log(algoObject.percentegeChange(0, 0));     // Output: "Infinity"

```
 2) factor(num )
```bash
console.log(algoObject.factor(12));  // Output: [1, 2, 3, 4, 6, 12]
console.log(algoObject.factor(7));   // Output: [1, 7]
console.log(algoObject.factor(0));   // Output: undefined
console.log(algoObject.factor(-5));  // Output: undefined
console.log(algoObject.factor("abc")); // Output: undefined

```

3. randRange(min, max)
```bash
console.log(algoObject.randRange(1, 10));       // Output: Random integer between 1 and 10
console.log(algoObject.randRange(1, 10, 1));    // Output: Random float between 1 and 10
console.log(algoObject.randRange(10, 1));       // Output: "Invalid"
console.log(algoObject.randRange(1, 1));        // Output: "Invalid"
console.log(algoObject.randRange(-5, 5));       // Output: Random integer between -5 and 5
console.log(algoObject.randRange(-5, -1));      // Output: Random integer between -5 and -1

```


4. randInsert(length)
```bash
console.log(algoObject.randInsert(5));  // Output: Random 5-digit number
console.log(algoObject.randInsert(5, [{ index: 1, value: 9 }, { index: 3, value: 7 }]));  // Output: Random 5-digit number with fixed digits
console.log(algoObject.randInsert(6, [{ index: 2, value: 5 }]));  // Output: Random 6-digit number with 5 at index 2


```

5. isPrime(a)
```bash
console.log(algoObject.isPrime(7));   // Output: true
console.log(algoObject.isPrime(10));  // Output: false
console.log(algoObject.isPrime(1));   // Output: false
console.log(algoObject.isPrime(13));  // Output: true


```

6. reverse(a)
```bash
console.log(algoObject.reverse(123));      // Output: 321
console.log(algoObject.reverse("hello"));  // Output: "olleh"
console.log(algoObject.reverse([1, 2, 3])); // Output: [3, 2, 1]
console.log(algoObject.reverse(null));     // Output: "Invalid"
console.log(algoObject.reverse({}));       // Output: "Invalid"


```

## License

[MIT](https://choosealicense.com/licenses/mit/)

