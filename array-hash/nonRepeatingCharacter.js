function nonrepeatingCharacter(s) {
  // code here
  let obj = {};
  for (let i = 0; i < s.length; i++) {
    if (obj[s[i]]) {
      obj[s[i]]++;
    } else {
      obj[s[i]] = 1;
    }
  }
  for (let key in obj) {
    if (obj[key] === 1) {
      return key;
    }
  }
  return -1;
}
