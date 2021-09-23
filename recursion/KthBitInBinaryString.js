// 1545. Find Kth Bit in Nth Binary String

// Given two positive integers n and k, the binary string  Sn is formed as follows:

// S1 = "0"
// Si = Si-1 + "1" + reverse(invert(Si-1)) for i > 1
// Where + denotes the concatenation operation, reverse(x) returns the reversed string x, and invert(x) inverts all the bits in x (0 changes to 1 and 1 changes to 0).

// For example, the first 4 strings in the above sequence are:

// S1 = "0"
// S2 = "011"
// S3 = "0111001"
// S4 = "011100110110001"
// Return the kth bit in Sn. It is guaranteed that k is valid for the given n.

// Example 1:

// Input: n = 3, k = 1
// Output: "0"
// Explanation: S3 is "0111001". The first bit is "0".

// Example 2:

// Input: n = 4, k = 11
// Output: "1"
// Explanation: S4 is "011100110110001". The 11th bit is "1".

// Example 3:

// Input: n = 1, k = 1
// Output: "0"

// Example 4:

// Input: n = 2, k = 3
// Output: "1"

// Constraints:

// 1 <= n <= 20
// 1 <= k <= 2n - 1

// TC - O(n)
var findKthBitIterative = function (n, k) {
  let op = "0";
  for (let i = 2; i <= n; i++) {
    op = op + "1" + reverse(invert(op));
  }
  return op[k - 1];
};

// TC - O(log(n))
var findKthBitRecursive = function (n, k) {
  return find(n, k, Math.pow(2, n) - 1);
};

function find(n, k, l) {
  if (n == 1) {
    return "0";
  }
  if (k <= Math.floor(l / 2)) {
    return find(n - 1, k, Math.floor(l / 2));
  }
  if (k > Math.floor(l / 2) + 1) {
    return invert(find(n - 1, l - k + 1, Math.floor(l / 2)));
  }
  return "1";
}

function reverse(n) {
  return n.split("").reverse().join("");
}

function invert(n) {
  let newStr = "";
  for (let i = 0; i < n.length; i++) {
    n[i] === "0" ? (newStr += "1") : (newStr += "0");
  }
  return newStr;
}
console.log(findKthBitIterative(4, 11), findKthBitRecursive(4, 11));
