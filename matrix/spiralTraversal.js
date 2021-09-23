// Spirally traversing a matrix

// Given a matrix of size r*c. Traverse the matrix in spiral form.

// Example 1:

// Input:
// r = 4, c = 4
// matrix[][] = {{1, 2, 3, 4},
//            {5, 6, 7, 8},
//            {9, 10, 11, 12},
//            {13, 14, 15,16}}
// Output:
// 1 2 3 4 8 12 16 15 14 13 9 5 6 7 11 10
// Explanation:

// Example 2:

// Input:
// r = 3, c = 4
// matrix[][] = {{1, 2, 3, 4},
//            {5, 6, 7, 8},
//            {9, 10, 11, 12}}
// Output:
// 1 2 3 4 8 12 11 10 9 5 6 7
// Explanation:
// Applying same technique as shown above,
// output for the 2nd testcase will be
// 1 2 3 4 8 12 11 10 9 5 6 7.

// Your Task:
// You dont need to read input or print anything. Complete the function spirallyTraverse() that takes matrix, r and c as input parameters and returns a list of integers denoting the spiral traversal of matrix.

// Expected Time Complexity: O(r*c)
// Expected Auxiliary Space: O(r*c), for returning the answer only.

function spiral(r, c) {
  let left = 0,
    right = c - 1,
    top = 0,
    bottom = r - 1;

  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) {
      ans.push(matrix[top][i]);
    }

    top++;

    for (let i = top; i <= bottom; i++) {
      ans.push(matrix[i][right]);
    }

    right--;

    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        ans.push(matrix[bottom][i]);
      }

      bottom--;
    }

    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        ans.push(matrix[i][left]);
      }

      left++;
    }
  }

  return ans;
}
