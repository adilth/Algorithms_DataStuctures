/* Description //Double link list
create a Double LinkList class with there methods getAt index and add At or in head or tail remove and so on
*/
class Node {
  constructor(val, next = null, prev = null) {
    this.val = val;
    this.next = next;
    this.prev = prev;
  }
}
class MyLinkList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  getAt(index) {
    if (index < 0 && index > this.length) return null;
    let current = this.head;
    while (index--) {
      current = current.next;
    }
    return current;
  }

  addAtHead(data) {
    let node = new Node(data);
    this.length++;
    if (this.head) {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
      return node;
    }
    this.head = this.tail = node;

    return node;
  }
  addAtTail(data) {
    let node = new Node(data);
    this.length++;
    if (this.tail) {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
      return node;
    }

    this.head = this.tail = node;
    return node;
  }
  addATIndex(index, data) {
    let node = new Node(data);
    if (index < 0 || index > this.length) return -1;
    if (index === 0) return this.insertFirst(data);
    if (index === this.length) return this.insertLast(data);
    this.length++;
    let current = this.getAt(index);
    let prev = current.prev;
    node.next = current;
    node.prev = prev;
    prev.next = node;
    current.prev = node;
    return node;
  }
  deleteHead() {
    if (this.head) {
      this.length--;
      const removedHead = this.head;
      this.head = this.head.next;

      if (this.head) {
        this.head.prev = null;
      } else {
        this.tail = null;
      }

      return removedHead;
    }
    return undefined;
  }
  deleteAtIndex(index) {
    if (index < 0 || index > this.length) return -1;
    this.length--;
    if (index === this.length) {
      this.tail = this.tail.prev;
      if (this.tail) {
        this.tail.next = null;
      } else {
        this.head = null;
      }
      return this;
    }
    if (index === 0) {
      return this.deleteHead();
    }
    let current = this.getAt(index);
    let prev = current.prev;
    let next = current.next;
    prev.next = next;
    next.prev = prev;
    return current;
  }
  print() {
    let current = this.head;
    while (current) {
      console.log(`${current.prev?.val} ${current.val} ${current.next?.val}`);
      current = current.next;
    }
  }
}
let ll = new MyLinkList();
ll.addAtHead(2);
ll.addAtHead(5);
ll.addAtTail(7);
ll.addATIndex(2, 6);
ll.deleteAtIndex(0);
console.log(ll.head);
console.log(ll.tail);
/*
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
