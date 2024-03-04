function findDifference(a, b) {
    return Math.abs((b.reduce((el1, el2) => el1 * el2)) - (a.reduce((el1, el2) => el1 * el2)));
  }