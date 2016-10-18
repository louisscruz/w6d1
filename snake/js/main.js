require('../css/style.css');
const View = require("./snake-view");
const Board = require('./board');


$(() => {
  const board = new Board();
  const view = new View(board, $('.snake'));
});
