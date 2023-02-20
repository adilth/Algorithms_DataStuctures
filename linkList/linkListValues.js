/*Description //linked list values
Write a function, linkedListValues, that takes in the head of a linked list as an argument. The function should return an array containing all values of the nodes in the linked list.

Hey. This is our first linked list problem, so you should be liberal with watching the Approach and Walkthrough. Be productive, not stubborn. -AZ
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

function linkListValues(head) {
  let arr = [];
  let current = head;
  while (current !== null) {
    arr.push(current.val);
    current.next;
  }
  return arr;
}
function linkListValues(head) {
  let arr = [];
  loopValues(head, arr);
  return arr;
}

function loopValues(head, arr) {
  if (head === null) return;
  arr.push(head.val);
  loopValues(head.next, arr);
}
