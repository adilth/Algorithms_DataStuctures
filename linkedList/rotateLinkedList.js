/*Description //rotate a LinkedList

*/
class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
  print() {
    let res = "";
    let curr = this;
    while (curr) {
      res += curr.val + "-> ";
      curr = curr.next;
    }
    return res;
  }
  length() {
    let len = 0;
    let curr = this;
    while (curr) {
      len++;
      curr = curr.next;
    }
    return len;
  }
}

const getLastNode = (head) => {
  let prev = null;
  let tail = head;
  while (tail.next) {
    prev = tail;
    tail = tail.next;
  }
  return { tail, prev };
};
function rotateLinkedList(head, n) {
  if (head == null) return null;
  //avoid rotation unnecessarily
  n = n % head.length();
  if (n == 0) return head;

  for (let i = 0; i < n; i++) {
    let { tail, prev } = getLastNode(head);
    prev.next = null;
    tail.next = head;
    head = tail;
  }
  return head;
}

let head = new Node(5);
head.next = new Node(3);
head.next.next = new Node(6);
head.next.next.next = new Node(9);
head.next.next.next.next = new Node(0);
head.next.next.next.next.next = new Node(1);
head.next.next.next.next.next.next = new Node(11);

console.log(head.print());
console.log(rotateLinkedList(head, 6).next);
console.log(head.length());
console.log(head.print());
