"use strict";

function range(start, end) {
  if (end < start) return [];

  return range(start, end - 1).concat(end);
}
// console.log(range(3, 10));

function recSum1(arr) {
  if (arr.length === 0) return 0;

  return arr[0] + recSum1(arr.slice(1));
}
// console.log(recSum1([1, 2, 3, 4, 5]));

Array.prototype.recSum = function () {
  if (this.length === 0 ) return 0;

  return this[0] + this.recSum(this.slice(1));

};
// console.log([1,2,3,4,5].recSum());

function exp(num, power) {
  if (power === 0 ) return 1;
  // if (power === 1 ) return num; <-- not necessary

  return num * exp(num, power - 1);
}
// console.log(exp(2, 0));
// console.log(exp(2, 1));
// console.log(exp(2, 4));
// console.log(exp(0, 1000));

// 1, 1, 2, 3, 5, 8, 13
function fibonacci(n) {
  if (n <= 2) return 1;

  return fibonacci(n - 1) + fibonacci(n - 2);
}
// console.log(fibonacci(5));
// console.log(fibonacci(7));



function subsets(array) {
  if (array.length === 0) {
    return [[]];
  }

  const firstElement = array[0];
  const subSubsets = subsets(array.slice(1));

  const newSubsets = subSubsets.map(subSubset => [firstElement].concat(subSubset) );

  return subSubsets.concat(newSubsets);
}

  // console.log(`subsets([1, 3, 5]) = ${JSON.stringify(subsets([1, 3, 5]))}`);
