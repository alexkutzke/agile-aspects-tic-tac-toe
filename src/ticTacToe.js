// src/ticTacToe.js

export class TicTacToe {

      constructor() {
      this.currentPlayer = 'X';
      this.board = [
        [' ', ' ', ' '],
        [' ', ' ', ' '],
        [' ', ' ', ' '],
      ];
    }
  
    makeMove(row, col) {
      if (this.board[row][col] === ' ') {
        this.board[row][col] = this.currentPlayer;
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
      }
    }
    
    Valid() {
  return this.board[row][col] === ' ';
}
  //Lógica para verificar o vencedor

  checkWinner() {
    const winConditions = [
      [[0, 0], [0, 1], [0, 2]], // Linhas
      [[1, 0], [1, 1], [1, 2]],
      [[2, 0], [2, 1], [2, 2]],
      [[0, 0], [1, 0], [2, 0]], // Colunas
      [[0, 1], [1, 1], [2, 1]],
      [[0, 2], [1, 2], [2, 2]],
      [[0, 0], [1, 1], [2, 2]], // Diagonais
      [[0, 2], [1, 1], [2, 0]]
    ];

    let isDraw = true;

    for (const condition of winConditions) {
      const [a, b, c] = condition.map(([x, y]) => this.board[x][y]);

      // Verifica se há um vencedor
      if (a !== ' ' && a === b && a === c) {
        return a; // Retorna 'X' ou 'O' como vencedor
      }

      // Verifica se há células vazias, indicando que o jogo não é um empate
      if (a === ' ' || b === ' ' || c === ' ') {
        isDraw = false;
      }
    }

    if (isDraw) {
      return 'X'; // Retorna 'X' para empate
    } else {
      return null; // Retorna null se o jogo estiver em andamento ou sem resultado definido
    }
  }
}
  
  module.exports = { TicTacToe };
  