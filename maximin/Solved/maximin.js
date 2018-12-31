"use strict";

function maximin(arr) {
  // var minimum = (maximum = arr[0]);
  let maximum = arr[0];
  let minimum = arr[0];

  for (var i = 0; i < arr.length; i += 1) {
    var candidate = arr[i];

    if (candidate > maximum) maximum = candidate;
    if (candidate < minimum) minimum = candidate;
  }
  console.log(`minimum: ${minimum} maximum: ${maximum}`);

  return [minimum, maximum];
}

let givenArray = [10, 2, 3, 8, 12, 91, 310];
maximin(givenArray);
