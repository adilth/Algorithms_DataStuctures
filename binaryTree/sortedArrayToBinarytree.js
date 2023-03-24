/*Description //Convert Sorted Array to Binary Search Tree

Given an integer array nums where the elements are sorted in ascending order, convert it to a 
height-balanced
 binary search tree.
 Example:
 Input: nums = [-10,-3,0,5,9]
Output: [0,-3,9,-10,null,5]
Explanation: [0,-10,5,null,-3,null,9] is also accepted:
*/
class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function sortedArrayToBTS(arr) {
  if (arr.length == 0) return null;
  let mid = Math.floor(arr.length / 2);
  let root = new Node(arr[mid]);
  root.left = sortedArrayToBTS(arr.slice(0, mid));
  root.right = sortedArrayToBTS(arr.slice(mid + 1));
  return root;
}

function sortedArrayToBTS(arr, left = 0, right = arr.length - 1) {
  if (left >= right) return null;
  const mid = Math.floor((left + right) / 2);
  return new Node(
    arr[mid],
    sortedArrayToBTS(arr, left, mid),
    sortedArrayToBTS(arr, mid + 1, right)
  );
}

console.log(sortedArrayToBTS([3, 9, 12, 15, 17]));
/*
Node {
  val: 12,
  left: Node {
    val: 9,
    left: Node { val: 3, left: null, right: null },
    right: null
  },
  right: Node { val: 15, left: null, right: null }
}
*/
