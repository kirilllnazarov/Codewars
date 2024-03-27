function first(arr, n = 1) {
  if (n == 0) {
    return [];
  } else if (n > 0) {
    return arr.slice(0, n);
  }
}

//second solution
function first(arr, n) {
  let result = [];
  if (n === undefined) {
    result.push(arr[0]);
  } else if (n > arr.length) {
    return arr;
  }
  for (let i = 0; i < n; i++) {
    result.push(arr[i]);
  }
  return result;
}
