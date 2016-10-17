require('../css/style.css');
const HanoiGame = require('./hanoi-game');
const HanoiView = require('./hanoi-view');

$( () => {
  const rootEl = $('.hanoi');
  const game = new HanoiGame();
  new HanoiView(game, rootEl);
});
