import {
  validInput,
  validPlay,
  getValidInputs,
  gameHasDraw,
  validateDiagonalFinish,
  validateHorizontalAndVerticalFinish,
  exportedForTesting,
} from "../validate";

import {
  CROSS_WIN_TEXT,
  CIRCLE_WIN_TEXT,
  DRAW_TEXT,
  PLAYER_O,
  PLAYER_X,
} from "../constants";

describe("validInput function", () => {
  test("Should return true for valid inputs", () => {
    expect(validInput("a1")).toBe(true);
    expect(validInput("A2")).toBe(true);
    expect(validInput("b3")).toBe(true);
    expect(validInput("C1")).toBe(true);
  });

  test("Should return false for invalid inputs", () => {
    expect(validInput("d1")).toBe(false);
    expect(validInput("A4")).toBe(false);
    expect(validInput("b0")).toBe(false);
    expect(validInput("C4")).toBe(false);
    expect(validInput("1a")).toBe(false);
    expect(validInput("a")).toBe(false);
    expect(validInput("a33")).toBe(false);
  });
});

describe("getValidInputs function", () => {
  beforeAll(() => {
    global.allValidInputs = {
      A1: true,
      A2: false,
      C3: true,
    };
  });

  afterAll(() => {
    delete global.allValidInputs;
  });

  test('Should return a string with valid inputs separated by " | "', () => {
    expect(getValidInputs()).toBe("A1 | C3");
  });

  test("Should return an empty string when there are no valid inputs", () => {
    global.allValidInputs = {};
    expect(getValidInputs()).toBe("");
  });

  test("Should return all valid inputs when all inputs are valid", () => {
    global.allValidInputs = {
      A1: true,
      A2: true,
      C3: true,
    };
    expect(getValidInputs()).toBe("A1 | A2 | C3");
  });
});

describe("validPlay function", () => {
  beforeAll(() => {
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
  });

  afterAll(() => {
    delete global.allValidInputs;
  });

  test("Should return true for valid play positions", () => {
    expect(validPlay("A1")).toBe(true);
    expect(validPlay("B2")).toBe(true);
    expect(validPlay("C3")).toBe(true);
  });

  test("Should return false for invalid play positions", () => {
    expect(validPlay("A4")).toBe(false);
    expect(validPlay("D1")).toBe(false);
    expect(validPlay("X2")).toBe(false);
    expect(validPlay("")).toBe(false);
    expect(validPlay("X")).toBe(false);
    expect(validPlay("X23")).toBe(false);
    expect(validPlay("a2")).toBe(false);
  });
});

describe("gameHasDraw function", () => {
  beforeEach(() => {
    global.finishMessage = "";
  });

  it("should return false and not modify finishMessage when all inputs are true", () => {
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

    const result = gameHasDraw();

    expect(result).toBe(false);
    expect(global.finishMessage).toBe("");
  });

  it("should return false and not modify finishMessage when at least one input is true", () => {
    global.allValidInputs = {
      A1: true,
      B1: false,
      C1: false,
      A2: false,
      B2: false,
      C2: false,
      A3: false,
      B3: false,
      C3: false,
    };

    const result = gameHasDraw();

    expect(result).toBe(false);
    expect(global.finishMessage).toBe("");
  });

  it("should return true and modify finishMessage when all inputs are false", () => {
    global.allValidInputs = {
      A1: false,
      B1: false,
      C1: false,
      A2: false,
      B2: false,
      C2: false,
      A3: false,
      B3: false,
      C3: false,
    };

    const result = gameHasDraw();

    expect(result).toBe(true);
    expect(global.finishMessage).toBe(DRAW_TEXT);
  });
});

