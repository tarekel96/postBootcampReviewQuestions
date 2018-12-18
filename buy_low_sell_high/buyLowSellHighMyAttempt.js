// 1000 IAG shares (bought 10:00 am - 12/12/15)
// $1.45 per share

// 20 mins later: 10:20 am - sold IAG shares
// $1.74 per share

/* Here all the prices of IAG on 12/12/15 
during a one hour period in chronological order: */

let shareArray = [1.42, 1.32, 1.45, 1.2, 1.34, 1.74, 1.1, 1.89, 1.42, 1.9];

// The problem

/* Write an efficient function that takes an array of 
stock prices in chronological order. The function should 
determine the largest profit possible during that period 
if someone bought the stock at the lowest price and sold 
it at the highest. Must buy before you sell—no shorting.*/

// 3 different solutions found here: https://medium.freecodecamp.org/three-ways-to-return-largest-numbers-in-arrays-in-javascript-5d977baa80a1

// BEST SOLUTION
console.log(`The highest: ${Math.max.apply(null, shareArray)}`);

//The apply() method calls a function with a given this value and arguments provided as an array (or an array-like object).
// Note that the first argument to apply() sets the value of ‘this’, not used in this method, so you pass null.

// Solution #2 from Medium link ^

// Not working - Study later TODO TODO
/* function largestOfFour(mainArray) {
  return mainArray.map(function(subArray) {
    return subArray.reduce(function(
      previousLargestNumber,
      currentLargestNumber
    ) {
      return currentLargestNumber > previousLargestNumber
        ? currentLargestNumber
        : previousLargestNumber;
    },
    0);
  });
}
largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1]
]); */
// largestOfFour(shareArray);

// Solution #3 from Medium link ^

/* function largestOfFour(arr) {
  var largestNumber = [0, 0, 0, 0];
  for (var arrayIndex = 0; arrayIndex < arr.length; arrayIndex++) {
    for (
      var subArrayIndex = 0;
      subArrayIndex < arr[arrayIndex].length;
      subArrayIndex++
    ) {
      if (arr[arrayIndex][subArrayIndex] > largestNumber[arrayIndex]) {
        largestNumber[arrayIndex] = arr[arrayIndex][subArrayIndex];
      }
    }
  }
  console.log(largestNumber);
  return largestNumber;
}
largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1]
]); */

// my 1st for loop attempt - works but does not output the single right answer
/* for (let i = 0; i <= shareArray.length; i++) {
  let first = shareArray[i];
  let second = shareArray[i + 1];
  let theHighest = 0;
  if (first > second) {
    theHighest = first;
    //     console.log(`first: ${theHighest}`);
    //     return `Highest price during the one hour period:  ${first}`;
  } else {
    theHighest = second;
    //     console.log(`second: ${theHighest}`);
    //     `Highest price during the one hour period:  ${second}`;
  }
  console.log(`The highest ${theHighest}`);
  //   return theHighest; // for some reason if uncomment it always returns 1.42 - investigate TODO TODO
} */

// my 2nd for loop attempt - works but does not output the single right answer
/* for (let i = 0; i <= shareArray.length; i++) {
  let first = shareArray[i];
  for (let j = 1; j <= shareArray.length; j++) {
    let second = shareArray[j];
    if (first > second) {
      theHighest = first;
      //       console.log(`The highest: ${theHighest}`);
      //       return `Highest price during the one hour period:  ${theHighest}`;
    } else if (second > first) {
      theHighest = second;
      //       console.log(`The highest: ${theHighest}`);
      //       return `Highest price during the one hour period:  ${theHighest}`;
    } else {
      return `There is no single highest number`;
    }
    console.log(`The highest ${theHighest}`);
    //     return theHighest; // for some reason if uncomment it always returns 1.42 - investigate TODO TODO
  }
} */
