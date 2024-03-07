var uniqueInOrder = function (iterable) {
  let result = [];
  for (let i = 0; i < iterable.length; i++) {
    if (iterable[i] !== iterable[i + 1]) {
      result.push(iterable[i]);
    }
  }
  return result;
};

//second solution
var uniqueInOrder = function (iterable) {
  if (typeof iterable === "string")
    return iterable.split("").filter((v, i, arr) => arr[i] != arr[i + 1]);
  return iterable.filter((v, i, arr) => arr[i] != arr[i + 1]);
};
