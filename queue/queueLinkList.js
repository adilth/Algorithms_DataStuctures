/*Description // Queue in LinkedList
implement queue in LinkedList way with there methods

*/

class QueueNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  enqueue(val) {
    let node = new QueueNode(val);
    if (this.size === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }
  dequeue() {
    if (this.size === 0) return null;
    let front = this.head;
    if (this.size === 1) {
      this.head = this.tail = null;
    }
    this.head = this.head.next;
    this.size--;
    return front;
  }
  clear() {
    this.head = null;
    this.size = 0;
    this.tail = null;
  }
  printAll() {
    let current = this.head;
    let res = "";
    while (current) {
      res += current.val + "-> ";
      // console.log(current.val);
      current = current.next;
    }
    return res;
  }
}

let queue = new Queue();
queue.enqueue("A");
queue.enqueue("C");
queue.enqueue("B");
queue.enqueue("D");
console.log(queue.printAll()); //A-> C-> B-> D->
queue.dequeue();
console.log(queue.printAll()); // C-> B-> D->
console.log(queue.size); //3
