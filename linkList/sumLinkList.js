/*Description //sum list
Write a function, sumList, that takes in the head of a linked list containing numbers as an argument. The function should return the total sum of all values in the linked list.
*/

class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

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
  //sum all links
  sumLists() {
    let sum = 0;
    let current = this.head;
    while (current !== null) {
      sum += current.val;
      current = current.next;
    }
    return sum;
  }
}

let list = new LinkList();

list.insertFirst(7);
list.insertFirst(-1);
list.insertFirst(8);
list.insertFirst(3);
list.insertFirst(2);

console.log(list.sumLists());
console.log(list.recursionSum());

function recursionSum(head) {
  if (head === null) return 0;
  return head.val + recursionSum(head.next);
}
