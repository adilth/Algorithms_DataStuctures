/*Description //Build LinkList Recursively

*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class LinkList {
  constructor() {
    this.head = null;
  }
  append(val) {
    if (this.head == null) {
      this.head = new Node(val);
      return;
    }
    this.#append(val, this.head);
  }
  //add a new node in last position
  #append(val, cur) {
    if (cur.next == null) {
      cur.next = new Node(val);
      return;
    }
    this.#append(val, cur.next);
  }
  //print all values in the list
  print() {
    return this.#print(this.head);
  }
  #print(cur) {
    if (cur == null) return "";
    return cur.val + "->" + this.#print(cur.next);
  }
  //find a node in link list
  contains(val) {
    return this.#contains(val, this.head);
  }
  #contains(val, cur) {
    if (cur === null) return false;
    if (cur.val === val) return true;
    return this.#contains(val, cur.next);
  }
  //delete node from link list
  deleteValue(val) {
    if (this.head.val === val) {
      return this.head.next;
    } else {
      this.#deleteValue(val, this.head, null);
      return this.head;
    }
  }
  #deleteValue(val, cur, prev) {
    if (cur === null) return;
    if (cur.val === val) {
      prev.next = cur.next;
      return;
    }
    this.#deleteValue(val, cur.next, cur);
  }
}
function deleteValue(val, head) {
  if (head.val === val) {
    return head.next;
  } else {
    _deleteValue(val, head, null);
    return head;
  }
}
function _deleteValue(val, cur, prev) {
  if (cur === null) return;
  if (cur.val === val) {
    prev.next = cur.next;
    return;
  }
  _deleteValue(val, cur.next, cur);
}

const list = new LinkList();
list.append("a");
list.append("b");
list.append("c");
list.append("d");
list.append("f");
console.log(list.contains("c")); //true
console.log(list.contains("z")); //false
list.deleteValue("a");
console.log(list.print()); //a->b->c->d->
console.log(deleteValue("a", list.head));
function sumLinkList(head) {
  if (head === null) return 0;
  return head.val + sumLinkList(head.next);
}

const list2 = new LinkList();
list2.append(2);
list2.append(12);
list2.append(6);
list2.append(8);
list2.append(20);

console.log(sumLinkList(list2.head)); //48
