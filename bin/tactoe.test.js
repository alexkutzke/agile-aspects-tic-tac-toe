const playGame = require("./index");

describe("Tic Tac Toe Game", () => {
  beforeEach(() => {
    board = [
      [" ", " ", " "],
      [" ", " ", " "],
      [" ", " ", " "],
    ];
  });

  it("should declare X as the winner when X wins", () => {
    const questions = ["0", "0", "0", "1", "1", "0", "1", "1", "2"];

    const readlineMock = jest.spyOn(require("readline-sync"), "question");
    readlineMock.mockImplementation(() => questions.shift());

    playGame();

    expect(console.log).toHaveBeenCalledWith("X wins!");
  });

  it("should declare O as the winner when O wins", () => {
    const questions = ["0", "0", "1", "0", "1", "1", "2", "0", "2"];

    const readlineMock = jest.spyOn(require("readline-sync"), "question");
    readlineMock.mockImplementation(() => questions.shift());

    playGame();

    expect(console.log).toHaveBeenCalledWith("O wins!");
  });

  it("should declare a draw when there is no winner", () => {
    const questions = [
      "0",
      "0",
      "1",
      "0",
      "1",
      "1",
      "2",
      "0",
      "2",
      "1",
      "2",
      "1",
      "0",
      "2",
      "2",
      "2",
      "1",
    ];

    const readlineMock = jest.spyOn(require("readline-sync"), "question");
    readlineMock.mockImplementation(() => questions.shift());

    playGame();

    expect(console.log).toHaveBeenCalledWith("It's a draw!");
  });
});
