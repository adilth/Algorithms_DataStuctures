/*description //merge a sorted link list 
Marge two sorted link list and return a new list that sorted the new list need to be made by splicing the two together to have new one
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
function mergeSortedLinkedList(head1, head2) {
  let dummy = new Node(-Infinity);
  let current1 = head1;
  let current2 = head2;
  let prev = dummy;

  while (current1 !== null && current2 !== null) {
    if (current1.value <= current2.value) {
      prev.next = current1;
      prev = current1;
      current1 = current1.next;
    } else {
      prev.next = current2;
      prev = current2;
      current2 = current2.next;
    }
  }
  if (!current1) prev.next = current2;
  if (!current2) prev.next = current1;
  return dummy.next;
}

let ll1 = new LinkedList();
let ll2 = new LinkedList();

ll1.insertLast(5);
ll1.insertLast(7);
ll1.insertLast(12);
ll1.insertLast(13);
ll2.insertLast(1);
ll2.insertLast(3);
ll2.insertLast(5);
ll2.insertLast(9);

console.log(mergeSortedLinkedList(ll1.head, ll2.head));