describe("validateDiagonalFinish function", () => {
  it("should return true for diagonal win with circles", () => {
    global.board = [
      ["X", "O", "O"],
      ["X", "O", "X"],
      ["O", "X", "O"],
    ];

    const result = validateDiagonalFinish();

    expect(result).toBe(true);
    expect(global.finishMessage).toBe(CIRCLE_WIN_TEXT);
  });

  it("should return true for diagonal win with circles", () => {
    global.board = [
      ["X", "O", "O"],
      ["X", "X", "X"],
      ["O", "X", "X"],
    ];

    const result = validateDiagonalFinish();

    expect(result).toBe(true);
    expect(global.finishMessage).toBe(CROSS_WIN_TEXT);
  });

  it("should return false for no diagonal win", () => {
    global.board = [
      ["X", "X", "X"],
      ["X", "O", "X"],
      ["O", "X", "X"],
    ];

    const result = validateDiagonalFinish();

    expect(result).toBe(false);
  });
});

describe("crossOrCircleWin function", () => {
  beforeEach(() => {
    global.finishMessage = "";
  });

  it("should return true and set finishMessage to CROSS_WIN_TEXT for PLAYER_X", () => {
    const result = exportedForTesting.crossOrCircleWin(PLAYER_X);

    expect(result).toBe(true);
    expect(global.finishMessage).toBe(CROSS_WIN_TEXT);
  });

  it("should return true and set finishMessage to CIRCLE_WIN_TEXT for PLAYER_O", () => {
    const result = exportedForTesting.crossOrCircleWin(PLAYER_O);

    expect(result).toBe(true);
    expect(global.finishMessage).toBe(CIRCLE_WIN_TEXT);
  });

  it("should return false for empty board", () => {
    const result = exportedForTesting.crossOrCircleWin(" ");

    expect(result).toBe(false);
    expect(global.finishMessage).toBe("");
  });
});

describe("validateHorizontalAndVerticalFinish function", () => {
  beforeEach(() => {
    global.finishMessage = "";
  });

  it("should return true and set finishMessage to CROSS_WIN_TEXT for horizontal win with crosses", () => {
    global.board = [
      ["X", "X", "X"],
      ["O", " ", "O"],
      ["O", " ", " "],
    ];
    global.finishMessage = undefined;

    const result = validateHorizontalAndVerticalFinish(true);

    expect(result).toBe(true);
    expect(global.finishMessage).toBe(CROSS_WIN_TEXT);
  });

  it("should return true and set finishMessage to CROSS_WIN_TEXT for vertical win with crosses", () => {
    global.board = [
      ["X", "O", "O"],
      ["X", "O", "X"],
      ["X", " ", " "],
    ];
    global.finishMessage = undefined;

    const result = validateHorizontalAndVerticalFinish(false);

    expect(result).toBe(true);
    expect(global.finishMessage).toBe(CROSS_WIN_TEXT);
  });

  it("should return true and set finishMessage to CIRCLE_WIN_TEXT for horizontal win with circle", () => {
    global.board = [
      ["O", "O", "O"],
      ["X", " ", "X"],
      ["X", " ", " "],
    ];
    global.finishMessage = undefined;

    const result = validateHorizontalAndVerticalFinish(true);

    expect(result).toBe(true);
    expect(global.finishMessage).toBe(CIRCLE_WIN_TEXT);
  });

  it("should return true and set finishMessage to CIRCLE_WIN_TEXT for vertical win with circle", () => {
    global.board = [
      ["O", "X", "X"],
      ["O", "X", "O"],
      ["O", " ", " "],
    ];
    global.finishMessage = undefined;

    const result = validateHorizontalAndVerticalFinish(false);

    expect(result).toBe(true);
    expect(global.finishMessage).toBe(CIRCLE_WIN_TEXT);
  });

  it("should return false and not modify finishMessage for no win", () => {
    global.board = [
      ["X", "O", "X"],
      ["O", "X", "O"],
      ["O", "X", "O"],
    ];

    const result = validateHorizontalAndVerticalFinish(true);

    expect(result).toBe(false);
    expect(global.finishMessage).toBe("");
  });

  it("should return false and not modify finishMessage for empty board", () => {
    global.board = [
      [" ", " ", " "],
      [" ", " ", " "],
      [" ", " ", " "],
    ];

    const result = validateHorizontalAndVerticalFinish(true);

    expect(result).toBe(false);
    expect(global.finishMessage).toBe("");
  });
});
