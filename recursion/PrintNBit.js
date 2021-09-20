// Print N-bit binary numbers having more 1s than 0s

// Medium Accuracy: 76.39% Submissions: 4078 Points: 4
// Given a positive integer N, the task is to find all the N bit binary numbers having more than or equal 1’s than 0’s for any prefix of the number.

// Example 1:

// Input:  N = 2
// Output: 11 10
// Explanation: 11 and 10 have more than
// or equal 1's than 0's

// Example 2:

// Input:  N = 3
// Output: 111 110 101
// Explanation: 111, 110 and 101 have more
// than or equal 1's than 0's

// User Task:
// Your task is to complete the function NBitBinary() which takes a single number as input and returns the list of strings in decreasing order. You need not take any input or print anything.

// Expected Time Complexity: O(|2^N|)
// Expected Auxiliary Space: O(2^N)

// Constraints:
// 1 <= N <= 20

function NBitBinary(N) {
  //code here
  function gen(op, z, o, ans) {
    if (z + o === N && z <= o) {
      ans.push(op);
      return;
    }
    if (z <= o) {
      gen(op + "1", z, o + 1, ans);
      gen(op + "0", z + 1, o, ans);
    }
    return ans;
  }
  return gen("", 0, 0, []);
}
console.log(NBitBinary(3));
