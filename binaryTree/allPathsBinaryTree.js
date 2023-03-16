/**Description // All Paths in the tree
 *
 * Given the root of a complete binary tree, return the number of the nodes in the tree.
 * @param {TreeNode}
 * @param {Array}
 */

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
function totalNodes(root) {
  let res = [];
  if (!root) return res;
  helper(root, [], res);
  return res;
}
function helper(root, curr, res) {
  if (!root) return;
  curr.push(root.val);
  if (root.left == null && root.right == null) {
    // res.push(curr.join("->"));
    res.push([...curr]);
  } else {
    helper(root.left, curr, res);
    helper(root.right, curr, res);
  }
  curr.pop();
}

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(9);
root.right.right = new Node(8);
root.left.left.left = new Node(6);
root.left.left.right = new Node(7);
root.left.left.right.left = new Node(8);

console.log(totalNodes(root));
