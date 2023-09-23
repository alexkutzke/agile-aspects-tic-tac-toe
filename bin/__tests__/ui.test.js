import { displayBoard, displayGameOver } from "../ui";
import { GAME_STATUS_QUIT, GAME_STATUS_NEW_GAME } from "../constants.js";

const consoleLogSpy = jest.spyOn(console, "log").mockImplementation(() => {});

describe("displayGameOver function", () => {
  const mockPrompt = jest.fn();

  beforeEach(() => {
    global.gameStatus = "";
    consoleLogSpy.mockClear();
  });

  afterAll(() => {
    consoleLogSpy.mockRestore();
  });

  it('should set gameStatus to GAME_STATUS_NEW_GAME when prompt returns "1"', () => {
    mockPrompt.mockReturnValueOnce("1");

    displayGameOver(mockPrompt);

    expect(consoleLogSpy).toHaveBeenCalledTimes(4);
    expect(consoleLogSpy).toHaveBeenCalledWith("1 - Play again");
    expect(consoleLogSpy).toHaveBeenCalledWith("2 - Quit\n");
    expect(consoleLogSpy).toHaveBeenCalledWith("Choose an option:");
    expect(global.gameStatus).toBe(GAME_STATUS_NEW_GAME);
  });

  it('should set gameStatus to GAME_STATUS_QUIT when prompt returns "2"', () => {
    mockPrompt.mockReturnValueOnce("2");

    displayGameOver(mockPrompt);

    expect(consoleLogSpy).toHaveBeenCalledTimes(4);
    expect(consoleLogSpy).toHaveBeenCalledWith("1 - Play again");
    expect(consoleLogSpy).toHaveBeenCalledWith("2 - Quit\n");
    expect(consoleLogSpy).toHaveBeenCalledWith("Choose an option:");
    expect(global.gameStatus).toBe(GAME_STATUS_QUIT);
  });
  it("should not set gameStatus when prompt returns something different than 1 or 2", () => {
    mockPrompt.mockReturnValueOnce("3");

    displayGameOver(mockPrompt);

    expect(consoleLogSpy).toHaveBeenCalledTimes(4);
    expect(consoleLogSpy).toHaveBeenCalledWith("1 - Play again");
    expect(consoleLogSpy).toHaveBeenCalledWith("2 - Quit\n");
    expect(consoleLogSpy).toHaveBeenCalledWith("Choose an option:");
    expect(global.gameStatus).toBe("");
  });
});
describe("displayBoard function", () => {
  beforeEach(() => {
    consoleLogSpy.mockClear();
  });

  afterAll(() => {
    consoleLogSpy.mockRestore();
  });

  test.concurrent("should print the board layout to the console", () => {
    global.board = [
      ["X", "O", "X"],
      [" ", "X", "O"],
      ["O", "X", " "],
    ];

    displayBoard();

    const expectedOutput = [
      "    1   2   3",
      "  ┌───┬───┬───┐",
      "A │ X │ O │ X │",
      "  ├───┼───┼───┤",
      "B │   │ X │ O │",
      "  ├───┼───┼───┤",
      "C │ O │ X │   │",
      "  └───┴───┴───┘",
    ];

    expectedOutput.forEach((line, index) => {
      expect(consoleLogSpy).toHaveBeenCalledWith(line);
    });
  });
});
