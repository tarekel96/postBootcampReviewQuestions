// The Question

/* Write a function that finds the minimum and maximum elements 
from an array _without_ using the `Math.min` or `Math.max` methods. */

// My Answer

let givenArray = [10, 2, 3, -8, 12, 91, 310];

let findMax = function(array) {
  for (let i = 0; i < array.length; i++) {
    let positiveArray = [];
    positiveArray = Math.abs(array[i]);
    console.log(`positive array: ${positiveArray}`);
    let highestNumber = 0;
    if (positiveArray[i] % 2 > positiveArray[i + 1] % 2) {
      highestNumber = positiveArray[i] % 2;
      console.log(`Highest Number: ${highestNumber}`);
    } else if (positiveArray[i + 1] % 2 > positiveArray[i] % 2) {
      highestNumber = positiveArray[i + 1] % 2;
      console.log(`Highest Number: ${highestNumber}`);
    }
    console.log(`Highest Number: ${highestNumber}`);
  }
};

findMax(givenArray);

// console.log(Math.abs(givenArray[i]));
