function sumStrings(a,b) { 
    if ( b.length > a.length ){
      var temp = a ;
      a = b ;
      b = temp ;
    }
    while ( b.length < a.length ){
      b = '0' + b ;
    }
    a = a.split('').reverse().join('');
    b = b.split('').reverse().join('');
    var c = '' , i = 0 ;
    var carry = 0 ;
    for ( var i = 0 ; i < a.length ; i ++ ) {
      var result = parseInt(a[i]) + parseInt(b[i]) + carry ;
      carry = 0 ;
      if ( result >= 10 ){
        result -= 10 ;
        carry ++ ;
      }