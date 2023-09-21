const readlineSync = require("readline-sync");

const gameBoard = {
  1: " ",
  2: " ",
  3: " ",
  4: " ",
  5: " ",
  6: " ",
  7: " ",
  8: " ",
  9: " ",
};

const winPatterns = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

function updateBoard(position, symbol) {
  gameBoard[position] = symbol.toUpperCase();
}

function displayBoard() {
  console.log(
    "\n" +
      " " +
      gameBoard[1] +
      " | " +
      gameBoard[2] +
      " | " +
      gameBoard[3] +
      "\n" +
      " " +
      gameBoard[4] +
      " | " +
      gameBoard[5] +
      " | " +
      gameBoard[6] +
      "\n" +
      " " +
      gameBoard[7] +
      " | " +
      gameBoard[8] +
      " | " +
      gameBoard[9] +
      "\n"
  );
}

function isWholeNumber(value) {
  let parsedValue;
  if (isNaN(value)) {
    return false;
  }
  parsedValue = parseFloat(value);
  return (parsedValue | 0) === parsedValue;
}

function isValidMove(position) {
  return isWholeNumber(position) && gameBoard[position] === " ";
}

function checkWinner(player) {
  let patternIndex, boardIndex, markCount;

  for (patternIndex = 0; patternIndex < winPatterns.length; patternIndex++) {
    markCount = 0;
    for (
      boardIndex = 0;
      boardIndex < winPatterns[patternIndex].length;
      boardIndex++
    ) {
      if (gameBoard[winPatterns[patternIndex][boardIndex]] === player) {
        markCount++;
      }
      if (markCount === 3) {
        return true;
      }
    }
  }
  return false;
}

function checkTie() {
  for (let index = 1; index <= Object.keys(gameBoard).length; index++) {
    if (gameBoard[index] === " ") {
      return false;
    }
  }
  return true;
}

function switchPlayer(player) {
  return player === "X" ? "O" : "X";
}

function playTicTacToe(player) {
  console.log("Player " + player + ", it's your turn.");
  const position = readlineSync.question("Enter a position: ");

  if (isValidMove(position) === true) {
    updateBoard(position, player);
    displayBoard();
    if (checkWinner(player) === true) {
      console.log("Winner: Player " + player);
      return;
    }
    if (checkTie() === true) {
      console.log("It's a Tie!");
      return;
    }
    const nextPlayer = switchPlayer(player);
    playTicTacToe(nextPlayer);
  } else {
    console.log("Incorrect input... Please try again");
    playTicTacToe(player);
  }
}

console.log(
  "Let's play Tic-Tac-Toe! Board layout: \n" +
    " 1 | 2 | 3 \n" +
    " 4 | 5 | 6 \n" +
    " 7 | 8 | 9 \n"
);

playTicTacToe("X");
