/*Description // ZigZag Level Order


*/
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
function ZigZagLevelOrder(root) {
  if (root === null) return [];
  let queue = [root];
  let levels = [];
  while (queue.length) {
    let len = queue.length;
    levels.push(queue.map((node) => node.val));
    count++;
    while (len--) {
      let current = queue.shift();
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
  }
  return levels;
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
root.right.left.left = new Node(36);

console.log(ZigZagLevelOrder(root));
