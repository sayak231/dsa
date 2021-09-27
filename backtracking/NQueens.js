// 51. N-Queens

// The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.

// Given an integer n, return all distinct solutions to the n-queens puzzle. You may return the answer in any order.

// Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space, respectively.

// Example 1:

// Input: n = 4
// Output: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
// Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above

// Example 2:

// Input: n = 1
// Output: [["Q"]]

var solveNQueens = function (N) {
  let table = new Array(N);
  for (let i = 0; i < N; i++) {
    table[i] = new Array(N).fill(".");
  }

  let ans = [];

  function isValidPlace(row, col) {
    for (let i = 0; i < col; i++) {
      if (table[row][i] === "Q") {
        return false;
      }
    }

    for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
      if (table[i][j] === "Q") {
        return false;
      }
    }

    for (let i = row, j = col; i < table.length && j >= 0; i++, j--) {
      if (table[i][j] === "Q") {
        return false;
      }
    }
    return true;
  }

  function solve(colIndex) {
    if (colIndex === N) {
      let tab = JSON.parse(JSON.stringify(table));
      ans.push(tab);
      return;
    }

    for (let i = 0; i < N; i++) {
      if (isValidPlace(i, colIndex)) {
        table[i][colIndex] = "Q";
        solve(colIndex + 1);
        table[i][colIndex] = ".";
      }
    }
  }
  solve(0);
  return ans;
};

console.log(solveNQueens(100));

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 52. N-Queens II

// The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.

// Given an integer n, return the number of distinct solutions to the n-queens puzzle.

// Example 1:

// Input: n = 4
// Output: 2
// Explanation: There are two distinct solutions to the 4-queens puzzle as shown.

// Example 2:

// Input: n = 1
// Output: 1

var totalNQueens = (N, cnt = 0) => {
  let A = Array(N).fill(-1); // index is the row and value is the column of each queen
  let ok = (i, j) => {
    if (
      A[i] > -1 ||
      A.some((col) => col == j) ||
      A.some(
        (col, row, A) => col > -1 && Math.abs(row - i) == Math.abs(col - j)
      )
    )
      return false; // invalid row, col, or diag
    return true;
  };
  let dfs = (i = 0) => {
    if (i == N) {
      ++cnt;
      return;
    }
    for (let j = 0; j < N; ++j) {
      if (!ok(i, j)) continue;
      (A[i] = j), dfs(i + 1), (A[i] = -1);
    }
  };
  dfs();
  return cnt;
};
