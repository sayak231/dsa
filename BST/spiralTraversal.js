// Level order traversal in spiral form

// Write a function to print spiral order traversal of a tree. For below tree, function should print 1, 2, 3, 4, 5, 6, 7.

//Recursive Solution :-

//TC - O(n^2)
//SC - O(1)

class Node {
  constructor(d) {
    this.left = null;
    this.right = null;
    this.data = d;
  }
}

let root;

// Function to print the spiral traversal of tree
function printSpiral(node) {
  let h = height(node);
  let i;

  /* ltr -> left to right. If this variable is set then the
           given label is traversed from left to right */
  let ltr = false;
  for (i = 1; i <= h; i++) {
    printGivenLevel(node, i, ltr);

    /*Revert ltr to traverse next level in opposite order*/
    ltr = !ltr;
  }
}

/* Compute the "height" of a tree -- the number of
    nodes along the longest path from the root node
    down to the farthest leaf node.*/
function height(node) {
  if (node == null) return 0;
  else {
    /* compute the height of each subtree */
    let lheight = height(node.left);
    let rheight = height(node.right);

    /* use the larger one */
    if (lheight > rheight) return lheight + 1;
    else return rheight + 1;
  }
}

/* Print nodes at a given level */
function printGivenLevel(node, level, ltr) {
  if (node == null) return;
  if (level == 1) console.log(node.data + " ");
  else if (level > 1) {
    if (ltr != false) {
      printGivenLevel(node.left, level - 1, ltr);
      printGivenLevel(node.right, level - 1, ltr);
    } else {
      printGivenLevel(node.right, level - 1, ltr);
      printGivenLevel(node.left, level - 1, ltr);
    }
  }
}

root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(7);
root.left.right = new Node(6);
root.right.left = new Node(5);
root.right.right = new Node(4);
console.log("Spiral order traversal of Binary Tree is " + "</br>");
printSpiral(root);

// Iterative Solution

// TC - O(n)
// SC - O(n)

class Node {
  constructor(item) {
    this.left = null;
    this.right = null;
    this.data = item;
  }
}

let root;

function printSpiral(node) {
  if (node == null) {
    return; // NULL check
  }

  // Create two stacks to store alternate levels
  let s1 = []; // For levels to be printed
  // from right to left
  let s2 = []; // For levels to be printed
  // from left to right

  // Push first level to first stack 's1'
  s1.push(node);

  // Keep printing while any of the
  // stacks has some nodes
  while (s1.length > 0 || s2.length > 0) {
    // Print nodes of current level from
    // s1 and push nodes of next level to s2
    while (s1.length > 0) {
      let temp = s1[s1.length - 1];
      s1.pop();
      console.log(temp.data + " ");

      // Note that is right is pushed before left
      if (temp.right != null) {
        s2.push(temp.right);
      }

      if (temp.left != null) {
        s2.push(temp.left);
      }
    }

    // Print nodes of current level from s2
    // and push nodes of next level to s1
    while (s2.length > 0) {
      let temp = s2[s2.length - 1];
      s2.pop();
      console.log(temp.data + " ");

      // Note that is left is pushed before right
      if (temp.left != null) {
        s1.push(temp.left);
      }
      if (temp.right != null) {
        s1.push(temp.right);
      }
    }
  }
}

root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(7);
root.left.right = new Node(6);
root.right.left = new Node(5);
root.right.right = new Node(4);
console.log("Spiral Order traversal of Binary Tree is " + "</br>");
printSpiral(root);
