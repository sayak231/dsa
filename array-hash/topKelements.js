function topK(arr, k) {
  // code here
  let mp = new Map();

  // Put count of all the
  // distinct elements in Map
  // with element as the key &
  // count as the value.
  for (let i = 0; i < arr.length; i++) {
    // Get the count for the
    // element if already present in the
    // Map or get the default value which is 0.

    if (mp.has(arr[i])) {
      mp.set(arr[i], mp.get(arr[i]) + 1);
    } else {
      mp.set(arr[i], 1);
    }
  }

  // Create a list from elements of HashMap
  let list = [...mp];

  // Sort the list
  list.sort((o1, o2) => {
    if (o1[1] == o2[1]) return o2[0] - o1[0];
    else return o2[1] - o1[1];
  });
  let ans = [];
  for (let i = 0; i < k; i++) {
    ans.push(list[i][0]);
  }
  return ans;
}
console.log(topK([1, 1, 2, 2, 3, 3, 3, 4], 2));
