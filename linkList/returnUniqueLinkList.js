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

function returnUniqueLinkList(head) {
  let current = head;
  let next;
  let dummy = new Node(-Infinity, head);
  let prev = dummy;
  while (current) {
    next = current.next;
    if (next?.list === current?.list) {
      while (next?.list === current?.list) {
        next = next.next;
      }
      current = next;
      prev.next = next;
      next = next?.next;
    } else {
      prev = current;
      current = next;
    }
  }
  return dummy.next;
}

let ll = new LinkList();

ll.insertLast(2);
ll.insertLast(2);
ll.insertLast(3);
ll.insertLast(4);
ll.insertLast(4);
ll.insertLast(4);
ll.insertLast(5);
ll.insertLast(6);
ll.insertLast(7);
ll.insertLast(7);

console.log(returnUniqueLinkList(ll.head));
//output
/*Node {
  list: 3,
  next: Node { list: 5, next: Node { list: 6, next: null } }
} */
