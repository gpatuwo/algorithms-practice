// from epi...doesn't work :/
// function bsearch(arr, target) {
//   let lower = 0, upper = arr.length - 1;
//
//   while (lower <= upper) {
//     let midpoint = Math.floor( (lower + (upper-lower))/2);
//     if (arr[midpoint] < target) lower = midpoint + 1;
//     else if (arr[midpoint] === target) return midpoint;
//     else upper = midpoint - 1;
//   }
//
//   return -1;
// }


function bsearch(array, target) {
  if(array.length === 0){return -1;}

  let probeIdx = Math.floor(array.length / 2);
  let probeNum = array[probeIdx];

  if (probeNum === target) {
    return probeIdx;
  } else if (target < probeNum) {
    let left = array.slice(0, probeIdx);
    return bsearch(left, target);
  } else {
    let right = array.slice(probeIdx + 1);
    let subproblem =  bsearch(right, target);

    return subproblem === -1 ? -1 : subproblem + (probeIdx + 1);

  }
}
// console.log(bsearch([1, 2, 3], 1) === 0);
// console.log(bsearch([2, 3, 4, 5], 3) === 1);
// console.log(bsearch([2, 4, 6, 8, 10], 6) === 2);
// console.log(bsearch([1, 3, 4, 5, 9], 5) === 3);
// console.log(bsearch([1, 2, 3, 4, 5, 6], 6) === 5);
// console.log(bsearch([1, 2, 3, 4, 5, 6], 0) === -1);
// console.log(bsearch([1, 2, 3, 4, 5, 7], 6) === -1);
