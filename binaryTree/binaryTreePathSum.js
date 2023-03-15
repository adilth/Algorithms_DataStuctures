/*Description // binary tree Path Sum
Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

A leaf is a node with no children.
Example
Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
Output: true
Explanation: The root-to-leaf path with the target sum is shown.
Input: root = [1,2,3], targetSum = 5
Output: false
Explanation: There two root-to-leaf paths in the tree:
(1 --> 2): The sum is 3.
(1 --> 3): The sum is 4.
There is no root-to-leaf path with sum = 5.
*/
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
//Recursive DFS Solution
function pathSum(root, sum) {
  if (root === null) return false;
  if (root.val == sum && root.left == null && root.right == null) return true;
  return (
    pathSum(root.left, sum - root.val) || pathSum(root.right, sum - root.val)
  );
}

// Iterative Approach Using Queue

function pathSum(root, sum) {
  if (root === null) return false;
  let queue = [[root, sum]];
  while (queue.length) {
    let [current, sum] = queue.shift();

    if (!current.left && !current.right && current.val == sum) return true;
    if (current.left) {
      queue.push([current.left, sum - current.val]);
    }
    if (current.right) {
      queue.push([current.right, sum - current.val]);
    }
  }
  return false;
}

//Path Sum II
function pathSumII(root, sum) {
  if (root === null) return false;
  let stack = [[root, sum]];
  while (stack.length) {
    let [current, sum] = stack.pop();

    if (!current.left && !current.right && current.val == sum) return true;
    if (current.left) {
      stack.push([current.left, sum - current.val]);
    }
    if (current.right) {
      stack.push([current.right, sum - current.val]);
    }
  }
  return false;
}
function pathSumIIRec(root, sum) {
  var res = [];
  helper(root, sum, [], res);
  return res;
}
const helper = (root, sum, curr, res) => {
  if (!root) return;

  curr.push(root.val);
  if (root.val == sum && !root.left && !root.right) res.push(curr);
  helper(root.left, sum - root.val, Array.from(curr), res);
  helper(root.right, sum - root.val, Array.from(curr), res);
};
let root;
root = new Node(1); //                   1
root.left = new Node(2); ///        2         3
root.right = new Node(3); //       4    5     6     7
root.left.left = new Node(4); //           5    8
root.left.right = new Node(8);
root.right.left = new Node(6);
root.right.right = new Node(7);
root.right.left.right = new Node(8);
root.right.left.left = new Node(5);

console.log(pathSum(root, 7)); //true
console.log(pathSum(root, 18)); //true
console.log(pathSum(root, 25)); //false

console.log(pathSumIIRec(root, 11)); //[ [ 1, 2, 8 ], [ 1, 3, 7 ] ]
