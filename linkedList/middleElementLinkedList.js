/*Description //
given a link list with a head return the middle element in the list 
*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
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

function LinkedListMiddleElement(head) {
  let fast = head;
  let slow = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
}

let ll = new LinkedList();
let ll2 = new LinkedList();

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

console.log(LinkedListMiddleElement(ll.head));
console.log(LinkedListMiddleElement(ll2.head));
