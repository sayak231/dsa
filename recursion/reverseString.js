var reverseString = function (str) {
  if (str.length === 0) {
    return;
  }
  let char = str[str.length - 1];
  str.pop();
  reverseString(str);
  str.unshift(char);
  return str;
};
