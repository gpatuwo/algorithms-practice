function bubblesort(arr) {
  let isSorted = false;

  while (!isSorted) {
    isSorted = true;

    for (let i = 0; i < (arr.length - 1); i++){
      if (arr[i] > arr[i + 1]){
        isSorted = false;
        [arr[i], arr[i+ 1]] = [arr[i + 1], arr[i]];
      }
    }
  }

  return arr;
}
