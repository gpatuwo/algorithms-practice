// implementing a stack

// LIFO!

// essentially like an array in js. but if not using arr...
class Stack {
  constructor(){
    this.size = 0;
    this.storage = {}; //num times data was pushed into stack
  }

  push(data){
    var size = ++this.size;
    this.storage[size] = data;
  }

  pop(){
    // get size of stack
    // pop out the most recently added one, delete it
    // size--
    // return the data
  }

  // peek, returns top w/o popping

}
