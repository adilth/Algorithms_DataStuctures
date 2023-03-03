/*Description //

*/
class LinkList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  //insert last current
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
class Node {
  constructor(list, next = null) {
    this.list = list;
    this.next = next;
  }
}

function removeDuplicateInSortedList(head) {
  //   let current = head;
  let current = head.next;
  let dummy = head;
  //   dummy.next = head;
  let prev = dummy;
  while (current) {
    if (prev.list === current.list) {
      while (current && current.list === prev.list) {
        current = current.next;
      }
      prev.next = current;
    } else {
      prev = current;
      current = current.next;
    }
  }
  return dummy;
}

let ll = new LinkList();

ll.insertLast(2);
ll.insertLast(2);
ll.insertLast(4);
ll.insertLast(4);
ll.insertLast(3);
ll.insertLast(7);

console.log(removeDuplicateInSortedList(ll.head));
