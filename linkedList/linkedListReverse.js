/*Description //reverse list
Write a function, reverseList, that takes in the head of a linked list as an argument. The function should reverse the order of the nodes in the linked list in-place and return the new head of the reversed linked list.

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
  reverseList() {
    let current = this.head;
    let prev = null;
    while (current !== null) {
      const next = current.next; // assign pointer next node to variable
      current.next = prev; // reassign the next pointer to previous node
      prev = current; // assign prev variable to current node
      current = next; //and current to next node
    }
    return prev;
  }
}

let list = new LinkedList();

list.insertFirst(7);
list.insertFirst(-1);
list.insertFirst(8);
list.insertFirst(3);
list.insertFirst(2);

console.log(list.reverseList());
console.log(list);

function recursionReverseList(head, prev = null) {
  if (head === null) return prev;
  const next = head.next;
  head.next = prev;
  return recursionReverseList(next, head);
}
