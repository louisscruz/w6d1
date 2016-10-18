const Board = require("./board");
const Coord = require('./coord');

const UP = 38;
const DOWN = 40;
const RIGHT = 39;
const LEFT = 37;
const keyCodes = {
  37: new Coord(-1, 0),
  38: new Coord(0, 1),
  39: new Coord(1, 0),
  40: new Coord(0, -1)

};

class View {
  constructor (board, $el) {
    this.$el = $el;
    this.board = board;
    $("body").on("keydown", this.handleKeyDown.bind(this));
    $(window).on('resize', this.handleResize.bind(this));
    this.setupBoard();
    setInterval(this.step.bind(this), 500);
  }

  handleKeyDown (event) {
    let code = event.keyCode;
    let coord = keyCodes[code];
    if (coord) {
      this.board.snake.turn(coord);
    }
  }

  handleResize(event) {
    // console.log(window.innerWidth);
    this.board.setSize([window.innerWidth, window.innerHeight]);
    // console.log(this.board.size);
    this.setupBoard();
  }

  step() {
    this.board.snake.move();
    this.render();
  }

  render () {
    const $uls = $("ul");
    $uls.each((index, ul) => {
      $(ul).children().each((index, li) => {
        // console.log(`${$(li).data("pos")}`);
        if ($(li).data("pos") === this.board.snake.pos) {
            $(li).css("background-color", "white");
        }
      });
    });
  }

  setupBoard() {
    $("ul").remove();
    const width = this.board.size[0] / 30;
    const verticalCellNum = Math.floor(this.board.size[1] / width);
    for (let j = 0; j < verticalCellNum; j++) {
      let $ul = $('<ul>');
      for (let i = 0; i < 30; i++) {
        let $li = $('<li>');
        $li.attr("style", `height: ${width}px; width: ${width}px;`);
        $li.data("pos", [j,i]);
        $ul.append($li);
      }
      this.$el.append($ul);
    }
  }

}

module.exports = View;
