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
