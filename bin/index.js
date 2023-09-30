#! /usr/bin/env node
import readLine from "readline-sync"

const board = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function printGame(){
    console.log("\n" + board[0] + " | " + board[1] + " | " + board[2])
    console.log(board[3] + " | " + board[4] + " | " + board[5])
    console.log(board[6] + " | " + board[7] + " | " + board[8] + "\n")
}

export function selectPlayer(player){
    return player === 'X' ? "O" : "X"
}

export function checkWinner(){
    if(board[0]==board[1] && board[0]==board[2]){
        return true
    }
    if(board[3]==board[4] && board[3]==board[5]){
        return true
    }
    if(board[6]==board[7] && board[6]==board[8]){
        return true
    }

    if(board[0]==board[3] && board[0]==board[6]){
        return true
    }
    if(board[1]==board[4] && board[1]==board[7]){
        return true
    }
    if(board[2]==board[5] && board[2]==board[8]){
        return true
    }

    if(board[0]==board[4] && board[0]==board[8]){
        return true
    }
    if(board[2]==board[4] && board[2]==board[6]){
        return true
    }

    return false
}

export function isValidMove(move){
    if(move<1 || move>9){
        return false;
    }else if(board[move-1]=="X" || board[move-1]=="O"){
        return false
    }else{
        return true
    }
}

function playRound(player){
    let move;
    const prompt = `Player ${player}, select the number you want to move: `
    do{
        move = parseInt(readLine.question(prompt))
    }while(!isValidMove(move))
    board[move-1]=player
    printGame()
}

function playGame(){
    let player = 'O'
    let winner = false;
    let roundNumber = 0;

    printGame()

    console.log("Welcome to Tic Tac Toe game!")

    while(winner==false && roundNumber<9){
        player = selectPlayer(player)
        playRound(player)
        winner = checkWinner()
        roundNumber += 1
    }

    if(winner){
        console.log(`Conglatulations! ${player} is the winner!`)
    }else{
        console.log("It's a draw!")
    }

}

playGame();