class JogoDaVelha {
    constructor() {
        this.tabuleiro = [
            [' ', ' ', ' '],
            [' ', ' ', ' '],
            [' ', ' ', ' ']
        ];
        this.jogadorAtual = 'X';
        this.jogadas = 0;
    }

    fazerJogada(linha, coluna) {
        if (this.tabuleiro[linha][coluna] === ' ') {
            this.tabuleiro[linha][coluna] = this.jogadorAtual;
            this.jogadorAtual = this.jogadorAtual === 'X' ? 'O' : 'X';
            this.jogadas++;
            return true;
        }
        return false;
    }

    verificarVitoria() {
        const linhasColunasDiagonais = [
            ...this.tabuleiro,
            ...[0, 1, 2].map((col) => this.tabuleiro.map((row) => row[col])),
            [this.tabuleiro[0][0], this.tabuleiro[1][1], this.tabuleiro[2][2]],
            [this.tabuleiro[0][2], this.tabuleiro[1][1], this.tabuleiro[2][0]],
        ];

        for (const linhaColunaDiagonal of linhasColunasDiagonais) {
            if (linhaColunaDiagonal.every((celula) => celula === 'X')) {
                return 'X';
            }
            if (linhaColunaDiagonal.every((celula) => celula === 'O')) {
                return 'O';
            }
        }

        if (this.jogadas === 9) {
            return 'Empate';
        }

        return null;
    }

    obterTabuleiro() {
        return this.tabuleiro;
    }
}

module.exports = JogoDaVelha;