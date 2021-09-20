// Recursively remove all adjacent duplicates
// Medium Accuracy: 46.71% Submissions: 13949 Points: 4
// Given a string s, remove all its adjacent duplicate characters recursively.

// Example 1:

// Input:
// S = "geeksforgeek"
// Output: "gksforgk"
// Explanation:
// g(ee)ksforg(ee)k -> gksforgkâ€‹

// Example 2:

// Input:
// S = "acaaabbbacdddd"
// Output: "acac"
// Explanation:
// ac(aaa)(bbb)ac(dddd) -> acac

// Your Task:
// You don't need to read input or print anything. Your task is to complete the function remove() which takes the string S as input parameter and returns the resultant string.

// Expected Time Complexity: O(|S|)
// Expected Auxiliary Space: O(|S|)

// Constraints:
// 1<=|S|<=105

// Do simple remove duplicates code and then if any duplicates are found, then call the function again with the result, else return the result.

function remove(s) {
  // code here
  let res = "";
  let i = 0;
  let flag = false;
  while (s[i]) {
    if (s[i] != s[i + 1]) {
      res += s[i];
      i++;
    }
    if (s[i + 1] && s[i] == s[i + 1]) {
      while (s[i + 1] && s[i] == s[i + 1]) {
        i++;
      }
      flag = true;
      i++;
    }
  }
  if (flag) {
    return remove(res);
  }
  return res;
}
console.log(remove("abccbccba"));
console.log(remove("geeksforgeek"));
