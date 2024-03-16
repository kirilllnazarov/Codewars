function mergeArrays(a, b) {
  let arrSort = a.concat(b).sort((a, b) => a - b);
  let result = [];
  for (let i = 0; i < arrSort.length; i++) {
    if (!result.includes(arrSort[i])) {
      result.push(arrSort[i]);
    }
  }
  return result;
}
