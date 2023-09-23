import {
  PLAYER_X,
  PLAYER_O,
  DRAW_TEXT,
  CIRCLE_WIN_TEXT,
  CROSS_WIN_TEXT,
  ALL_CIRCLE_SUM,
  ALL_CROSS_SUM,
  CIRCLE_VALUE,
  CROSS_VALUE,
} from "./constants.js";

export const validInput = (input) => {
  var pattern = /^[a-cA-C][1-3]$/;
  return pattern.test(input);
};

export const getValidInputs = () => {
  const validInputKeys = Object.keys(allValidInputs).filter(
    (key) => allValidInputs[key]
  );
  return validInputKeys.join(" | ");
};

export const validPlay = (position) => {
  return global.allValidInputs[position] === true;
};

export const gameHasDraw = () => {
  const allInputsAreFalse = Object.values(global.allValidInputs).every(
    (value) => !value
  );

  if (allInputsAreFalse) {
    global.finishMessage = DRAW_TEXT;
  }

  return allInputsAreFalse;
};

export const validateDiagonalFinish = () => {
  const topLeftToBottomRight =
    global.board[0][0] === global.board[1][1] &&
    global.board[1][1] === global.board[2][2];
  const topRightToBottomLeft =
    global.board[2][0] === global.board[1][1] &&
    global.board[1][1] === global.board[0][2];

  return (
    (topLeftToBottomRight || topRightToBottomLeft) &&
    crossOrCircleWin(global.board[1][1])
  );
};

const crossOrCircleWin = (block) => {
  if (block === PLAYER_X) {
    global.finishMessage = CROSS_WIN_TEXT;
    return true;
  } else if (block === PLAYER_O) {
    global.finishMessage = CIRCLE_WIN_TEXT;
    return true;
  }
  return false;
};

export const validateHorizontalAndVerticalFinish = (horizontal) => {
  for (var column = 0; column < 3; column++) {
    var colSum = 0;
    for (var row = 0; row < 3; row++) {
      const positionToValidate = horizontal
        ? global.board[column][row]
        : global.board[row][column];
      if (positionToValidate == " ") {
        break;
      }
      colSum += positionToValidate == PLAYER_O ? CIRCLE_VALUE : CROSS_VALUE;
    }
    if (colSum === ALL_CIRCLE_SUM) {
      global.finishMessage = CIRCLE_WIN_TEXT;
      return true;
    } else if (colSum === ALL_CROSS_SUM) {
      global.finishMessage = CROSS_WIN_TEXT;
      return true;
    }
  }
  return false;
};

export const exportedForTesting = {
  crossOrCircleWin,
};
