const {
    printBoard,
    checkWin,
    isBoardFull,
    switchPlayer,
    play,
  } = require('./tictactoe'); 
  
  describe('Funções Tic-Tac-Toe', () => {
    describe('printBoard', () => {
      it('cria o tabuleiro', () => {
               const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
        printBoard();
        expect(consoleLogSpy).toHaveBeenCalledWith(expect.stringContaining('X | X | X'));
        consoleLogSpy.mockRestore(); 
      });
    });
  
    describe('checkWin', () => {
      it('Deve retornar verdadeiro se jogador for vencedor', () => {
        const winScenario = [
          ['X', 'X', 'X'],
          [' ', ' ', ' '],
          [' ', ' ', ' '],
        ];
        expect(checkWin(winScenario)).toBe(true);
      });
  
      it('Deve retornar falso se não tiver vencedor', () => {
        const noWinScenario = [
          ['X', 'O', 'X'],
          ['O', 'X', 'O'],
          ['X', 'O', 'X'],
        ];
        expect(checkWin(noWinScenario)).toBe(false);
      });
    });
  
    describe('isBoardFull', () => {
      it('deve retornar verdadeiro se o tabuleiro estiver cheio', () => {
        const fullBoard = [
          ['X', 'O', 'X'],
          ['O', 'X', 'X'],
          ['X', 'O', 'O'],
        ];
        expect(isBoardFull(fullBoard)).toBe(true);
      });
  
      it('deve retornar falso se o tabuleiro não estiver cheio', () => {
        const notFullBoard = [
          ['X', 'O', 'X'],
          ['O', 'X', ' '],
          ['X', 'O', 'O'],
        ];
        expect(isBoardFull(notFullBoard)).toBe(false);
      });
    });
  
   
  });
  