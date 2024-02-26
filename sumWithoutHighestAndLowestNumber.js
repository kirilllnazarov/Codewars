function sumArray(array) {
    if (array == null || array < 2) {
      return 0
    }
      let minMax = array.sort((a,b) => a - b);
  let result = 0;
    for (let i = 1; i < minMax.length -1; i++){
      result += array[i]
    }
    return result;
  }