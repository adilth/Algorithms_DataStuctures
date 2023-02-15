//implement queue Data Structures in Array Way

class Queue {
  constructor() {
    this.Storage = [];
    this.head = 0;
    this.tail = 0;
    this.size = 0;
  }

  enqueue(data) {
    this.Storage[this.tail] = data;
    this.size++;
    this.tail++;
  }
  dequeue() {
    if (this.size == 0) {
      return null;
    }
    let data = this.Storage[this.head];
    if (this.size === 1) {
      this.tail = 0;
      this.head = 0;
    } else {
      this.head++;
    }
    this.size--;
    return data;
  }
  isEmpty() {
    return this.size === 0;
  }
  getFront() {
    if (this.isEmpty() === false) {
      return this.Storage[0];
    }
  }
  peek() {
    if (this.isEmpty() === false) {
      return this.Storage[this.size - 1];
    }
  }
  get print() {
    for (let i = this.head; i < this.tail; i++) {
      console.log(this.Storage[i]);
    }
    return this.Storage;
  }
  clear() {
    this.Storage = {};
    this.size = 0;
    this.head = 0;
  }
}

let queue = new Queue();

queue.enqueue(5);
queue.enqueue(9);
queue.enqueue(85);
queue.enqueue(75);
queue.dequeue();
queue.dequeue();
queue.getFront(); //
queue.size;
queue.print;
