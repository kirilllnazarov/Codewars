function removeChar(str){
    //You got this!
   let result = '';
     for (i = 1; i < str.length-1; i++) {
       result = result + str[i]
       }
     return result;
   };
   
console.log(removeChar('Hello world!'));