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
const queue = [];

function bfs(G, start, n) {
  console.log(start + ", ");
  visited[start] = 1;
  queue.push(start);

  while (queue.length !== 0) {
    start = queue.pop();
    for (let j = 1; j < n; j++) {
      if (G[start][j] === 1 && visited[j] !== 1) {
        console.log(j + ", ");
        visited[j] = 1;
        queue.push(j);
      }
    }
  }
}
bfs(G, 3, 7);
