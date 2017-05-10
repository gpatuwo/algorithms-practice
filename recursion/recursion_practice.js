"use strict";

function range(start, end) {
}
// console.log(`range(3, 10) = ${range(3, 10)}`);

Array.prototype.recSum = function () {
};
// console.log([1,2,3,4,5].recSum());

Array.prototype.itSum = function () {
};
// console.log([1,2,3,4,5].itSum());

function exp(num, power) {
}
// console.log(exp(2, 5));

function fibonacci(n) {
}
// console.log(fibonacci(5));



function subsets(array) {
  if (array.length === 0) {
    return [[]];
  }

  const firstElement = array[0];
  const subSubsets = subsets(array.slice(1));

  const newSubsets = subSubsets.map(subSubset => [firstElement].concat(subSubset) );

  return subSubsets.concat(newSubsets);
}

  console.log(`subsets([1, 3, 5]) = ${JSON.stringify(subsets([1, 3, 5]))}`);
