function isValidWalk(walk) {
  let x = 0;
  let y = 0;
  let train = walk.length;
  for (let i = 0; i < walk.length; i++) {
    switch (walk[i]) {
      case "n":
        y--;
        break;
      case "s":
        y++;
        break;
      case "w":
        x--;
        break;
      case "e":
        x++;
        break;
    }
  }
  return x === 0 && y === 0 && train === 10;
}
