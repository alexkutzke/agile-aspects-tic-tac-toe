import { PLAYER_X, GAME_STATUS_NEW_GAME } from "./constants.js";
export const initStore = () => {
  global.starterPlayer = PLAYER_X;
  global.currentPlayer = "";
  global.finishMessage = false;
  global.board = [];
  global.errorMessage = false;
  global.gameStatus = GAME_STATUS_NEW_GAME;
  global.boardPosition = {};
  global.allValidInputs = {};
};
