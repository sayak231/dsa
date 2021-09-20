// Generate Parentheses
// Medium Accuracy: 59.65% Submissions: 13428 Points: 4
// Given an integer N representing the number of pairs of parentheses, the task is to generate all combinations of well-formed(balanced) parentheses.

// Example 1:

// Input:
// N = 3
// Output:
// ((()))
// (()())
// (())()
// ()(())
// ()()()
// Example 2:
// Input:
// N = 1
// Output:
// ()

// Your Task:
// You don't need to read input or print anything. Complete the function AllParenthesis() which takes N as input parameter and returns the list of balanced parenthesis.

// Expected Time Complexity: O(2N * N).
// Expected Auxiliary Space: O(2*N*X), X = Number of valid Parenthesis.

// Constraints:
// 1 ≤ N ≤ 12

function generateParenthesis(A) {
  let op = "",
    ans = [];
  function solve(op, o, c) {
    if (o === A && c === A) {
      ans.push(op);
      return;
    }
    if (o === c) {
      solve(op + "(", o + 1, c);
      return;
    } else if (o === A) {
      solve(op + ")", o, c + 1);
      return;
    } else {
      solve(op + "(", o + 1, c);
      solve(op + ")", o, c + 1);
      return;
    }
  }
  solve(op, 0, 0);
  return ans;
}
console.log(generateParenthesis(2));

//Aditya's soln
function genP(A) {
  //   let ans = [];
  let generate = function (open, close, op, ans) {
    if (open === 0 && close === 0) {
      ans.push(op);
      return;
    }
    if (open !== 0) {
      generate(open - 1, close, op + "(", ans);
    }
    if (close > open) {
      generate(open, close - 1, op + ")", ans);
    }
    return ans;
  };

  return generate(A, A, "", []);
}
console.log(genP(3));

// Fastest soln :-
function gen(A) {
  var generate = function (A, index, open, close, str, result) {
    if (close === A) {
      result.push(str.join(""));
      return;
    } else {
      if (open < A) {
        str[index] = "(";
        generate(A, index + 1, open + 1, close, str, result);
      }
      if (open > close) {
        str[index] = ")";
        generate(A, index + 1, open, close + 1, str, result);
      }
    }
    return result;
  };
  return generate(A, 0, 0, 0, [], []);
}
console.log(gen(3));
