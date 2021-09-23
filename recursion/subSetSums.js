function subsetSums(arr) {
  //code here
  let ans = [];
  function subset(ip, op) {
    if (ip.length === 0) {
      ans.push(op);
      return;
    }
    subset(ip.slice(1), op + ip[0]);
    subset(ip.slice(1), op);
  }
  subset(arr, 0);
  ans.sort((a, b) => a - b);
  return ans;
}
console.log(subsetSums([2, 5, 8, 11, 13]));
