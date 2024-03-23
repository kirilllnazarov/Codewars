function sameCase(a, b) {
  if (
    a.toLowerCase() == a.toUpperCase() ||
    b.toLowerCase() == b.toUpperCase()
  ) {
    return -1;
  } else if (
    (a == a.toLowerCase() && b == b.toLowerCase()) ||
    (a == a.toUpperCase() && b == b.toUpperCase())
  ) {
    return 1;
  }
  return 0;
}
