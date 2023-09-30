// src/game.js

class TicTacToe {
  constructor() {
    this.board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ];
    this.currentPlayer = 'X';
    this.winner = null;
  }

  makeMove(row, col) {
  if (this.board[row][col] === '') {
    this.board[row][col] = this.currentPlayer;
    // Alternar para o próximo jogador
    this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
  }
}


checkWin() {
  for (let i = 0; i < 3; i++) {
    if (
      this.board[i][0] === this.board[i][1] &&
      this.board[i][1] === this.board[i][2] &&
      this.board[i][0] !== ''
    ) {
      return this.board[i][0]; // Retorna o vencedor
    }
  }
  return null; // Nenhum vencedor ainda
}

isDraw() {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (this.board[i][j] === '') {
        return false; // Ainda há espaços vazios, não é empate
      }
    }
  }
  return true; // Todos os espaços estão preenchidos, é um empate
}
  
module.exports = TicTacToe;

