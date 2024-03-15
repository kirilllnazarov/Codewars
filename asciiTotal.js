function uniTotal(string) {
  let result = 0;
  let newStr = string.split("");
  for (let i = 0; i < newStr.length; i++) {
    result = result + newStr[i].charCodeAt();
  }
  return result;
}
