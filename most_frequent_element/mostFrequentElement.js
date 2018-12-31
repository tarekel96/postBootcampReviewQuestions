// The Question

/* 
Write a function that finds the most frequent element in an array.

```
find_most_frequent_element([1, 2, 2, 3]) // 2
```
 */

let givenArray = [1, 2, 2, 3];

let harderArray = [4, 2, 5, 6, 5, 8, 9, 5, 10];

let evenTougher = [0, 1, 3, 5, 3, 7, 7, 8, 9, 9, 3, 20, 3];

let mostFrequent = function(array) {
  let frequent = 0;
  for (let i = 0; i < array.length; i++) {
    let comparer = array[i];
    let secondComparer = array[i + i];
    if (comparer === secondComparer) {
      frequent = comparer;
    }
  }
  console.log(frequent);
};

mostFrequent(givenArray);
mostFrequent(harderArray);
mostFrequent(evenTougher);
