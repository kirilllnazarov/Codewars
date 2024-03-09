function cubeChecker(volume, side) {
  return volume > 0 && side > 0 ? volume == side ** 3 : false;
}
