let arr = [2, 5, 4, 8, 7, 6, 9, 19, 34, 22, 45, 67, 89, 76, 1];

function sortRecursion() {
  if (arr.length === 1) return;

  let temp = arr[arr.length - 1];
  arr.pop();
  sortRecursion();
  //   recursiveInsert(temp);
  iterativeInsert(temp);
}

function iterativeInsert(key) {
  let i;
  for (i = arr.length - 1; i >= 0 && arr[i] > key; i--) {
    arr[i + 1] = arr[i];
  }
  arr[i + 1] = key;
}

function recursiveInsert(temp) {
  if (arr.length === 0 || arr[arr.length - 1] <= temp) {
    arr.push(temp);
    return;
  }
  let val = arr[arr.length - 1];
  arr.pop();
  insert(temp);
  arr.push(val);
  return;
}
sortRecursion();
console.log(arr);
