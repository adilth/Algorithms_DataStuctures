/*Description //
given a link list with a head return the middle element in the list 
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
    this.size = 0;
  }

  // Add a value at end of list
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
}

function linkListMiddleElement(head) {
  let fast = head;
  let slow = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
}

let ll = new LinkList();
let ll2 = new LinkList();

ll.insertLast(5);
ll.insertLast(7);
ll.insertLast(12);
ll.insertLast(6);
ll.insertLast(13);
ll2.insertLast(12);
ll2.insertLast(6);
ll2.insertLast(8);
ll2.insertLast(22);
ll2.insertLast(17);
ll2.insertLast(1);

console.log(linkListMiddleElement(ll.head));
console.log(linkListMiddleElement(ll2.head));
