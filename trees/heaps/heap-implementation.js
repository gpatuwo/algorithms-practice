// node this file to run

class Heap { //min heap default
  constructor(comparator) {
    this.data = [];
    this.comparator = comparator || function(a, b){return a < b;};
  }

  findMin(){
    return this.data[0];
  }

  add(val){
    this.data.push(val);

    // compare to parent, swap if smaller
    this.heapifyUp(this.data.length - 1);
  }

  deleteMin(){
    let min = this.data[0];

    // reassign last el as first el
    this.data[0] = this.data.pop();
    // reconfigure heap
    this.heapifyDown();

    return min;
  }

  heapifyUp(childIdx){
    while (childIdx > 0) {
      let parentIdx = Math.floor((childIdx + 1)/2) - 1,
          child = this.data[childIdx],
          parent = this.data[parentIdx];

      // swap if parent is greater
      if (this.comparator(child, parent)){
        let parentVal = parent;
        this.data[parentIdx] = child;
        this.data[childIdx] = parentVal;
      } // early return if parent <= child?

      // continue until reach 0
      childIdx = parentIdx;
    }
  }

  heapifyDown(parentIdx = 0){
    let parent = this.data[parentIdx],
        leftChildIdx = 2 * parentIdx + 1,
        rightChildIdx = 2 * parentIdx + 2,
        leftChild = this.data[leftChildIdx],
        rightChild = this.data[rightChildIdx];

    while (this.comparator(leftChild, parent) ||
      this.comparator(rightChild, parent)) {
      // conditional for if one child is undef
      // else swap with smaller-valued child for min heap
      let swapChildIdx;
      if (!rightChild) {
        swapChildIdx = leftChildIdx;
      } else if (!leftChild) {
        swapChildIdx = rightChildIdx;
      } else {
        swapChildIdx =
        this.comparator(leftChild, rightChild) ? leftChildIdx : rightChildIdx;
      }

      let swapChild = this.data[swapChildIdx];

      this.data[parentIdx] = swapChild;
      this.data[swapChildIdx] = parent;
// refactor...
      parentIdx = swapChildIdx;
      leftChildIdx = 2 * parentIdx + 1;
      rightChildIdx = 2 * parentIdx + 2;
      leftChild = this.data[leftChildIdx];
      rightChild = this.data[rightChildIdx];
    }
  }
}

let heap = new Heap();
heap.add(9);
heap.add(8);
heap.add(6);
heap.add(5);
heap.add(1);
heap.add(4);
heap.add(7);
heap.add(3);
heap.add(10);
heap.add(2);
console.log(heap);
console.log( heap.deleteMin()); // 1 to 10 in order :)
console.log( heap.deleteMin()); //
console.log( heap.deleteMin()); //
console.log( heap.deleteMin()); //
console.log( heap.deleteMin()); //
console.log( heap.deleteMin()); //
console.log( heap.deleteMin()); //
console.log( heap.deleteMin()); //
console.log( heap.deleteMin()); //
console.log( heap.deleteMin()); //
