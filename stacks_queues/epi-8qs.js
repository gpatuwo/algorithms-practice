// 8. Stacks and Queues

// STACKS

// QUEUES

/* 8.8 implement circular queue
- implement dynamically resizing
*/

class CircularQueue {
  constructor(cap){
    this.storage = new Array(cap);
    this.size = 0;
    this.head = null;
    this.tail = null;
  }

  enqueue(data){
    if (this.size === this.storage.length) {
      //need to resize arr first 
    }
    this.storage.push(data);
    if (this.size === 0) {
      this.head = data;
    }
    this.size++;
    this.tail = data;
  }

  dequeue(){

  }

  size(){
    // returns num of el stored
  }
}
