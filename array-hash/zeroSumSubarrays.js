// Zero Sum Subarrays

// You are given an array arr[] of size n. Find the total count of sub-arrays having their sum equal to 0.

// Example 1:

// Input:
// n = 6
// arr[] = {0,0,5,5,0,0}
// Output: 6
// Explanation: The 6 subarrays are
// [0], [0], [0], [0], [0,0], and [0,0].

// Example 2:

// Input:
// n = 10
// arr[] = {6,-1,-3,4,-2,2,4,6,-12,-7}
// Output: 4
// Explanation: The 4 subarrays are [-1 -3 4]
// [-2 2], [2 4 6 -12], and [-1 -3 4 -2 2]

// Your Task:
// You don't need to read input or print anything. Complete the function findSubarray() that takes the array arr and its size n as input parameters and returns the total number of sub-arrays with 0 sum.

// Expected Time Complexity : O(n)
// Expected Auxilliary Space : O(n)

// Constraints:
// 1<= n <= 107
// -1010 <= arri <= 1010

// function findSubarray(arr, n) {
//   // code here
//   let map = new Map();
//   map.set(0, 1);
//   let sum = 0,
//     count = 0;
//   for (let i = 0; i < n; i++) {
//     sum += arr[i];
//     if (map.has(sum)) {
//       count += map.get(sum);
//       map.set(sum, map.get(sum) + 1);
//     } else {
//       map.set(sum, 1);
//     }
//   }
//   return count;
// }

function findSubarray(arr, n) {
  function isSumZero(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum === 0;
  }
  let count = 0;
  function repeat(ip, op) {
    if (ip.length === 0) {
      if (isSumZero(op)) count++;
      return;
    }
    let op1 = [...op];
    let op2 = [...op];
    op2.push(ip[0]);
    let ip1 = ip.slice(1);

    repeat(ip1, op1);
    repeat(ip1, op2);
  }
  repeat(arr, []);
  return count;
}

console.log(findSubarray([0, 0, 5, 5, 0, 0], 6));
