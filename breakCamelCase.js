function solution(string) {
  string = string.split("").map(function (el) {
    if (el === el.toUpperCase()) {
      el = ` ${el}`;
    }
    return el;
  });
  return string.join("");
}

//second solution
function solution(string) {
  return string.replace(/([A-Z])/g, " $1");
}
