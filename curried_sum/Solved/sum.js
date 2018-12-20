"use strict";

function sum(x, y) {
  if (arguments.length >= 2) return x + y;
  else if (arguments.length === 1)
    return function(z) {
      return x + z;
    };
}
// sum(2)(3); // needs to be console logged like my version
