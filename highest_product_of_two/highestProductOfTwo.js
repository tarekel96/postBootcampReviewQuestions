// The Question
/* Write a function that accepts an array of integers and 
returns the largest number we can get by multiplying two of them.
 For example, for the array:

```
[-100, 2, 42, 100]
```
...We should get `42 * 100 = 4200`. */

let arrayOfNumbers = [-100, 2, 42, 100];
let multiplyTheBiggestTwo = function(array) {
  for (let i = 0; i <= array.length; i++) {
    let min = Math.min.apply(null, array);
    let max = Math.max.apply(null, array);
    let product = min * max;
    console.log(`Product: ${product}`);
    return product;
  }
};

// Test 1
multiplyTheBiggestTwo(arrayOfNumbers);

let secondArray = [-12, 4, 5, 43, 90]; // should yield 1080;
multiplyTheBiggestTwo(secondArray);

/* My solution is different than the Bootcamp, however, I believe mine is more 
efficient. I should test out the efficiency later to confirm. TODO TODO TODO */
