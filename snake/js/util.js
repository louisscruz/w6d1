const Coord = require('./coord');

const DIRECTION = [[1,0], [-1,0], [0,1], [0,-1]];
class Util {
  static randomPosition(size) {
    const width = size[0] / 30;
    const verticalCellNum = Math.floor(size[1] / width);
    const x = Math.floor(Math.random() * 30);
    const y = Math.floor(Math.random() * verticalCellNum);
    console.log(x,y);
    return [x,y];
  }

  static randomDirection() {
    let ind = Math.floor(Math.random() * 3);
    return DIRECTION[ind];
  }
}


module.exports = Util;
