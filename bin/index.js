#! /usr/bin/env node
import promptSync from "prompt-sync";
import * as game from "./game.js";
import * as ui from "./ui.js";
import { initStore } from "./store.js";
import {
  GAME_STATUS_QUIT,
  GAME_STATUS_PLAYING,
  GAME_STATUS_FINISHED,
  GAME_STATUS_NEW_GAME,
} from "./constants.js";

const prompt = promptSync();
initStore();

while (global.gameStatus != GAME_STATUS_QUIT) {
  console.clear();
  switch (global.gameStatus) {
    case GAME_STATUS_PLAYING:
      ui.displayBoard();
      game.makePlay(prompt);
      game.checkGameOver();
      break;
    case GAME_STATUS_FINISHED:
      ui.displayBoard();
      ui.displayGameOver(prompt);
      break;
    case GAME_STATUS_NEW_GAME:
      game.resetGame();
      break;
    default:
      break;
  }
}

console.clear();
console.log("Thanks for playing :)");
