import { createRequire } from 'module';
import { exit } from 'process';

import pkg from 'readline-sync';
const readlineSync = pkg;
//import { readline } from 'readline-sync';
/*const require = createRequire(import.meta.url);

var readlineSync = require('readline-sync');*/

// Wait for user's response.
export class TicTacToe {
    jogadorAtual;
    jogadas;

    constructor() {
        this.tabuleiro = [
            [' ', ' ', ' '],
            [' ', ' ', ' '],
            [' ', ' ', ' '],
        ];
        this.jogando = false;
    }

    iniciarJogo() {
        this.inicializacao();

        this.render();
        this.gameLoop();
    }

    inicializacao() {
        this.jogando = true;
        this.jogadorAtual = 'X';
        this.jogadas = 0;
    }

    gameLoop() {
        while (this.jogando) {
            let jogada = this.input();

            this.update(jogada);

            this.render();
        }
    }

    input() {
        let linha, coluna;
        do {
            linha = readlineSync.question('Qual linha deseja jogar > ');
            if (linha == 'S') this.sair();

            coluna = readlineSync.question('Qual coluna deseja jogar > ');
            if (coluna == 'S') this.sair();
        } while (!this.jogadaValida(linha, coluna));

        return { linha: linha, coluna: coluna };
    }

    update(jogada) {
        this.fazerJogada(jogada.linha, jogada.coluna, this.jogadorAtual);

        if (this.verificarVitoria()) exit();

        this.trocarJogador();
    }

    render() {
        this.mostrarTabuleiro();
        console.log('Vez do jogador \'' + this.jogadorAtual + '\'');
        console.log('Digite \'S\' para sair.');
        console.log();
    }

    trocarJogador() {
        this.jogadorAtual = this.jogadorAtual == 'X' ? 'O' : 'X';
    }

    verificarVitoria() {
        let vencedor;
        if (vencedor = this.verificarLinhas()) return vencedor;
        if (vencedor = this.verificarColunas()) return vencedor;
        if (vencedor = this.verificarDiagonais()) return vencedor;
        if (this.verificarEmpate()) return true;

        return false;
    }

    verificarEmpate() {
        if (this.jogadas == 9) {
            this.mostrarTabuleiro();
            console.log('EMPATE !!!');
            return true;
        }
        return false;
    }

    verificarLinhas() {
        if ((this.tabuleiro[0][0] == 'X' && this.tabuleiro[0][1] == 'X' && this.tabuleiro[0][2] == 'X')
            || (this.tabuleiro[1][0] == 'X' && this.tabuleiro[1][1] == 'X' && this.tabuleiro[1][2] == 'X')
            || (this.tabuleiro[2][0] == 'X' && this.tabuleiro[2][1] == 'X' && this.tabuleiro[2][2] == 'X')) {
            this.mostrarTabuleiro();
            console.log('Jogador X GANHOU !!!');
            return 'X';
        } else if ((this.tabuleiro[0][0] == 'O' && this.tabuleiro[0][1] == 'O' && this.tabuleiro[0][2] == 'O')
            || (this.tabuleiro[1][0] == 'O' && this.tabuleiro[1][1] == 'O' && this.tabuleiro[1][2] == 'O')
            || (this.tabuleiro[2][0] == 'O' && this.tabuleiro[2][1] == 'O' && this.tabuleiro[2][2] == 'O')) {
            this.mostrarTabuleiro();
            console.log('Jogador O GANHOU !!!');
            return 'O';
        }
        return '';
    }

    verificarColunas() {
        if ((this.tabuleiro[0][0] == 'X' && this.tabuleiro[1][0] == 'X' && this.tabuleiro[2][0] == 'X')
            || (this.tabuleiro[0][1] == 'X' && this.tabuleiro[1][1] == 'X' && this.tabuleiro[2][1] == 'X')
            || (this.tabuleiro[0][2] == 'X' && this.tabuleiro[1][2] == 'X' && this.tabuleiro[2][2] == 'X')) {
            this.mostrarTabuleiro();
            console.log('Jogador X GANHOU !!!');
            return 'X';
        } else if ((this.tabuleiro[0][0] == 'O' && this.tabuleiro[1][0] == 'O' && this.tabuleiro[2][0] == 'O')
            || (this.tabuleiro[0][1] == 'O' && this.tabuleiro[1][1] == 'O' && this.tabuleiro[2][1] == 'O')
            || (this.tabuleiro[0][2] == 'O' && this.tabuleiro[1][2] == 'O' && this.tabuleiro[2][2] == 'O')) {
            this.mostrarTabuleiro();
            console.log('Jogador O GANHOU !!!');
            return 'O';
        }
        return '';
    }

    verificarDiagonais() {
        if ((this.tabuleiro[0][0] == 'X' && this.tabuleiro[1][1] == 'X' && this.tabuleiro[2][2] == 'X')
            || (this.tabuleiro[2][0] == 'X' && this.tabuleiro[1][1] == 'X' && this.tabuleiro[0][2] == 'X')) {
            this.mostrarTabuleiro();
            console.log('Jogador X GANHOU !!!');
            return 'X';
        } else if ((this.tabuleiro[0][0] == 'O' && this.tabuleiro[1][1] == 'O' && this.tabuleiro[2][2] == 'O')
            || (this.tabuleiro[2][0] == 'O' && this.tabuleiro[1][1] == 'O' && this.tabuleiro[0][2] == 'O')) {
            this.mostrarTabuleiro();
            console.log('Jogador X GANHOU !!!');
            return 'O';
        }
        return '';
    }

    sair() {
        console.log('Adios');
        exit();
    }

    jogadaValida(linha, coluna) {
        if (!linha || !coluna
            || (isNaN(linha) && linha != 'S')
            || (isNaN(coluna) && coluna != 'S')
            || linha < 1 || linha > 3 || coluna < 1 || coluna > 3
            || this.tabuleiro[linha - 1][coluna - 1] != ' ') {
            this.render();
            console.log('JOGADA INVÁLIDA, tente novamente!');
            console.log();
            return false;
        }
        return true;
    }

    fazerJogada(linha, coluna, jogador) {
        this.tabuleiro[linha - 1][coluna - 1] = jogador;
        this.jogadas++;
    }

    mostrarTabuleiro() {
        console.clear();
        console.log('     JOGO DA VELHA');
        console.log();
        console.log('        colunas');
        console.log('       1   2   3');
        this.mostrarPrimeiraLinha();
        this.mostrarSegundaLinha();
        this.mostrarTerceiraLinha();
        console.log();
    }

    mostrarPrimeiraLinha() {
        console.log('         |   |');
        console.log('  l 1  ' + this.tabuleiro[0][0] + ' | ' + this.tabuleiro[0][1] + ' |  ' + this.tabuleiro[0][2]);
        console.log('  i   ___|___|___');
    }

    mostrarSegundaLinha() {
        console.log('  n      |   |');
        console.log('  h 2  ' + this.tabuleiro[1][0] + ' | ' + this.tabuleiro[1][1] + ' |  ' + this.tabuleiro[1][2]);
        console.log('  a   ___|___|___');
    }

    mostrarTerceiraLinha() {
        console.log('  s      |   |');
        console.log('    3  ' + this.tabuleiro[2][0] + ' | ' + this.tabuleiro[2][1] + ' |  ' + this.tabuleiro[2][2]);
        console.log('         |   |');
    }
}