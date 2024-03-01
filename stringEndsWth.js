function solution(str, ending){
    const strSlice = str.slice(-ending.length)
  if (strSlice === ending || ending == '') {
    return true
  } 
    else {
      return false
    }
  }