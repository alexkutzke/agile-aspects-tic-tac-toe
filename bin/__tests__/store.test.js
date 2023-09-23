import { initStore } from "../store";
import { PLAYER_X, GAME_STATUS_NEW_GAME } from "../constants.js";

describe("initStore function", () => {
  beforeEach(() => {
    global.starterPlayer = undefined;
    global.currentPlayer = undefined;
    global.finishMessage = undefined;
    global.board = undefined;
    global.errorMessage = undefined;
    global.gameStatus = undefined;
    global.boardPosition = undefined;
    global.allValidInputs = undefined;
  });

  it("should initialize global variables correctly", () => {
    initStore();

    expect(global.starterPlayer).toBe(PLAYER_X);
    expect(global.currentPlayer).toBe("");
    expect(global.finishMessage).toBe(false);
    expect(global.board).toEqual([]);
    expect(global.errorMessage).toBe(false);
    expect(global.gameStatus).toBe(GAME_STATUS_NEW_GAME);
    expect(global.boardPosition).toEqual({});
    expect(global.allValidInputs).toEqual({});
  });
});
