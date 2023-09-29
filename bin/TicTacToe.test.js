import TicTacToe from './tic-tac-toe.js';

describe('TicTacToe', () => {
    let game;

    beforeEach(() => {
        game = new TicTacToe();
    });

    describe('when a player makes a move', () => {
        it('should accept a valid move', () => {
            expect(game.makeMove(0, 0)).toBe(true);
            expect(game.makeMove(0, 1)).toBe(true);
        });

        it('should reject an invalid move', () => {
            expect(game.makeMove(0, 0)).toBe(true);
            expect(game.makeMove(0, 0)).toBe(false);
            expect(game.makeMove(3, 3)).toBe(false);
        });
    });

    describe('when checking for a winner', () => {
        it('should return null if there is no winner', () => {
            expect(game.checkWinner()).toBe(null);
        });

        it('should return the winner if there is a winner', () => {
            game.makeMove(0, 0);
            game.makeMove(1, 0);
            game.makeMove(0, 1);
            game.makeMove(1, 1);
            game.makeMove(0, 2);
            expect(game.checkWinner()).toBe('X');
        });
    });

    describe('when getting the current player', () => {
        it('should return the current player', () => {
            expect(game.getCurrentPlayer()).toBe('X');
            game.makeMove(0, 0);
            expect(game.getCurrentPlayer()).toBe('O');
        });
    });
});
