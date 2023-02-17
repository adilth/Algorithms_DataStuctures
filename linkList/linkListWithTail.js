class LinkList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  //insert first node
  insertFirst(data) {
    let node = new Node(data, this.head);
    if (this.size === 0) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
  //insert last node
  insertLast(data) {
    let current;
    let node = new Node(data);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      current = this.tail;
      this.tail = node;
      current.next = this.tail;
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
    } else if (index === this.size) {
      this.insertLast();
    } else {
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
  }
  //get at index
  getAtIndex(index) {
    let current = this.head;
    let count = 0;
    while (current) {
      if (count == index) {
        console.log(current.list);
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
  //delete first node
  deleteFirst() {
    if ((this.size = 0)) return null;
    let data = this.head.list;
    if (this.size == 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }
    this.size--;
    return data;
  }
  //DELETE last node
  deleteLast() {
    if (!this.head) return null;

    let data = this.tail.list;
    if (this.size === 1) {
      this.head == null;
      this.tail == null;
    } else {
      let current = this.head;
      // let current = this.head.next;
      while (current.next.next != null) {
        current = current.next;
      }
      current.next = null;
      this.tail = current;
    }
    this.size--;
    return data;
  }
  //delete node from position
  deleteAt(index) {
    if (index < 0 || this.size < index) {
      return null;
    }
    if (index === 0 || index == undefined) {
      this.deleteFirst(data);
      return;
    } else if (index === this.size) {
      this.deleteLast();
    } else {
      let prev;
      let current = this.head;
      let count = 0;
      while (count < index) {
        prev = current; //node before index
        count++;
        current = current.next; //node after index
      }
      prev.next = current.next;
      this.size--;
      return current.list;
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
    let data = [];
    let current = this.head;
    while (current) {
      data.push(current.list);
      console.log(current.list);
      current = current.next;
    }
    return data;
  }
}

class Node {
  constructor(list, next = null) {
    this.list = list;
    this.next = next;
  }
}

let ll = new LinkList();

ll.insertFirst(111);
ll.insertFirst(44);
ll.insertFirst(74);
// ll.insertAt(20, 2);
ll.insertLast(2);
ll.insertLast(7);
ll.insertAt(222, 20);
ll.insertAt(099, 2);
ll.deleteAt(2);
ll.deleteFirst();
ll.deleteLast();
ll.insertAt(100);
let q = ll.printAll();
// let q = ll.nodeSize();
console.log(q);
ll.getAtIndex(1);
