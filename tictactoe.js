const readline = require('readline-sync');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let currentPlayer = 'X';
const board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

function printBoard() {
  console.log(`
   ${board[0][0]} | ${board[0][1]} | ${board[0][2]}
  ---+---+---
   ${board[1][0]} | ${board[1][1]} | ${board[1][2]}
  ---+---+---
   ${board[2][0]} | ${board[2][1]} | ${board[2][2]}
  `);
}

function checkWin() {
  for (let i = 0; i < 3; i++) {
    if (board[i][0] !== ' ' && board[i][0] === board[i][1] && board[i][0] === board[i][2]) {
      return true; //linha
    }
    if (board[0][i] !== ' ' && board[0][i] === board[1][i] && board[0][i] === board[2][i]) {
      return true; // Coluna
    }
  }
  if (board[0][0] !== ' ' && board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
    return true; // Diagonal
  }
  if (board[0][2] !== ' ' && board[0][2] === board[1][1] && board[0][2] === board[2][0]) {
    return true; // Diagonal
  }
  return false;
}

function isBoardFull() {
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      if (board[row][col] === ' ') {
        return false;
      }
    }
  }
  return true;
}

function switchPlayer() {
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function play(row, col) {
  if (row < 0 || row > 2 || col < 0 || col > 2 || board[row][col] !== ' ') {
    console.log('Movimento invalido.');
    return;
  }
  board[row][col] = currentPlayer;
  switchPlayer();
}

function startGame() {
  console.log('Tic-Tac-Toe - Jogo da Velha!');
  printBoard();

  const playTurn = () => {
    rl.question(`Jogador ${currentPlayer}, faça sua jogada (linha e coluna, e.g., 0 0): `, (input) => {
      const [row, col] = input.split(' ').map(Number);
      play(row, col);

      if (checkWin()) {
        printBoard();
        console.log(`Jogador ${currentPlayer} venceu!`);
        rl.close();
      } else if (isBoardFull()) {
        printBoard();
        console.log('Empatou!');
        rl.close();
      } else {
        printBoard();
        playTurn();
      }
    });
  };

  playTurn();
}

startGame();
