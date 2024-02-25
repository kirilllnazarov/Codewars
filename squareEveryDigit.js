function squareDigits(num){
    let str = num.toString().split('').map(i => i ** 2).join('')
    return +str
  }