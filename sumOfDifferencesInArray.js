function sumOfDifferences(arr) {
  return arr.length <= 1 ? 0 : Math.max(...arr) - Math.min(...arr);
}

// second solution
sumOfDifferences = (arr) =>
  arr.length <= 1 ? 0 : Math.max(...arr) - Math.min(...arr);
