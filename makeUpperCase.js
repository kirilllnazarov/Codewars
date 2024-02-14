function makeUpperCase(str) {
    // Code here
    let result = '';
    for (i = 0; i < str.length; i++) {
      result = result + str[i].toUpperCase();
    }
    return result;
  }