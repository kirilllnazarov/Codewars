function array(arr) {
  arr = arr.split(",");
  arr.shift();
  arr.pop();
  arr = arr.toString().replace(/,/g, " ");
  return arr.length < 1 ? null : arr;
}
