function basicOp(operation, value1, value2)
{
  if (operation === '+') {
      return value1 + value2;
    } 
  else if(operation === '-') {
      return value1 - value2;
    }  
  else if(operation === '*') {
      return value1 * value2;
    } 
  else if(operation === '/'){
      return value1/value2;
    }
  }

// second solution
function basicOp(operation, value1, value2) {
    switch (operation) {
    case '+':
    return value1 + value2;
    case '-':
    return value1 - value2;
    case '*':
    return value1 * value2;
    case '/':
    return value1 / value2;
    default:
    return 'Please input correct operator';
    }
    }