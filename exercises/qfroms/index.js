// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
  constructor(){
    this.stackOne = new Stack ()
    this.stackTwo = new Stack ()
  }

  add(item){
    this.stackOne.push(item)
  }

  remove(){
    if (this.stackOne.peek()){
        this.stackTwo.push(this.stackOne.pop())
    } else if(this.stackTwo.peek()){
      this.stackOne.push(this.stackTwo.pop())
    }
    else {
      return this.stackTwo.pop()
    }
    console.log(this.stackTwo.peek())

  }
  peek(){
    return this.stackTwo.peek()
    }
}

let qTest = new Queue()
qTest.add(1)
qTest.add(2)
qTest.add(3)
qTest.remove()

// qTest.remove()
// qTest.remove()
console.log('stack one',qTest.stackOne,'stack two', qTest.stackTwo)


module.exports = Queue;
