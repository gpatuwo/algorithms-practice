# Heaps

## Definition
A **heap** is a specialized *complete* binary tree
  - ie every level, except maybe the last, is filled AND all nodes are as far left as possible
  - heap property:
    - **max-heap** max at top
      key at each node >= keys of its children
      ![max-heap](max-heap.png)
    - **min heap** min at top
      key at each node <= keys of its children
      ![min-heap](min-heap.png)
  - can be implemented as an **array**:
    - children of node at *i* are at *2i + 1* and *2i + 2*
  - AKA **priority queue*** bc behaves like queue but each el has a 'priority' assigned to it. deletion removes el w/highest priority
  - insertion: **O(log n)**
  - max (or min) el lookup: **O(1)**
  - max (or min) el deletion: **O(log n)**
  - other el search: **O(n)**

## Javascript implementation of heap:
~~~~javascript
class Heap { //min heap default
  constructor(comparator) {
    this.data = [];
    this.comparator = comparator || (a, b) => {return a < b};
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

  }
  /* Compare the new element with its parent. If the
new element is smaller, than swap it with its
parent.
 Continue this process until either
- the new element’s parent is smaller than or
equal to the new element, or
- the new element reaches the root (index 0 of
the array)
  */
  heapifyUp(valIdx){
    while (valIdx > 0) {
      let parentIdx = Math.floor((valIdx + 1)/2) - 1;

      // swap if parent is greater
      if (this.data[parentIdx] > this.data[valIdx]){
        let parentVal = this.data[parentIdx];
        this.data[parentIdx] = this.data[valIdx];
        this.data[valIdx] = parentVal;
      } else if (this.data[parentIdx] <= this.data[valIdx]) {
        return;
      } // don't need to re-heap what's already in order

      // continue until reach 0
      valIdx = parentIdx;
    }
  }
}
~~~~
