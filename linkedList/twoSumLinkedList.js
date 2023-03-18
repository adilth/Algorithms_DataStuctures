/*Description //Add Two Numbers

ou are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
*/

class LinkedList {
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

function TwoSumLinkedList(head1, head2) {
  let dummy = new Node(-1);
  let res = dummy;
  let curry = 0;
  while (head1 || head2 || curry) {
    let l1Val = head1.list || 0;
    let l2Val = head2.list || 0;
    let nextDigit = (l1Val + l2Val + curry) % 10;
    res.next = new Node(nextDigit);
    res = res.next;
    curry = Math.floor((l1Val + l2Val + curry) / 10);
    head1 = head1.next || 0;
    head2 = head2.next || 0;
  }
  return dummy.next;
}

let ll = new LinkedList();
let ll2 = new LinkedList();

ll.insertLast(2);
ll.insertLast(4);
ll.insertLast(3);
ll.insertLast(7);
ll2.insertLast(5);
ll2.insertLast(6);
ll2.insertLast(4);
console.log(TwoSumLinkedList(ll.head, ll2.head));
