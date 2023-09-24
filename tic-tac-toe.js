const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const PLAYER_X = 'X';
const PLAYER_O = 'O';

const rlWrapper = {
  askQuestion(question, callback) {
    rl.question(question, callback);
  },
  closeRL() {
    rl.close();
  },
};

function playGame(board) {
  printBoard(board);
  getPlayerMove(board);
}

function initializeBoard() {
  return ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
}

function printBoard(board) {
  console.log(`\n ${board[0]} | ${board[1]} | ${board[2]}`);
  console.log('---+---+---');
  console.log(` ${board[3]} | ${board[4]} | ${board[5]}`);
  console.log('---+---+---');
  console.log(` ${board[6]} | ${board[7]} | ${board[8]}`);
}

function getPlayerMove(board) {
  rlWrapper.askQuestion(`\nJogador ${currentPlayer}, escolha uma posição para marcar: `, (input) => {
    const position = parseInt(input) - 1;

    if (validateMove(board, position)) {
      markBoard(board, position);

      const tie = checkTie(board);
      const winner = checkWinner(board);

      if (tie || winner) {
        printBoard(board);
        if (tie) {
          console.log('\n-> Poxa, o jogo terminou em empate!\n');
        } else {
          console.log(`\n-> Parabéns, Jogador ${winner}! Você venceu!\n`);
        }
        rlWrapper.closeRL();
      } else {
        currentPlayer = switchPlayer(currentPlayer);
        playGame(board);
      }

    } else {
      console.log('Posição inválida! Tente novamente.');
      playGame(board);
    }
  });
}

function validateMove(board, position) {
  return position >= 0 && position < 9 && !isNaN(position) && board[position] !== 'X' && board[position] !== 'O'
}

function markBoard(board, position) {
  board[position] = currentPlayer;
}

function checkTie(board) {
  return board.every(cell => cell === PLAYER_X || cell === PLAYER_O);
}

function checkWinner(board) {
  const winCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  for (const combination of winCombinations) {
    const [a, b, c] = combination;
    if (board[a] === board[b] && board[b] === board[c]) {
      return board[a];
    }
  }

  return null;
}

function switchPlayer(currentPlayer) {
  return currentPlayer === PLAYER_X ? PLAYER_O : PLAYER_X;
}

let gameBoard = initializeBoard();
let currentPlayer = PLAYER_X;

console.log('\nBem-vindo(a) ao Jogo da Velha!');
playGame(gameBoard);

module.exports = {
  playGame,
  initializeBoard,
  printBoard,
  getPlayerMove,
  validateMove,
  markBoard,
  checkTie,
  checkWinner,
  switchPlayer,
  rlWrapper
};