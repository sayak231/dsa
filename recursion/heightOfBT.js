// Find the height of a binary tree using recursion

//TC - O(n)

const height = (node) => {
  if (node === null) return 0;

  let lh = height(node.left);
  let rh = height(node.right);

  return 1 + Math.max(lh, rh);
};

class Node {
  constructor(d) {
    this.left = null;
    this.right = null;
    this.data = d;
  }
}

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
// root.left.left = new Node(7);
// root.left.right = new Node(6);
// root.right.left = new Node(5);
// root.right.right = new Node(4);
// root.right.right.left = new Node(4);
// root.right.right.right = new Node(4);
// root.right.right.right.left = new Node(4);

console.log(height(root));
