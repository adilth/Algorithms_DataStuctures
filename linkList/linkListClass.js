class LinkList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  //insert first node
  insertFirst(data) {
    let node = new Node(data, this.head);
    this.head = node;

    this.size++;
  }
  //insert last node
  insertLast(data) {
    let current;
    let node = new Node(data, current);
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }
  //insert base on index
  insertAt(data, index) {
    if (index < 0 || this.size < index) {
      return null;
    }

    if (index === 0 || index == undefined) {
      this.insertFirst(data);
      return;
    }
    let previous;
    let current;
    let node = new Node(data);
    current = this.head;
    let count = 0;
    while (count < index) {
      previous = current; //node before index
      count++;
      current = current.next; //node after index
    }
    node.next = current;
    previous.next = node;
    this.size++;
  }
  //get at index
  getAtIndex(index) {
    let current = this.head;
    let count = 0;
    while (current) {
      if (count == index) {
        console.log(current.list);
        return count.list;
      }
      count++;
      current = current.next;
    }
    return null;
  }
  //get node size
  nodeSize() {
    return this.size;
  }
  //delete base on index
  deleteAtIndex(index) {
    if (index < 0 || this.size <= index) {
      return null;
    }
    let current = this.head;
    let previous;
    let count = 0;
    if (index === 0 || index == undefined) {
      this.head = current.next;
    } else {
      while (count < index) {
        previous = current; //node before index
        count++;
        current = current.next; //node after index
      }
      previous.next = current.next;
    }
    this.size--;
  }
  //DELETE last node
  deleteLast() {
    if (!this.head) {
      return null;
    } else {
      let current = this.head;
      w;
    }
  }
  //delete all nodes
  deleteAll() {
    delete new Node();
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  //print all nodes
  printAll() {
    let current = this.head;
    while (current) {
      console.log(current.list);
      current = current.next;
    }
  }
}

class Node {
  constructor(list, next = null) {
    this.list = list;
    this.next = next;
  }
}

let ll = new LinkList();

// ll.insertFirst(111);
// ll.insertFirst(44);
// ll.insertFirst(74);
// ll.insertAt(20, 2);
// ll.insertLast(2);
// ll.insertAt(222, 20);
// ll.deleteAtIndex(2);
// ll.insertAt(100);
// ll.printAll();
// let q = ll.nodeSize();
// // console.log(q);
// ll.getAtIndex(14);

ll.insertFirst(5);
ll.insertFirst(6);
ll.getAtIndex(1);
ll.insertLast(10);
ll.deleteAtIndex(3);
ll.printAll();
