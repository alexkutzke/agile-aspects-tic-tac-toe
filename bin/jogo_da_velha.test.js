import JogoDaVelha from './jogo_da_velha'; // só funcionou com o import e nao com o require

describe('JogoDaVelha', () => {
    let jogo;

    beforeEach(() => {
        jogo = new JogoDaVelha();
    });

    it('deve criar um tabuleiro vazio', () => {
        const tabuleiro = jogo.obterTabuleiro();
        expect(tabuleiro).toEqual([
            [' ', ' ', ' '],
            [' ', ' ', ' '],
            [' ', ' ', ' ']
        ]);
    });

    it('deve permitir que um jogador faça uma jogada válida', () => {
        const resultado = jogo.fazerJogada(1, 2);
        const tabuleiro = jogo.obterTabuleiro();

        expect(resultado).toBe(true);
        expect(tabuleiro[1][2]).toBe('X');
    });

    it('não deve permitir que um jogador faça uma jogada em uma posição ocupada', () => {
        jogo.fazerJogada(0, 0);

        const resultado = jogo.fazerJogada(0, 0);

        expect(resultado).toBe(false);
    });

    it('deve verificar se um jogador venceu o jogo', () => {

        jogo.fazerJogada(0, 0);
        jogo.fazerJogada(1, 0);
        jogo.fazerJogada(0, 1);
        jogo.fazerJogada(1, 1);
        jogo.fazerJogada(0, 2);

        const vencedor = jogo.verificarVitoria();

        expect(vencedor).toBe('X');
    });

    it('deve verificar se o jogo terminou em empate', () => {

        jogo.fazerJogada(0, 0);
        jogo.fazerJogada(0, 1);
        jogo.fazerJogada(0, 2);
        jogo.fazerJogada(1, 1);
        jogo.fazerJogada(1, 0);
        jogo.fazerJogada(1, 2);
        jogo.fazerJogada(2, 1);
        jogo.fazerJogada(2, 0);
        jogo.fazerJogada(2, 2);

        const vencedor = jogo.verificarVitoria();

        expect(vencedor).toBe('Empate');
    });

    it('deve alternar entre jogadores X e O', () => {
        jogo.fazerJogada(0, 0);
        const tabuleiro1 = jogo.obterTabuleiro();

        jogo.fazerJogada(0, 1);
        const tabuleiro2 = jogo.obterTabuleiro();

        expect(tabuleiro1[0][0]).toBe('X');
        expect(tabuleiro2[0][1]).toBe('O');
    });
});