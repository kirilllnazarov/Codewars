function countSheeps(sheep) {
    let resultSheep = 0;
      for(i = 0; i < sheep.length; i++) {
        if (sheep[i] === true) {
          resultSheep += 1;
        }
        else if ( sheep[i] === false) {
          continue;
        }
        else if (sheep[i] === null || sheep === undefined) {
          continue;
        }
        else if (sheep[i] === '') {
           continue;
        }
      }
      return resultSheep;
    }