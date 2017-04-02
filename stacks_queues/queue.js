// FIFO, like array but reverse if taking out
class Queue {
  constructor(){
    this.size = 0;
    this.storage = [];
  }

  enqueue(data){
    this.storage.push(data);
    this.size++;
  }

  dequeue(){
    if (this.size === 0) {
      return null;
    } else {
      this.storage.shift();
    }
  }

}
