/*Description //linked list find

Write a function, linkedListFind, that takes in the head of a linked list and a target value. The function should return a boolean indicating whether or not the linked list contains the target.
*/

class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class LinkedList {
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
  //find a value
  find(target) {
    let current = this.head;
    while (current !== null) {
      if (current === target) return true;
      current = current.next;
    }
    return false;
  }
}

let list = new LinkedList();

list.insertFirst(7);
list.insertFirst(-1);
list.insertFirst(8);
list.insertFirst(3);
list.insertFirst(2);

console.log(list.find());

function findRecursion(head, target) {
  if (head === null) return false;

  if (head.val === target) return true;
  findRecursion(head.next, target);
}
