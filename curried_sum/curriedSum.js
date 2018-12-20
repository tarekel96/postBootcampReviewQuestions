// The Question

/* Write a function that adds two numbers, 
and can be called either of two ways: 
sum(2, 3); // 5
sum(2)(3); // 5
*/

let sumTwoNumbers = function(first, second) {
  if (arguments.length >= 2) {
    let sum = 0;
    sum += first + second;
    console.log(sum);
    return sum;
  } else {
    return function(x) {
      sum = first + x;
      //       console.log(`x: ${x} first: ${first}`);
      console.log(sum);
      return sum;
    };
  }
};

sumTwoNumbers(2, 3);
sumTwoNumbers(2)(3);
