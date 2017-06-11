// epi bootcamp p160 keep track of k longest strings in stream
let Heap = require('./heap-implementation.js');

function kLongestStrings(k, stream) {
  let stringsHeap = new Heap( function(str1, str2){
    return str1.length < str2.length;
  });

  let current = stream.next();
  while (current) {
    if (stringsHeap.length < k) {
      stringsHeap.add(current);
    } else {
      // if current str is longer, then replace it
      let shortest = stringsHeap.findRoot();
      if (current.length > shortest.length) {
        stringsHeap.deleteRoot();
        stringsHeap.add(current);
      }
    }
  }
}


//////////////////////////////////////
// epi 10.1 merge sorted files

function mergeSortedFiles(sortedArrays) {
  let ans = [],
      numArrays = sortedArrays.length, numArraysEmpty = 0,
      minHeap = new Heap(function(numObj1, numObj2) {
        return numObj1.value < numObj2.value;
      });

  // take first el of each and insert into min heap
  for (var i = 0; i < numArrays; i++) {
    minHeap.add({
      arrId: i,
      value: sortedArrays[i].shift()
    });

    if (!sortedArrays[i][0]) numArraysEmpty++;
  }

  // while each of sortedArrays not empty
  while (numArraysEmpty < numArrays) {
    // push min heap's root to ans
    let numObj = minHeap.deleteRoot();
    ans.push(numObj.value);

    // add that array's new [0] into min heap
    let arrId = numObj.arrId;
    if (sortedArrays[arrId][0]){
      minHeap.add({
        arrId: arrId,
        value: sortedArrays[arrId].shift()
      });
    } else {
      numArraysEmpty++;
    }
  }

  return ans;
}

// let arrs = [[3, 5, 7], [0, 6], [0, 6, 28]];
// console.log(mergeSortedFiles(arrs));
