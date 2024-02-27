function arrayPlusArray(arr1, arr2) {
    let duo = arr1.concat(arr2)
    return duo.reduce((a,b) => a + b)
  }