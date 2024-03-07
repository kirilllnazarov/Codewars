function descendingOrder(n) {
  return Number(
    n
      .toString()
      .split("")
      .sort((a, b) => a - b)
      .reverse()
      .join("")
  );
}
