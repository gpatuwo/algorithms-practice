// FIFO, like array but reverse if taking out
class Queue {
  constructor(){
    this.storage = [];
    this.size = this.storage.length;
    this.head = null;
    this.tail = null;
  }

  enqueue(data){
    this.storage.push(data);
    if (this.size === 0) {
      this.head = data;
    }
    this.tail = data;
  }

  dequeue(){
    if (this.size === 0) {
      return null;
    } else {
      this.storage.shift();
      this.head = this.storage[0];
    }
  }

  first(){
    return this.head;
  }

  last(){
    return this.tail;
  }

  max(){
    // if can assume that all values are numbers
    return Math.max(...this.storage);
    // if not, then maybe sort (b-a) and return storage[0]
  }

}
