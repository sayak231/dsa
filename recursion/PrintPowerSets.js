// 2. Power Set Using Recursion

// You are given a string. You need to print the lexicographically sorted power-set of the string.
// Note: The string s contains lowercase letter of alphabet.

// Example 1:

// Input:
// s = a
// Output: a
// Explanation: empty string and a
// are only sets.

// Example 2:

// Input:
// s = abc
// Output: a ab abc ac b bc c
// Explanation: empty string,
// a, ab, abc, ac, b, bc, c
// are the sets.

// Your Task:
// You don't need to read input or print anything. You only need to complete the function powerSet that takes string s as parameter and returns a list of subsets. The lexicographic-sorting and printing is done automatically by the driver code.

// Expected Time Complexity: O(2^|s|).
// Expected Auxiliary Space: O(|s|).

// Constraints:
// 1 <= |s| <= 10

// Using recursive tree IP-OP method

// Time Complexity: O(2^|s|).
// Auxiliary Space: O(|s|).

// This problem = Print subset = Print Powerset  = Print subsequence

function powerSet(s) {
  // code here
  let op = "",
    ip = s,
    ans = [];
  function solve(ip, op) {
    if (ip.length === 0) {
      ans.push(op);
      return;
    }
    let op1 = op;
    let op2 = op;
    op2 = op2 + ip[0];
    solve(ip.slice(1), op1);
    solve(ip.slice(1), op2);
  }
  solve(ip, op);
  ans.sort();
  return ans;
}
console.log(powerSet("abca"));
