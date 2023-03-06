/*Description //circular linkList
Implementation of circular linked list and add method to check if the link list is circular link list or not
*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  // Get size of the linkedList
  size = () => this.length;
  // Get the head data
  head = () => this.head?.data || null;
  // Check if the linkedList is empty
  isEmpty = () => this.length === 0;

  // get the data specific to an index
  getElementAt(index) {
    if (this.length !== 0 && index >= 0 && index <= this.length) {
      let current = this.head;
      for (let i = 0; i < index && current !== null; i++) {
        current = current.next;
      }
      return current;
    }
    return undefined;
  }

  // insert first the value in the first position
  insertFirst(data) {
    const node = new Node(data);
    node.next = this.head;
    this.head = node;
    this.length++;
    return this;
  }

  // insertLast any data to the end of the linkedList
  insertLast(data) {
    if (!this.head) {
      return this.insertFirst(data);
    }
    const node = new Node(data);
    // Getting the last node
    const current = this.getElementAt(this.length - 1);
    current.next = node;
    node.next = this.head;
    this.length++;
    return this.length;
  }

  // insert data at a specific position
  insertAt(index, data) {
    if (index === 0) return this.insertFirst(data);
    if (index === this.length) return this.insertLast(data);
    if (index < 0 || index > this.length)
      throw new RangeError(`Index is out of range max ${this.length}`);
    const node = new Node(data);
    const prev = this.getElementAt(index - 1);
    node.next = prev.next;
    prev.next = node;
    this.length++;
    return this.length;
  }

  // find the first index of the data
  indexOf(data) {
    let current = this.head;
    // initializing currentIndex as -1
    let currentIndex = -1;
    while (current) {
      if (current.data === data) {
        return currentIndex + 1;
      }
      currentIndex++;
      current = current.next;
    }
    return -1;
  }

  // remove the data from the end of the list
  remove() {
    if (this.isEmpty()) return null;
    const secondLastNode = this.getElementAt(this.length - 2);
    const removedNode = secondLastNode.next;
    secondLastNode.next = this.head;
    this.length--;
    return removedNode.data || null;
  }

  // remove the data from the first of the list
  removeFirst() {
    if (this.isEmpty()) return null;
    const removedNode = this.head;
    if (this.length === 1) {
      this.clear();
      return removedNode.data;
    }
    const lastNode = this.getElementAt(this.length - 1);
    this.head = this.head.next;
    lastNode.next = this.head;
    this.length--;
    return removedNode.data || null;
  }

  // remove the data from the index
  removeAt(index) {
    if (this.isEmpty()) return null;
    if (index === 0) return this.removeFirst();
    if (index === this.length) return this.remove();
    if (index < 0 && index > this.length) return null;
    const prev = this.getElementAt(index - 1);
    const current = prev.next;
    prev.next = current.next;
    this.length--;
    return current.data || null;
  }

  // remove if the data is present
  removeData(data) {
    if (this.isEmpty()) return null;
    const index = this.indexOf(data);
    return this.removeAt(index);
  }
  toArray = function () {
    let arr = [],
      current = this.head;

    //Keep track of head
    const temp = this.head.value;

    while (current) {
      //Break if first value detected
      if (temp === current.next.value) {
        arr.push(current.value);
        break;
      }

      arr.push(current.value);
      current = current.next;
    }

    return arr;
  };
  // logs the data
  printData(output = (value) => console.log(value)) {
    let current = this.head;
    let count = 0;

    while (current !== null && count < this.length) {
      output(current.data);
      current = current.next;
      count++;
    }
  }

  // get the data from the linkedList
  get() {
    let current = this.head;
    let count = 0;
    const list = [];
    while (current !== null && count < this.length) {
      list.push(current.data);
      current = current.next;
      count++;
    }
    return list;
  }

  clear() {
    this.head = null;
    this.length = 0;
  }
}

function isItCircular(head) {
  let fast = head;
  let slow = head;
  while (fast && fast.next) {
    fast.next.next;
    slow.next;
    if (fast === slow) return true;
  }
  return false;
}

let ll = new LinkList();
ll.insertLast(5);
ll.insertLast(7);
ll.insertLast(12);
ll.insertLast(6);
ll.insertAt(0, 8);
ll.insertFirst(19);
// ll.removeAt(1);
console.log(ll.head.next.next.next);
console.log(ll);
// console.log(ll.toArray());
console.log(isItCircular(ll.head)); //true
