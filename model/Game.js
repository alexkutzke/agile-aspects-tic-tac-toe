class Game {
    constructor() {
        this.board = Array(9).fill(null);
    }

    drawBoard() {
        console.log("* Tic Tac Toe\n");
        for (let row = 0; row < 3; row++) {
            let rowString = "|";
            for (let col = 0; col < 3; col++) {
                const cell = this.board[row * 3 + col] || " ";
                rowString += ` ${cell} |`;
            }
            console.log(rowString);
            if (row < 2) {
                console.log("----+---+----");
            }
        }
        console.log("\n")
    }

    setLocation(position, tile){
        this.board[position] = tile
    }

    isOver() {
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];

        for (const combination of winningCombinations) {
            const [a, b, c] = combination;
            if (this.board[a] &&
                this.board[a] === this.board[b] &&
                this.board[a] === this.board[c]) {
                console.log(`Player ${this.board[a]} wins!`);
                return true;
            }
        }
        if (!this.board.includes(null)) {
            console.log("It's a draw!");
            return true;
        }
        return false;
    }
}

export default Game;