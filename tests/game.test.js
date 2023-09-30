// tests/game.test.js
const TicTacToe = require('../src/game');

describe('TicTacToe', () => {
  it('deve criar um novo jogo vazio', () => {
    const game = new TicTacToe();
    expect(game.board).toEqual([
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ]);
    expect(game.currentPlayer).toBe('X');
    expect(game.winner).toBe(null);
    expect(game.isDraw()).toBe(false);
  });
});

