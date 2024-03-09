function betterThanAverage(classPoints, yourPoints) {
  let classResult = 0;
  for (let i = 0; i < classPoints.length; i++) {
    classResult += classPoints[i];
  }
  let classAversge = classResult / classPoints.length;
  if (yourPoints > classAversge) {
    return true;
  }
  return false;
}
