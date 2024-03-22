function sumStrings(a,b) { 
    if ( b.length > a.length ){
      var temp = a ;
      a = b ;
      b = temp ;
    }
    while ( b.length < a.length ){
      b = '0' + b ;
    }