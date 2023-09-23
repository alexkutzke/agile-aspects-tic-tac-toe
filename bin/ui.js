import { GAME_STATUS_QUIT, GAME_STATUS_NEW_GAME } from "./constants.js";

export const displayBoard = () => {
  console.log("    1   2   3");
  console.log("  ┌───┬───┬───┐");
  console.log(
    "A │ " +
      global.board[0][0] +
      " │ " +
      global.board[0][1] +
      " │ " +
      global.board[0][2] +
      " │"
  );
  console.log("  ├───┼───┼───┤");
  console.log(
    "B │ " +
      global.board[1][0] +
      " │ " +
      global.board[1][1] +
      " │ " +
      global.board[1][2] +
      " │"
  );
  console.log("  ├───┼───┼───┤");
  console.log(
    "C │ " +
      global.board[2][0] +
      " │ " +
      global.board[2][1] +
      " │ " +
      global.board[2][2] +
      " │"
  );
  console.log("  └───┴───┴───┘");
};

export const displayGameOver = (prompt) => {
  console.log(global.finishMessage + "\n");
  console.log("1 - Play again");
  console.log("2 - Quit\n");
  console.log("Choose an option:");
  const position = prompt("> ").toUpperCase();
  if (position == "1") {
    global.gameStatus = GAME_STATUS_NEW_GAME;
  } else if (position == "2") {
    global.gameStatus = GAME_STATUS_QUIT;
  }
};
