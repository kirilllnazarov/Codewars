function abbrevName(name){
    let upperName = name.toUpperCase();
    let upperAbbrev = upperName.split(' ');
    
    return `${upperAbbrev[0].slice(0, 1)}.${upperAbbrev[1].slice(0, 1)}`
    }
    
// function abbrevName(name){
//     let nameArr = name.split(' ');
//     return (`${nameArr[0][0]}.${nameArr[1][0]}`).toUpperCase();
//     }