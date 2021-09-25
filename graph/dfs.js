const G = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 0, 0],
  [0, 0, 1, 1, 0, 1, 1],
  [0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 1, 0, 0],
];
const visited = [0, 0, 0, 0, 0, 0, 0];

function dfs(G, start, n) {
  if (visited[start] === 0) {
    console.log(start + ", ");
    visited[start] = 1;

    for (let j = 1; j < n; j++) {
      if (G[start][j] === 1 && visited[j] !== 1) {
        dfs(G, j, n);
      }
    }
  }
}
dfs(G, 6, 7);
