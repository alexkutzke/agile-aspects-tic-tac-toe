import readline from "readline-sync";

let board = [
  [" ", " ", " "],
  [" ", " ", " "],
  [" ", " ", " "],
];

function displayBoard() {
  console.log("Current Board:");
  for (let row of board) {
    console.log(row.join(" | "));
  }
}

function checkWin(player) {
  for (let i = 0; i < 3; i++) {
    if (
      (board[i][0] === player &&
        board[i][1] === player &&
        board[i][2] === player) ||
      (board[0][i] === player &&
        board[1][i] === player &&
        board[2][i] === player)
    ) {
      return true;
    }
  }

  if (
    (board[0][0] === player &&
      board[1][1] === player &&
      board[2][2] === player) ||
    (board[0][2] === player && board[1][1] === player && board[2][0] === player)
  ) {
    return true;
  }

  return false;
}

function playGame() {
  let currentPlayer = "X";
  let moves = 0;

  console.log("Welcome to Tic Tac Toe!\n");

  while (true) {
    displayBoard();

    const row = parseInt(
      readline.question(`${currentPlayer}'s turn. Enter row (0-2): `)
    );
    const col = parseInt(
      readline.question(`${currentPlayer}'s turn. Enter column (0-2): `)
    );

    if (
      row >= 0 &&
      row <= 2 &&
      col >= 0 &&
      col <= 2 &&
      board[row][col] === " "
    ) {
      board[row][col] = currentPlayer;
      moves++;

      if (checkWin(currentPlayer)) {
        displayBoard();
        console.log(`${currentPlayer} wins!`);
        break;
      }

      if (moves === 9) {
        displayBoard();
        console.log("It's a draw!");
        break;
      }

      currentPlayer = currentPlayer === "X" ? "O" : "X";
    } else {
      console.log("Invalid move. Try again.");
    }
  }
}

playGame();
