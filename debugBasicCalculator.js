function calculate(a, o, b) {
  if (o === "+") return a + b;
  if (o === "-") return a - b;
  if (o === "/") return b !== 0 ? a / b : null;
  if (o === "*") return a * b;
  return null;
}
