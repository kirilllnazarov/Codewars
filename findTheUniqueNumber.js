function findUniq(arr) {
    return +arr.filter(function(el) {return arr.indexOf(el) == arr.lastIndexOf(el)});
  }