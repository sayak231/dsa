// Permute a string by changing case
// Difficulty Level : Hard
// Last Updated : 21 May, 2021
// Print all permutations of a string keeping the sequence but changing cases.
// Examples:

// Input : ab
// Output : AB Ab ab aB

// Input : ABC
// Output : abc Abc aBc ABc abC AbC aBC ABC

function permute(s) {
  let ip = s.toLowerCase(),
    op = "",
    ans = [];
  function solve(ip, op) {
    if (ip.length === 0) {
      ans.push(op);
      return;
    }
    let op1 = op + ip[0],
      op2 = op + ip[0].toUpperCase();
    solve(ip.slice(1), op1);
    solve(ip.slice(1), op2);
  }
  solve(ip, op);
  return ans;
}
let a = "a";
console.log(permute("ab"));
console.log(typeof a);
