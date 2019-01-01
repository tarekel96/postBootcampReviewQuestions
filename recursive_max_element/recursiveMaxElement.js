// The Question

/* 
Write a recursive function that finds the maximum element in a list.
*/

// My Answer

/* let givenArray = [1, 4, 6, 2, 6, 10, 12, 96, 30, 50, 60];

let recursiveMax = function(array) {
  let i = 0;
  //   let highestNumber = 0;
  while (i < array.length) {
    let iterator = array[i];
    //     let iteratorTwo = array[i + 1];
    let base = array[0];
    if (iterator > base) {
      base = iterator;
      //       console.log(base);
      i++;
    } else if (iterator >= base) {
      i++;
    }
    //     console.log(i);
    console.log(`Highest number: ${base}`);
    //     return `Highest number: ${base}`;
  }
  //   console.log(`Highest number: ${highestNumber}`);
  //   return `Highest number: ${base}`;
  //   console.log(`Highest number: ${highestNumber}`);
};

recursiveMax(givenArray); */

let givenArray = [1, 4, 6, 2, 6, 10, 12, 96, 30, 50, 60];

let recursiveMax = function(array) {
  let i = 0;
  while (i < array.length) {
    let iterator = array[i];
    let base = array[0];
    if (iterator > base) {
      base = iterator;
      i++;
    } else if (iterator >= base) {
      i++;
    }
    console.log(`Highest number: ${base}`);
  }
};

recursiveMax(givenArray);
