/**  Description // Diameter of Binary Tree //highest Bath 
Given the root of a binary tree, return the length of the diameter of the tree.

The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

The length of a path between two nodes is represented by the number of edges between them.
 * @param {TreeNode}
 * @Return {number}
 * 
*/
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function diameterOfBinary(root) {
  let max = 0;
  const dfs = (root) => {
    if (root === null) return 0;
    let left = dfs(root.left);
    let right = dfs(root.right);
    max = Math.max(right + left, max);
    return Math.max(left, right) + 1;
  };
  dfs(root);
  return max;
}

let root;
root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);
root.right.left.right = new Node(8);
root.right.left.left = new Node(2);

console.log(diameterOfBinary(root)); //5
