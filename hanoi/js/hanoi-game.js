class HanoiGame {
  constructor() {
    this.towers = this.generateTowers();
  }

  generateTowers() {
    return [[1, 2, 3], [], []];
  }

  move(start, end) {
    if (this.validMove(start, end)) {
      this.towers[end].unshift(this.towers[start].shift());
      return true;
    }
    return false;
  }

  validMove(start, end) {
    if (this.towers[start].length === 0) {
      return false;
    } else if (this.towers[end].length === 0) {
      return true;
    } else if (this.towers[start][0] > this.towers[end][0]){
      return false;
    } else {
      return true;
    }
  }

  isWon() {
    return (this.towers[1].length === 3 || this.towers[2].length === 3);
  }

}

module.exports = HanoiGame;
