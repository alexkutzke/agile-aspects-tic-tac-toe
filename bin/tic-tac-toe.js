class TicTacToe {
    constructor() {
        this.board = [
            [' ', ' ', ' '],
            [' ', ' ', ' '],
            [' ', ' ', ' ']
        ];
        this.currentPlayer = 'X';
    }

    printBoard() {
        console.log('  0 1 2');
        this.board.forEach((row, i) => {
            console.log(i, row.join('|'));
            if (i < 2) console.log('  -----');
        });
    }

    checkWinner() {
        const winningCombinations = [
            [[0, 0], [0, 1], [0, 2]],
            [[1, 0], [1, 1], [1, 2]],
            [[2, 0], [2, 1], [2, 2]],
            [[0, 0], [1, 0], [2, 0]],
            [[0, 1], [1, 1], [2, 1]],
            [[0, 2], [1, 2], [2, 2]],
            [[0, 0], [1, 1], [2, 2]],
            [[0, 2], [1, 1], [2, 0]]
        ];

        for (const combination of winningCombinations) {
            const [a, b, c] = combination;
            if (
                this.board[a[0]][a[1]] !== ' ' &&
                this.board[a[0]][a[1]] === this.board[b[0]][b[1]] &&
                this.board[a[0]][a[1]] === this.board[c[0]][c[1]]
            ) {
                return this.board[a[0]][a[1]];
            }
        }

        return null;
    }

    makeMove(row, col) {
        if (row >= 0 && row <= 2 && col >= 0 && col <= 2 && this.board[row][col] === ' ') {
            this.board[row][col] = this.currentPlayer;
            this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
            return true;
        }
        return false;
    }

    getCurrentPlayer() {
        return this.currentPlayer;
    }
}

export default TicTacToe;
