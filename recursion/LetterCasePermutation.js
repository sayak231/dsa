// 784. Letter Case Permutation
// Medium

// 2456

// 130

// Add to List

// Share
// Given a string s, we can transform every letter individually to be lowercase or uppercase to create another string.

// Return a list of all possible strings we could create. You can return the output in any order.

// Example 1:

// Input: s = "a1b2"
// Output: ["a1b2","a1B2","A1b2","A1B2"]

// Example 2:

// Input: s = "3z4"
// Output: ["3z4","3Z4"]

// Example 3:

// Input: s = "12345"
// Output: ["12345"]

// Example 4:

// Input: s = "0"
// Output: ["0"]

// Constraints:

// s will be a string with length between 1 and 12.
// s will consist only of letters or digits.

var letterCasePermutation = function (s) {
  let ip = s.toLowerCase(),
    op = "",
    ans = [];
  let isNumber = function (obj, strict) {
    var strict = strict === true ? true : false;
    if (strict) {
      return !isNaN(obj) && obj instanceof Number ? true : false;
    } else {
      return !isNaN(obj - parseFloat(obj));
    }
  };
  function solve(ip, op) {
    if (ip.length === 0) {
      ans.push(op);
      return;
    }
    if (!isNumber(ip[0], false)) {
      let op1 = op + ip[0],
        op2 = op + ip[0].toUpperCase();
      solve(ip.slice(1), op1);
      solve(ip.slice(1), op2);
    } else {
      let newOp = op + ip[0];
      solve(ip.slice(1), newOp);
    }
  }
  solve(ip, op);
  return ans;
};
console.log(letterCasePermutation("C"));
