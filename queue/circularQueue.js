//implement queue Data Structures using array way and with help circular remove junk Data

class Queue {
  constructor(capacity) {
    this.Storage = [];
    this.head = 0;
    this.tail = -1;
    this.size = 0;
    this.capacity = capacity;
  }
  isFull() {
    return this.capacity <= this.size;
  }
  enqueue(value) {
    if (this.isFull()) throw new Error("Queue is full");
    this.tail++;
    this.Storage[this.tail % this.capacity] = value;
    //  this.tail = (this.tail + 1) % this.capacity;
    this.size++;
    return value;
  }
  dequeue() {
    if (this.size == 0) return null;
    let data = this.Storage[this.head];
    this.Storage[this.head % this.capacity] = null;
    this.head++;
    this.size--;
    return data;
  }
  get print() {
    for (let i = 0; i < this.Storage.length; i++) {
      console.log(this.Storage[i]);
    }
    return this.Storage;
  }
}

let queue = new Queue(4);

queue.enqueue(5);
queue.enqueue(9);
queue.enqueue(85);
queue.enqueue(87);
queue.dequeue();
queue.enqueue(75);
queue.dequeue();
// queue.getFront(); //
queue.size;
queue.print;

console.log(queue);
