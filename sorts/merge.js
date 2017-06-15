function mergeSort(arr) {
  if (arr.length < 2) return arr;

  let mid = Math.floor(arr.length / 2);

  let left = mergeSort(arr.slice(0, mid)),
      right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  let merged = [];

  while (left.length !== 0 && right.length !== 0) {
    let nextNum = left[0] < right[0] ? left.shift() : right.shift();

    merged.push(nextNum);
  }

  return merged.concat(left, right);
}


let array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
console.log(mergeSort(array));
