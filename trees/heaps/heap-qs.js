// epi bootcamp p160
/*
*/

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

//
// While the moved element has a value
// greater than at least one of its children,
// swap this value with the smaller-valued
// child.
  heapifyDown(parentIdx){
    let parent = this.data[parentIdx],
        leftChildIdx = 2 * parentIdx + 1,
        rightChildIdx = 2 * parentIdx + 2,
        leftChild = this.data[leftChildIdx],
        rightChild = this.data[rightChildIdx];

    while (this.comparator(leftChild, parent) ||
      this.comparator(rightChild, parent)) {
      //swap with smaller-valued child for min heap
      let swapChildIdx = this.comparator(leftChild, rightChild) ?
                         leftChildIdx : rightChildIdx,
          swapChild = this.data[swapChildIdx];
    }
  }
}

let heap = new Heap();
heap.add(4);
heap.add(1);
heap.add(7);
heap.add(9);
heap.add(2);
console.log(heap);
// console.log( heap.deleteMin()); // 1
// console.log( heap.deleteMin()); // 2
// console.log( heap.deleteMin()); // 4
// console.log( heap.deleteMin()); // 7
// console.log( heap.deleteMin()); // 9
