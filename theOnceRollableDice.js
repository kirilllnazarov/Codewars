function Character(name, opness) {
  this.name = name;
  this.opness = opness;
  this.attack = function () {
    return this.opness + ~~(Math.random() * 20) + 1;
  };
}
