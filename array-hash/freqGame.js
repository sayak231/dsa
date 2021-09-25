// Frequency Game

// Given an array A of size N. The elements of the array consists of positive integers. You have to find the largest element with minimum frequency.

// Input Format: First line of input contains number of testcases T. For each testcase there will be two lines. First line contains N, next line contains N elements separated by spaces.

// Output Format: For each testcase, print the largest element with minimum frequency.

// User Task:
// Your task is to complete the provided function LargButMinFreq(A, n) which accepts array A and n. Hence you have to return the largest element with minimum frequency.

// Constraints:
// 1 <= T <= 100
// 1 <= N <= 105
// 1 <= A[i] <= 106

// Example:
// Input:
// 1
// 5
// 2 2 5 50 1

// Output:
// 50

// Explanation :
// Testcase 1: All elements are having frequency 1 except 2. 50 is the maximum element with minimum frequency.

function largeButMin(arr, n) {
  let obj = {};
  for (let i = 0; i < n; i++) {
    if (obj[arr[i]]) {
      obj[arr[i]]++;
    } else {
      obj[arr[i]] = 1;
    }
  }
  let ans = Object.entries(obj).sort((a, b) => a[1] - b[1]);
  let min = ans[0][1],
    max = parseInt(ans[0][0]);
  for (let i = 0; i < ans.length; i++) {
    if (ans[i][1] > min) {
      return max;
    } else {
      if (parseInt(ans[i][0]) > max) {
        max = parseInt(ans[i][0]);
      }
    }
  }
  return max;
}
console.log(largeButMin([2, 2, 5, 50, 1, 65, 78, 34, 78, 45, 34], 11));
