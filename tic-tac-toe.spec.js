const mockStdin = require('mock-stdin').stdin();

const {
    initializeBoard, getPlayerMove, validateMove, markBoard, checkTie, checkWinner, switchPlayer, rlWrapper
} = require('./tic-tac-toe');

describe('Tic-Tac-Toe Game', () => {

    let board;
    let consoleLogSpy;

    const PLAYER_X = 'X';
    const PLAYER_O = 'O';

    beforeEach(() => {
        board = initializeBoard();
        consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => { });
    });

    describe('Testing Functions Separately', () => {
        describe('initializeBoard()', () => {
            it('must return a new game board', () => {
                expect(board).toEqual(['1', '2', '3', '4', '5', '6', '7', '8', '9']);
            });
        })

        describe('validateMove()', () => {
            it('must return true for a valid position', () => {
                const position = 0;
                expect(validateMove(board, position)).toBe(true);
            });

            it('must return false for an already marked position', () => {
                const position = 0;
                markBoard(board, position);
                expect(validateMove(board, position)).toBe(false);
            });

            it('must should return false for an invalid position', () => {
                const position = 'A';
                expect(validateMove(board, position)).toBe(false);
            });
        })

        describe('markBoard()', () => {
            it('must update the board correctly', () => {
                const position = 1;
                markBoard(board, position);
                expect(board[board, position]).toBe(PLAYER_X);
            });
        })

        describe('checkTie()', () => {
            it('must return true for a tied game', () => {
                const board = ['X', 'X', 'O', 'O', 'O', 'X', 'X', 'O', 'X']
                expect(checkTie(board)).toBe(true);
            });

            it('must return false for an ongoing game', () => {
                const board = ['1', 'X', '3', '4', 'O', 'X', 'X', '0', 'X']
                expect(checkTie(board)).toBe(false);
            });
        });

        describe('checkWinner()', () => {
            it('must return the winning player', () => {
                board = ['X', 'X', 'X', '4', '5', '6', '7', '8', '9'];
                expect(checkWinner(board)).toBe(PLAYER_X);
            });

            it('must return null for no winner', () => {
                board = ['X', 'O', 'X', 'O', 'X', 'O', 'O', 'X', '0'];
                expect(checkWinner(board)).toBeNull();
            });
        });

        describe('switchPlayer()', () => {
            it('must change player from X to O', () => {
                expect(switchPlayer(PLAYER_X)).toBe(PLAYER_O);
            });

            it('must change player from O to X', () => {
                expect(switchPlayer(PLAYER_O)).toBe(PLAYER_X);
            });
        });
    })

    describe('Testing Different Game Situations', () => {
        describe('Player X wins the game', () => {

            it('simulates user input and check for X victory', (done) => {
                // Defina um mock para askQuestion para simular a entrada do usuário
                const askQuestionMock = jest.spyOn(rlWrapper, 'askQuestion');
                let userInputCounter = 0;

                askQuestionMock.mockImplementation((question, callback) => {
                    // Simule as entradas do usuário: 1 (X), 4 (O), 2 (X), 5 (O), 3 (X)
                    const userInput = ['1', '4', '2', '5', '3'];

                    // Use o userInputCounter para obter a próxima entrada do usuário
                    const userResponse = userInput[userInputCounter];
                    userInputCounter++;

                    callback(userResponse);
                });

                // Defina um mock para closeRL para simular o fechamento do readline
                const closeRLMock = jest.spyOn(rlWrapper, 'closeRL');
                closeRLMock.mockImplementationOnce(() => {
                    // Verifique se closeRL foi chamado corretamente
                    expect(closeRLMock).toHaveBeenCalled();

                    // Verifique se a mensagem de vitória para o jogador X foi impressa no console
                    expect(console.log).toHaveBeenCalledWith('\n-> Parabéns, Jogador X! Você venceu!\n');

                    done();
                });

                getPlayerMove(board);
            });

        })

        describe('Player O wins the game', () => {

            it('simulates user input and check for O victory', (done) => {
                // Defina um mock para askQuestion para simular a entrada do usuário
                const askQuestionMock = jest.spyOn(rlWrapper, 'askQuestion');
                let userInputCounter = 0;

                askQuestionMock.mockImplementation((question, callback) => {
                    // Simule as entradas do usuário: 1 (X), 5 (O), 2 (X), 3 (O), 4 (X), 7(O)
                    const userInput = ['1', '5', '2', '3', '4', '7'];

                    // Use o userInputCounter para obter a próxima entrada do usuário
                    const userResponse = userInput[userInputCounter];
                    userInputCounter++;

                    callback(userResponse);
                });

                // Defina um mock para closeRL para simular o fechamento do readline
                const closeRLMock = jest.spyOn(rlWrapper, 'closeRL');
                closeRLMock.mockImplementationOnce(() => {
                    // Verifique se closeRL foi chamado corretamente
                    expect(closeRLMock).toHaveBeenCalled();

                    // Verifique se a mensagem de vitória para o jogador X foi impressa no console
                    expect(console.log).toHaveBeenCalledWith('\n-> Parabéns, Jogador O! Você venceu!\n');

                    done();
                });

                getPlayerMove(board);
            });

        })

        describe('The game draws', () => {

            it('simulates user input and check for tie', (done) => {
                // Defina um mock para askQuestion para simular a entrada do usuário
                const askQuestionMock = jest.spyOn(rlWrapper, 'askQuestion');
                let userInputCounter = 0;

                askQuestionMock.mockImplementation((question, callback) => {
                    // Simule as entradas do usuário: 1 (X), 4 (O), 7 (X), 3 (O), 6 (X), 9 (O), 2 (X), 5 (O), 8 (X)
                    const userInput = ['1', '4', '7', '3', '6', '9', '2', '5', '8'];

                    // Use o userInputCounter para obter a próxima entrada do usuário
                    const userResponse = userInput[userInputCounter];
                    userInputCounter++;

                    callback(userResponse);
                });

                // Defina um mock para closeRL para simular o fechamento do readline
                const closeRLMock = jest.spyOn(rlWrapper, 'closeRL');
                closeRLMock.mockImplementationOnce(() => {
                    // Verifique se closeRL foi chamado corretamente
                    expect(closeRLMock).toHaveBeenCalled();

                    // Verifique se a mensagem de vitória para o jogador X foi impressa no console
                    expect(console.log).toHaveBeenCalledWith('\n-> Poxa, o jogo terminou em empate!\n');

                    done();
                });

                getPlayerMove(board);
            });

        })
    });

    afterEach(() => {
        mockStdin.reset();
        consoleLogSpy.mockRestore();
    });

});