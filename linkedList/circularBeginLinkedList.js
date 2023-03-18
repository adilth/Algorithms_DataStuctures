/*//Description//Linked List Cycle II
Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to (0-indexed). It is -1 if there is no cycle. Note that pos is not passed as a parameter.

Do not modify the linked list.
*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
function WhereCycleBegin(head) {
  let slow = head;
  let fast = head;
  let slow2 = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    if (slow === fast) break;
  }
  if (fast !== slow) return null;
  while (slow !== slow2) {
    slow2 = slow2.next;
    slow = slow.next;
  }
  return slow;
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");
const k = new Node("k");
const i = new Node("i");

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = k;
k.next = i;
i.next = e;

console.log(WhereCycleBegin(a));
