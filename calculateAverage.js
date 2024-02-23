function findAverage(array) {
    let result = 0;
    let sum = 0;
    
    for (let i=0; i < array.length; i++) {
      if (array.length === 0) {
        result = 0;
      }
      else {
        sum += array[i];
      }
        result = sum / array.length
    }
  
    
    return result;
  }

  //secind solution
  function findAverage(array) {
    if( array.length === 0){
        return 0
    }
    else {
       return array.reduce((acc, el) => acc + el) / array.length
    }
    }