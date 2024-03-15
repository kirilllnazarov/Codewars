function validateCode(code) {
  let el = String(code).split("");
  return +el[0] === 1 || +el[0] === 2 || +el[0] === 3;
}
