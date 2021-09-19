// Unique Subsets

// Given an array arr[] of integers of size N that might contain duplicates, the task is to find all possible unique subsets.

// Note: Each subset should be sorted.

// Example 1:

// Input: N = 3, arr[] = {2,1,2}
// Output:(),(1),(1 2),(1 2 2),(2),(2 2)
// Explanation:
// All possible subsets = (),(2),(1),(1,2),(2),(2,2),(2,1),(2,1,2)
// After Sorting each subset = (),(2),(1),(1,2),(2),(2,2),(1,2),(1,2,2)
// Unique Susbsets in Lexicographical order = (),(1),(1,2),(1,2,2),(2),(2,2)

// Example 2:

// Input: N = 4, arr[] = {1,2,3,3}
// Output: (),(1),(1 2),(1 2 3)
// (1 2 3 3),(1 3),(1 3 3),(2),(2 3)
// (2 3 3),(3),(3 3)

// Your Task:
// Your task is to complete the function AllSubsets() which takes the array arr[] and N as input parameters and returns list of all possible unique subsets in lexicographical order.

// Expected Time Complexity: O(2N).
// Expected Auxiliary Space: O(2N * X), X = Length of each subset.

function allSubsets(arr) {
  //your code here
  let ip = arr,
    op = [],
    ans = [];
  function solve(ip, op) {
    if (ip.length === 0) {
      op.sort();
      ans.push(op.toString());
      return;
    }
    let op1 = [...op];
    let op2 = [...op];
    op2.push(ip[0]);
    let newIp = ip.slice(1);
    solve(newIp, op1);
    solve(newIp, op2);
  }
  solve(ip, op);
  ans.sort();
  let res = [...new Set(ans)];
  res = res.map((ele) => {
    return ele.split(",");
  });
  return res;
}
console.log(allSubsets([2, 1, 2]));
