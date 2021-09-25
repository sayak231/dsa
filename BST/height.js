function height(node) {
  //your code here
  if (node === null) {
    return 0;
  } else {
    let lh = this.height(node.left);
    let rh = this.height(node.right);

    return Math.max(lh, rh) + 1;
  }
}

class Node {
  constructor(d) {
    this.left = null;
    this.right = null;
    this.val = d;
  }
}

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(7);
root.left.right = new Node(6);
root.right.left = new Node(5);
root.right.right = new Node(4);
root.right.right.right = new Node(14);
root.right.right.left = new Node(11);

console.log(height(root));
