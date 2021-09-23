// Write a program to print all permutations of a given string

// A permutation, also called an “arrangement number” or “order,” is a rearrangement of the elements of an ordered list S into a one-to-one correspondence with S itself. A string of length n has n! permutation.

// Below are the permutations of string ABC.
// ABC ACB BAC BCA CBA CAB

// TC - O(n*n!)

function generate(s) {
  let l = 0,
    r = s.length - 1,
    ans = [];
  function permute(str, l, r) {
    if (l === r) {
      ans.push(str);
      return;
    } else {
      for (let i = l; i <= r; i++) {
        str = swap(str, l, i);
        permute(str, l + 1, r);
        str = swap(str, l, i);
      }
    }
  }
  function swap(str, l, r) {
    let temp;
    let charArray = str.split("");
    temp = charArray[l];
    charArray[l] = charArray[r];
    charArray[r] = temp;
    return charArray.join("");
  }
  permute(s, l, r);
  return ans;
}
console.log(generate("ABCD"));

//----------------------------------------------------------------------------------------------------------------------------------------------

// 46. Permutations

// Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

// Example 1:

// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

// Example 2:

// Input: nums = [0,1]
// Output: [[0,1],[1,0]]

// Example 3:

// Input: nums = [1]
// Output: [[1]]

var permute = function (nums) {
  let l = 0,
    r = nums.length - 1,
    ans = [];

  function solve(numStr, l, r) {
    if (l === r) {
      ans.push(JSON.parse(JSON.stringify(numStr)));
      return;
    }
    for (let i = l; i <= r; i++) {
      numStr = swap(numStr, l, i);
      solve(numStr, l + 1, r);
      numStr = swap(numStr, l, i);
    }
  }

  function swap(charArray, l, r) {
    let temp;
    temp = charArray[l];
    charArray[l] = charArray[r];
    charArray[r] = temp;
    return charArray;
  }

  solve(nums, l, r);
  return ans;
};
