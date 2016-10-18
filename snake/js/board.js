const Snake = require('./snake');

class Board {
  constructor() {
    this.size = [$(window).width(), $(window).height()];
    this.snake = new Snake(this.size);
  }

  setSize(size) {
    this.size = size;
  }
  render() {
    
  }

}
module.exports = Board;
