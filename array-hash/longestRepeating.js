// Find out the Longest Repeating Series of numbers from an array

var array = [2, 1, 1, 2, 3, 3, 2, 2, 2, 1];

var res = array
  .reduce(function (a, c) {
    if (a.length && a[a.length - 1][0] === c) {
      a[a.length - 1].push(c);
      console.log(a);
    } else {
      a.push([c]);
      console.log(a);
    }
    return a;
  }, [])
  .reduce(function (a, c) {
    return c.length > a.length ? c : a;
  });

console.log("Sequence length=", res.length);
console.log("Value=", res[0]);
