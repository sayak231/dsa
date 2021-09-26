function findMatchedWords(dict, n, pattern) {
  // code here
  let ans = [];
  for (let i = 0; i < n; i++) {
    const word = dict[i];
    if (word.length < pattern.length) {
      continue;
    } else if (encode(word) === encode(pattern)) {
      ans.push(word);
    }
  }
  return ans;
}
function encode(str) {
  let res = "";
  let count = 0;
  let obj = {};

  for (let i = 0; i < str.length; i++) {
    if (!obj[str[i]]) {
      obj[str[i]] = count++;
    }
    res += obj[str[i]];
  }
  return res;
}
