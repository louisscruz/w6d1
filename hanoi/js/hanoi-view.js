class HanoiView {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupTowers();
    this.start = null;
    this.end = null;
    $("ul").on("click",this.clickTower.bind(this));
  }

  clickTower(event) {
    console.log(event);
    let target = $(event.currentTarget);
    console.log(this.game.towers);
    if (this.start !== null) {
      if (target.data('index') === this.start) {
        alert('invalid move');
      } else {
        this.end = +(target.data('index'));
        this.makeMove();
        this.start = null;
        this.end = null;
      }
    } else {
      this.start = +(target.data('index'));
    }
  }

  setupTowers() {
    this.game.towers.forEach((tower, index) => {
      let $ul = $('<ul>');
      $ul.data('index', index);
      for(let i = 0; i < 3; i++) {
        let $li = $('<li>');
        if (tower[i]) {
          $li.addClass(`disc disc-${tower[i]}`);
        }
        $ul.append($li);
      }
      this.$el.append($ul);
    });
  }

  makeMove() {
    if (!this.game.move(this.start, this.end)) {
      alert('invalid move');
    } else {
      this.render();
      if (this.game.isWon()) {
        let $h2 = $("<h2>");
        $h2.text("Congra! You Win!");
        this.$el.prepend($h2);
      }
    }
  }

  render() {
    // $('ul').remove();
    // this.game.towers.forEach((tower, index) => {
    //   let $ul = $('<ul>');
    //   $ul.data('index', index);
    //   for(let i = 0; i < 3; i++) {
    //     let $li = $('<li>');
    //     if (tower[i]) {
    //       $li.addClass(`disc disc-${tower[i]}`);
    //     }
    //     $ul.append($li);
    //   }
    //   this.$el.append($ul);
    // });
    let $uls = $('ul');
    $uls.each((towerIndex, ul) => {
      $(ul).children().each((listIndex, li) => {
        console.log(li);
        let disc = this.game.towers[towerIndex][listIndex];
        if (disc) {
          $(li).attr('class', `disc disc-${disc}`);
        } else {
          $(li).attr('class', "");
        }
      });
    });

  }
}

module.exports = HanoiView;
