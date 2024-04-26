function checkExam(array1, array2) {
    let count = 0;
    
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] === array2[i]) {
        count += 4
      }
       else if (array2[i] === "") {
        count += 0
      }
     else if (array1[i] !== array2[i]) {
        count --
      }
    }

    }