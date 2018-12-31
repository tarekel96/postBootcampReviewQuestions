// The Question

/* Write a function that finds the minimum and maximum elements 
from an array _without_ using the `Math.min` or `Math.max` methods. */

// My Answer

let givenArray = [10, 2, 3, 8, 12, 91, 310];

/* let findMax = function(array) {
  let highestNumber = 0;
  let lowestNumber = 0;
  for (let i = 0; i < array.length; i++) {
    let positiveArray = [];
    positiveArray = Math.abs(array[i]);
    console.log(`positive array: ${positiveArray}`);
    // let highestNumber = 0;
    // let lowestNumber = 0;
    if (positiveArray[i] > highestNumber) {
      // console.log("hello world");
      // console.log(highestNumber);
      highestNumber = positiveArray[i];
      // console.log(`Highest number: ${highestNumber}`);
    } else if (positiveArray[i] < lowestNumber) {
      lowestNumber = positiveArray[i];
    }
  }
  console.log(`Highest number: ${highestNumber}`);
  return `Highest number: ${highestNumber} & Lowest Number: ${lowestNumber}`;
}; */

// findMax(givenArray);

// console.log(Math.abs(givenArray[i]));

let findMaxAndMin = function(array) {
  let maxNumber = array[0];
  let minNumber = array[0];
  for (let i = 0; i < array.length; i++) {
    let candidate = array[i];
    if (candidate > maxNumber) {
      maxNumber = candidate;
    }
    if (candidate < minNumber) {
      minNumber = candidate;
    }
  }
  console.log(`Max Number: ${maxNumber} Min Number: ${minNumber}`);
  return `Max Number: ${maxNumber} Min Number: ${minNumber}`;
};

findMaxAndMin(givenArray);
