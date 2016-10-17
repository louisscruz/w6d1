class View {
  constructor(game, $el) {
    this.size = 3;
    this.$el = $el;
    this.game = game;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    this.$el.on("click", 'li', (event) => {
      let li = event.currentTarget;
      this.makeMove($(li));
      $(li).addClass(this.game.currentPlayer);
    });
  }

  makeMove($square) {
    let pos = $square.data('pos');
    try {
      this.game.playMove(pos);
    } catch(err) {
      alert('oh no');
    }

    if (this.game.isOver()) {
      let $text = $('<h2>');
      if (this.game.winner()) {
        $text.text(`${this.game.currentPlayer} is the winner!`);
      } else {
        $text.text('You are both losers.');
      }
      this.$el.append($text);
    }
  }

  setupBoard() {
    let $ul = $('<ul>');

    for (let i = 0; i < this.size; i++) {
      for (let j = 0; j < this.size; j++) {
        let $li = $('<li>');
        $li.data('pos', [i, j])
        $ul.append($li);
      }
    }

    this.$el.append($ul);
  }
}

module.exports = View;
