function digitize(n){
    return (n + '').split('').map(Number).reverse();
  }