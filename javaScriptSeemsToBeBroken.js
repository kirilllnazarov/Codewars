function semicolonSeparationToCommaSeparation(input) {
  let str = "";
  for (let i = 0; i < input.length; i++) {
    if (Number(input[i])) {
      str += input[i] + ",";
    }
  }
  return str.slice(0, -1);
}
