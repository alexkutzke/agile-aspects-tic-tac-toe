const {
  updateBoard,
  isValidMove,
  checkWinner,
  checkTie,
  switchPlayer,
} = require("./seu-arquivo-do-codigo");

describe("Jogo da Velha", () => {
  describe("updateBoard", () => {
    it("deve atualizar o tabuleiro com o símbolo fornecido", () => {
      const tabuleiro = {
        1: " ",
        2: " ",
        3: " ",
        4: " ",
        5: " ",
        6: " ",
        7: " ",
        8: " ",
        9: " ",
      };
      updateBoard(tabuleiro, 1, "X");
      expect(tabuleiro[1]).toBe("X");
    });
  });

  describe("isValidMove", () => {
    it("deve retornar true para um movimento válido", () => {
      const tabuleiro = {
        1: " ",
        2: " ",
        3: " ",
        4: " ",
        5: " ",
        6: " ",
        7: " ",
        8: " ",
        9: " ",
      };
      expect(isValidMove(tabuleiro, 5)).toBe(true);
    });

    it("deve retornar false para um movimento inválido", () => {
      const tabuleiro = {
        1: "X",
        2: " ",
        3: " ",
        4: " ",
        5: " ",
        6: " ",
        7: " ",
        8: " ",
        9: " ",
      };
      expect(isValidMove(tabuleiro, 1)).toBe(false);
    });

    it("deve retornar false para um movimento não inteiro", () => {
      const tabuleiro = {
        1: " ",
        2: " ",
        3: " ",
        4: " ",
        5: " ",
        6: " ",
        7: " ",
        8: " ",
        9: " ",
      };
      expect(isValidMove(tabuleiro, "X")).toBe(false);
    });
  });

  describe("checkWinner", () => {
    it("deve retornar true quando há um vencedor", () => {
      const tabuleiro = {
        1: "X",
        2: "X",
        3: "X",
        4: " ",
        5: " ",
        6: " ",
        7: " ",
        8: " ",
        9: " ",
      };
      expect(checkWinner(tabuleiro, "X")).toBe(true);
    });

    it("deve retornar false quando não há um vencedor", () => {
      const tabuleiro = {
        1: "X",
        2: "O",
        3: "X",
        4: "O",
        5: "X",
        6: "O",
        7: "X",
        8: "X",
        9: "O",
      };
      expect(checkWinner(tabuleiro, "X")).toBe(false);
    });
  });

  describe("checkTie", () => {
    it("deve retornar true quando houver um empate", () => {
      const tabuleiro = {
        1: "X",
        2: "O",
        3: "X",
        4: "X",
        5: "X",
        6: "O",
        7: "O",
        8: "X",
        9: "O",
      };
      expect(checkTie(tabuleiro)).toBe(true);
    });

    it("deve retornar false quando não houver um empate", () => {
      const tabuleiro = {
        1: "X",
        2: "O",
        3: "X",
        4: "X",
        5: " ",
        6: "O",
        7: "O",
        8: "X",
        9: " ",
      };
      expect(checkTie(tabuleiro)).toBe(false);
    });
  });

  describe("switchPlayer", () => {
    it("deve alternar o jogador de X para O", () => {
      expect(switchPlayer("X")).toBe("O");
    });

    it("deve alternar o jogador de O para X", () => {
      expect(switchPlayer("O")).toBe("X");
    });
  });
});
