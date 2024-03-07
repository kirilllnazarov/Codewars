function findOutlier(integers) {
  let even = integers.filter((el) => el % 2 == 0);
  let odd = integers.filter((el) => el % 2 !== 0);
  return even.length == 1 ? even[0] : odd[0];
}
