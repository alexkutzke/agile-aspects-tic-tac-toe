import { GAME_STATUS_PLAYING, PLAYER_O, PLAYER_X } from "../constants";
import { exportedForTesting, resetGame, makePlay } from "../game";
import * as validate from "../validate";

jest.mock("../validate", () => ({
  validInput: jest.fn(),
  validPlay: jest.fn(),
  getValidInputs: jest.fn(),
}));
const mockPrompt = jest.fn();
const consoleLogSpy = jest.spyOn(console, "log").mockImplementation(() => {});

describe("convertInputToArrayIndex function", () => {
  it("should correctly convert input to array index", () => {
    expect(exportedForTesting.convertInputToArrayIndex(1)).toBe(0);
    expect(exportedForTesting.convertInputToArrayIndex(2)).toBe(1);
    expect(exportedForTesting.convertInputToArrayIndex(0)).toBe(-1);
    expect(exportedForTesting.convertInputToArrayIndex(100)).toBe(99);
  });
});

describe("resetGame function", () => {
  it("should reset game variables correctly", () => {
    global.currentPlayer = PLAYER_O;
    global.starterPlayer = PLAYER_X;
    global.board = [
      ["X", "O", "X"],
      ["O", "X", "O"],
      ["X", "O", "X"],
    ];
    global.boardPosition = { A: 3, B: 3, C: 3 };
    global.allValidInputs = { A1: false, B1: false, C1: false };
    global.gameStatus = "";

    resetGame();

    expect(global.currentPlayer).toBe(PLAYER_X);
    expect(global.starterPlayer).toBe(PLAYER_O);
    expect(global.board).toEqual([
      [" ", " ", " "],
      [" ", " ", " "],
      [" ", " ", " "],
    ]);
    expect(global.boardPosition).toEqual({ A: 1, B: 2, C: 3 });
    expect(global.allValidInputs).toEqual({
      A1: true,
      B1: true,
      C1: true,
      A2: true,
      B2: true,
      C2: true,
      A3: true,
      B3: true,
      C3: true,
    });
    expect(global.gameStatus).toBe(GAME_STATUS_PLAYING);
  });
});

describe("makePlay function", () => {
  beforeEach(() => {
    global.errorMessage = false;
    global.allValidInputs = {};
    validate.validInput.mockClear();
    validate.validPlay.mockClear();
    validate.getValidInputs.mockClear();
    consoleLogSpy.mockClear();
  });

  afterAll(() => {
    consoleLogSpy.mockRestore();
  });

  it("should make a valid play", () => {
    mockPrompt.mockReturnValueOnce("A1");

    validate.validInput.mockReturnValue(true);
    validate.validPlay.mockReturnValue(true);
    validate.getValidInputs.mockReturnValue(["A1", "A2", "A3"]);

    makePlay(mockPrompt);

    expect(global.errorMessage).toBe(false);
    expect(global.allValidInputs["A1"]).toBe(false);

    expect(console.log).toHaveBeenCalledWith(expect.stringContaining("X Turn"));
    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining("Choose which position you want to play:")
    );
  });
});
