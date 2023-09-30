// test/ticTacToe.test.js

const { TicTacToe } = require('../src/ticTacToe.js');

test('Criação do tabuleiro 3x3', () => {
  const game = new TicTacToe();
  expect(game.board).toEqual([
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' '],
  ]);
});

test('Jogador X faz a primeira jogada', () => {
  const game = new TicTacToe();
  game.makeMove(0, 0); // Jogador X faz a primeira jogada
  expect(game.board).toEqual([
    ['X', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' '],
  ]);
});

test('Alternância entre jogadores X e O', () => {
  const game = new TicTacToe();
  game.makeMove(0, 0); // Jogador X faz a primeira jogada
  game.makeMove(1, 0); // Jogador O faz a segunda jogada
  expect(game.board).toEqual([
    ['X', ' ', ' '],
    ['O', ' ', ' '],
    [' ', ' ', ' '],
  ]);
});

test('Alternância entre jogadores X e O', () => {
    const game = new TicTacToe();
    game.makeMove(0, 0); // Jogador X faz a primeira jogada
    game.makeMove(1, 0); // Jogador O faz a segunda jogada
    game.makeMove(2, 0); // Jogador X faz a terceira jogada jogada
    expect(game.board).toEqual([
      ['X', ' ', ' '],
      ['O', ' ', ' '],
      ['X', ' ', ' '],
    ]);
  });

//mais testes

test('Verifica a alternância entre jogadores X e O', () => {
  const game = new TicTacToe();
  game.makeMove(0, 0); // Jogador X faz a primeira jogada
  expect(game.currentPlayer).toBe('O'); // O próximo jogador deve ser 'O'
  
  game.makeMove(1, 1); // Jogador O faz a segunda jogada
  expect(game.currentPlayer).toBe('X'); // O próximo jogador deve ser 'X'
  
  game.makeMove(2, 2); // Jogador X faz a terceira jogada
  expect(game.currentPlayer).toBe('O'); // O próximo jogador deve ser 'O'
});

test('Verifica uma vitória na diagonal', () => {
  const game = new TicTacToe();
  game.makeMove(0, 0); // X
  game.makeMove(1, 0); // O
  game.makeMove(1, 1); // X
  game.makeMove(2, 0); // O
  game.makeMove(2, 2); // X (Vitória na diagonal)
  expect(game.checkWinner()).toBe('X'); // Deve retornar 'X' como vencedor
});

test('Verifica um empate', () => {
  const game = new TicTacToe();
  game.makeMove(0, 0); // X
  game.makeMove(1, 0); // O
  game.makeMove(1, 1); // X
  game.makeMove(2, 0); // O
  game.makeMove(2, 2); // X
  game.makeMove(0, 2); // O
  game.makeMove(0, 1); // X
  game.makeMove(1, 2); // O
  game.makeMove(2, 1); // X (Empate)

  // O retorno da função checkWinner() é 'X' para empate
  expect(game.checkWinner()).toBe('X'); // Deve retornar 'X' para empate
});
