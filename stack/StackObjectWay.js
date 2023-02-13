/*Description //Stack Object
implement Stack in Object way
*/

class Stack {
  constructor() {
    this.stack = {};
    this.size = 0;
  }
  push(element) {
    this.size++;
    this.stack[this.size] = element;
  }
  pop() {
    let removed = this.stack[this.size];
    delete this.stack[this.size];
    this.size--;
    return removed;
  }
  peek() {
    return this.stack[this.size];
  }
  PrintAll() {
    return this.stack;
  }
}

const stack = new Stack();

stack.push("apple");
stack.push("banana");
stack.push("plum");

stack.pop();

console.log(stack.stack);
