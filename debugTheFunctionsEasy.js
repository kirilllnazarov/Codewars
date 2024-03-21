function multi(arr) {
  return arr.reduce((acc, i) => acc * i, 1);
}
function add(arr) {
  return arr.reduce((acc, i) => acc + i);
}
function reverse(str) {
  return str.split("").reverse().join("");
}
