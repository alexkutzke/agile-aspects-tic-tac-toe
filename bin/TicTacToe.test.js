import { TicTacToe } from "./TicTacToe.js";
//const TicTacToe = require('./TicTacToe.js');

beforeAll(() => {
    jest.spyOn(console, 'log').mockImplementation(jest.fn());
    jest.spyOn(console, 'debug').mockImplementation(jest.fn());
});
let jogo;
beforeEach(() => {
    jogo = new TicTacToe();
    jogo.inicializacao();
});

describe("Testando Jogadas Invalidas", () => {
    test('Linha 0 invalida', () => {

        expect(jogo.jogadaValida(0, 1)).toEqual(false);

    });

    test('Linha 4 invalida', () => {

        expect(jogo.jogadaValida(4 , 1)).toEqual(false);

    });

    test('Linha X invalida', () => {

        expect(jogo.jogadaValida('X' , 1)).toEqual(false);

    });

    test('Linha \'\' invalida', () => {

        expect(jogo.jogadaValida('' , 1)).toEqual(false);

    });

    test('Coluna 0 invalida', () => {

        expect(jogo.jogadaValida(1 , 0)).toEqual(false);

    });

    test('Coluna 4 invalida', () => {

        expect(jogo.jogadaValida(1 , 4)).toEqual(false);

    });

    test('Coluna X invalida', () => {

        expect(jogo.jogadaValida(1, 'X')).toEqual(false);

    });

    test('Coluna \'\' invalida', () => {

        expect(jogo.jogadaValida(1, '')).toEqual(false);

    });

});

describe("Testando Jogadas", () => {
    test('Jogador X jogada (1, 1)', () => {
        jogo.fazerJogada(1, 1, 'X');

        expect(jogo.tabuleiro[0][0]).toEqual('X');

    });

    test('Jogador X jogada (3, 3)', () => {
        jogo.fazerJogada(3, 3, 'X');

        expect(jogo.tabuleiro[2][2]).toEqual('X');

    });
    test('Jogador O jogada (1, 1)', () => {
        jogo.fazerJogada(1, 1, 'O');

        expect(jogo.tabuleiro[0][0]).toEqual('O');

    });

    test('Jogador O jogada (3, 3)', () => {
        jogo.fazerJogada(3, 3, 'O');

        expect(jogo.tabuleiro[2][2]).toEqual('O');

    });
});

describe("Testando Finais", () => {
    test('Jogador X ganhou', () => {
        jogo.fazerJogada(1, 1, 'X');
        jogo.fazerJogada(2, 2, 'X');
        jogo.fazerJogada(3, 3, 'X');

        expect(jogo.verificarVitoria()).toEqual('X');

    });

    test('Jogador O ganhou', () => {
        jogo.fazerJogada(1, 1, 'O');
        jogo.fazerJogada(2, 2, 'O');
        jogo.fazerJogada(3, 3, 'O');

        expect(jogo.verificarVitoria()).toEqual('O');

    });

    test('Empate', () => {
        jogo.fazerJogada(1, 1, 'X');
        jogo.fazerJogada(1, 2, 'O');
        jogo.fazerJogada(1, 3, 'O');
        jogo.fazerJogada(2, 1, 'O');
        jogo.fazerJogada(2, 2, 'X');
        jogo.fazerJogada(2, 3, 'X');
        jogo.fazerJogada(3, 1, 'X');
        jogo.fazerJogada(3, 2, 'X');
        jogo.fazerJogada(3, 3, 'O');

        expect(jogo.verificarEmpate()).toEqual(true);

    });
});