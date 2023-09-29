import readline from "readline";
import TicTacToe from "./tic-tac-toe.js";

const game = new TicTacToe();
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function nextMove() {
  game.printBoard();
  const winner = game.checkWinner();
  if (winner) {
    console.log(`O jogador ${winner === "X" ? 1 : 2} ganhou!`);
    rl.close();
    return;
  }

  rl.question(
    `Jogador ${
      game.getCurrentPlayer() === "X" ? 1 : 2
    }, deseja adicionar "${game.getCurrentPlayer()}" em qual posição? `,
    (answer) => {
      const [row, col] = answer.split(",").map(Number);
      if (game.makeMove(row, col)) {
        nextMove();
      } else {
        console.log("Posição inválida ou já ocupada. Tente novamente.");
        nextMove();
      }
    }
  );
}

nextMove();
