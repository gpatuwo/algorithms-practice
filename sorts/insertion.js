/* Insertion Sort
- great for sorting short things

gist: like sorting cards 1 by 1
- takes one el in array,
  compares it to the previous until hits smaller el


- time: O(n^2), best: O(n)
- space: O(1)
*/

function insertionSort(arr) {
  for (var current = 0; current < arr.length; current++) {
    let swap = arr[current];
    let probe = current - 1;

    // iteration stops at idx one past to make sure that el is smaller
    while (probe >= 0 && arr[probe] > swap) {
      arr[probe + 1] = arr[probe];
      probe--;
    }

    arr[probe + 1] = swap;
  }

  return arr;
}

var array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
console.log(insertionSort(array));
