const Util = require('./util');
const Coord = require("./coord");
const Board = require("./board");


class Snake {
  constructor(size) {
    this.pos = Util.randomPosition(size);
    this.direction = Util.randomDirection();
    this.segments = [this.pos];
  }

  move () {
    this.pos = [this.pos.x + this.direction.x, this.pos.y + this.direction.y];
  }

  turn(newDirection) {
    this.direction = newDirection;
  }
}

module.exports = Snake;
