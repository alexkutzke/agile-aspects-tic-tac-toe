#! /usr/bin/env node
const {
    initializeBoard, playGame
} = require('./tic-tac-toe');

let gameBoard = initializeBoard();

console.log('\nBem-vindo(a) ao Jogo da Velha!');
playGame(gameBoard);
