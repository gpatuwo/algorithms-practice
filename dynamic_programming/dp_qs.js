// classic fib: 1, 1, 2, 3, 5, 8, 13

// in O(n) time and space:
// const util = require('util');

let fibsHash = {};
function recFibs(n){
  if (n <= 1) return n;
  else if (!fibsHash[n]) {
    // console.log(`n: ${n}`);
    fibsHash[n] = fibs(n - 1) + fibs(n - 2);
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
