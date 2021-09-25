// Recursive Soln - O(n^2)
var levelOrderR = function (root) {
  let result = [];
  if (!root) return result;
  if (!root.left && !root.right) {
    result.push([root.val]);
    return result;
  }
  const pushIntoResult = (node, level) => {
    if (!node) return;
    if (!result[level]) {
      result.push([]);
    }
    result[level].push(node.val);
    pushIntoResult(node.left, level + 1);
    pushIntoResult(node.right, level + 1);
  };
  pushIntoResult(root, 0);
  return result;
};

// Queue soln - O(n)
var levelOrder = function (root) {
  let output = [];
  let queue = [];
  let currentNode = root;
  queue.push(currentNode);
  let currentLevel = 1;
  let index = 0; // Add an index for increasing the output index

  while (queue.length) {
    currentNode = queue.shift();
    currentLevel--;

    if (!output[index]) {
      // Set default is an array for each output element in first time
      output[index] = [];
    }

    output[index].push(currentNode.val);

    if (currentNode.left) {
      queue.push(currentNode.left);
    }

    if (currentNode.right) {
      queue.push(currentNode.right);
    }

    if (currentLevel === 0) {
      // Use strict equality operator to compare 0
      index++; // increase index
      currentLevel = queue.length;
    }
  }

  return output;
};

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
console.log(
  "Level order traversal of Binary Tree is " + "</br>" + levelOrderR(root)
);
