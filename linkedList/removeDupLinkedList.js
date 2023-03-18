/*Description //Remove Linked List Elements

Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

Input: head = [1,2,6,3,4,5,6], val = 6
Output: [1,2,3,4,5]
Example 2:

Input: head = [], val = 1
Output: []
*/
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  //insert last current
  insertFirst(data) {
    let node = new Node(data, this.head);
    this.head = node;

    this.size++;
  }
}
class Node {
  constructor(list, next = null) {
    this.list = list;
    this.next = next;
  }
}

function removeDuplicate(head, value) {
  let current = head;
  let dummy = new Node(-1);
  console.log(dummy);
  dummy.next = head;
  let prev = dummy;
  while (current) {
    if (current.list == value) {
      prev.next = current.next;
      current = current.next;
    } else {
      prev = current;
      current = current.next;
    }
  }
  return dummy.next;
}

function removeNode(head, value) {
  var current = head,
    last;

  if (current && current.list === value) {
    return current.next;
  }

  while (current && current.list !== value) {
    (last = current), (current = current.next);
  }
  if (last && current.list === value) {
    last.next = current.next;
  }
  return head;
}
let ll = new LinkedList();

ll.insertFirst(2);
ll.insertFirst(7);
ll.insertFirst(12);
ll.insertFirst(9);
ll.insertFirst(7);
ll.insertFirst(8);

// console.log(removeDuplicate(ll.head, 7));
console.log(removeNode(ll.head, 7));
console.log(ll);
