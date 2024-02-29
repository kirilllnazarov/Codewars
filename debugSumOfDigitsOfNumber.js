function getSumOfDigits(integer) {
    let num = Number(integer).toString().split('');
    return num.map((element) => Number(element)).reduce((a,b) => a+b, 0);
  }