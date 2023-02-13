/*Stack 
Implement a Stack data structure with there method 
*/

class Stack {
  constructor() {
    this.stack = [];
    this.size = 0;
  }
  //add a value to the end of stack
  push(value) {
    this.stack[this.size] = value;
    this.size++;
  }
  pop() {
    if (this.size == 0) throw new Error("Stack Empty");
    let removed = this.stack[this.size];
    this.stack.pop();
    this.size--;
    return removed;
  }
  get length() {
    return this.size;
  }
  get isEmpty() {
    return this.size === 0;
  }
  get last() {
    if (this.size !== 0) {
      return this.stack[this.stack.length - 1];
    }
    return null;
  }
  printAll() {
    return this.Stack;
  }
}

const stack = new Stack();

stack.push("apple");
stack.push("banana");
stack.push("plum");

stack.pop();

console.log(stack.stack);
