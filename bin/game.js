import {
  GAME_STATUS_FINISHED,
  GAME_STATUS_PLAYING,
  PLAYER_X,
  PLAYER_O,
  INPUT_TO_ARRAY_INDEX_CONVERT,
} from "./constants.js";
import * as validate from "./validate.js";
export const checkGameOver = () => {
  if (
    !validate.validateHorizontalAndVerticalFinish(true) &&
    !validate.validateHorizontalAndVerticalFinish(false) &&
    !validate.validateDiagonalFinish() &&
    !validate.gameHasDraw()
  ) {
    return;
  }
  global.gameStatus = GAME_STATUS_FINISHED;
};

const convertInputToArrayIndex = (input) =>
  input - INPUT_TO_ARRAY_INDEX_CONVERT;

export const resetGame = () => {
  global.currentPlayer = starterPlayer;
  global.starterPlayer = starterPlayer === PLAYER_X ? PLAYER_O : PLAYER_X;
  global.board = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "],
  ];
  global.boardPosition = {
    A: 1,
    B: 2,
    C: 3,
  };
  global.allValidInputs = {
    A1: true,
    B1: true,
    C1: true,
    A2: true,
    B2: true,
    C2: true,
    A3: true,
    B3: true,
    C3: true,
  };
  global.gameStatus = GAME_STATUS_PLAYING;
};

export const makePlay = (prompt) => {
  console.log(currentPlayer + " Turn\n");
  global.errorMessage != false && console.log(global.errorMessage + "\n");
  console.log("Valid inputs: " + validate.getValidInputs() + "\n");
  console.log("Choose which position you want to play:");
  const position = prompt("> ").toUpperCase();
  if (!validate.validInput(position) || !validate.validPlay(position)) {
    global.errorMessage = "Invalid play";
    return;
  }
  global.errorMessage = false;
  global.allValidInputs[position] = false;

  const line = convertInputToArrayIndex(global.boardPosition[position[0]]);
  const row = convertInputToArrayIndex(position[1]);
  global.board[line][row] = currentPlayer;
  currentPlayer = currentPlayer == PLAYER_X ? PLAYER_O : PLAYER_X;
};

export const exportedForTesting = {
  convertInputToArrayIndex,
};
