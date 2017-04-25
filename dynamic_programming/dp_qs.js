// classic fib: 1, 1, 2, 3, 5, 8, 13

// in O(n) time and space:
// const util = require('util');
let fibsHash = {};
function recFibs(n){
  if (n <= 1) return n;
  else if (!fibsHash[n]) {
    // console.log(`n: ${n}`);
    fibsHash[n] = recFibs(n - 1) + recFibs(n - 2);
  }
  // console.log(util.inspect(fibsHash, null));
    // with fibsHash in scope above fct, can see in call stack that no repeats
  return fibsHash[n];
}
// console.log(recFibs(7));

// in O(n) time and O(1) space! PPP
function itFibs(n){
  if (n <= 1) return n;

  let fibsNow = 1;
  let fibs1Before = 1;
  for (let i = 2; i < n; i++) {
    let fibsNext = fibsNow + fibs1Before;
    fibs1Before = fibsNow;
    fibsNow = fibsNext;
  }
  return fibsNow;
}
// console.log(itFibs(3));



// find max sum over all subarrays of a given array of ints PPPPP
// ex [904, 40, 523, 12, -335, -385, -124, 481, -31]
/*
ex: [-1, 2, 3, -1, 9], [-3, -2, -1]
let sum = arr[0]
itr over arr,
  add el to sum,
  if bigger && arr[i] < sum,
    then replace sum with nextSum
    push sum into sumsArr
  else if arr[i] > sum && nextSum, sum = arr[i]
  else push sum into sumsArr, sum = arr[i]
*/

function runningMax(arr){
  let minSum = 0; // -1,
  let runningSum = 0; // -1, 1, 4, 3, 4, 13
  let maxSum = 0; // 2, 5, 14

  for (var i = 0; i < arr.length; i++) {
    runningSum += arr[i];

    if (runningSum < minSum) {
      minSum = runningSum;
    }

    if (runningSum - minSum > maxSum) {
      maxSum = runningSum - minSum;
    }
  }

  return maxSum;
}
// console.log(runningMax([-1, 2, 3, -1, 1, 9]));
  // should equal 14!!! 2, 3, -1, 1, 9 is the longest!
// console.log(runningMax([2, 3, 9]));
// console.log(runningMax([-3, -2, -1]));
