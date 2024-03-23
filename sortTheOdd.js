function sortArray(array) {
  let arrayOdd = array.filter((el) => el % 2 !== 0).sort((a, b) => a - b);
  return array.map((el) => (el % 2 !== 0 ? arrayOdd.shift() : el));
}
