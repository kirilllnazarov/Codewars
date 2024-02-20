var summation = function (num) {
    let result = 0;
      for (let i = 0; i <= num; i ++) {
        result += i;
      }
      return result;
    }

    //second solution
    const summation = num => (1 + num) * num / 2;