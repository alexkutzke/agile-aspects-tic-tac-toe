const readline = require('readline');
const JogoDaVelha = require('./jogo_da_velha');

const jogo = new JogoDaVelha();
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function imprimirTabuleiro() {
    const tabuleiro = jogo.obterTabuleiro();
    console.log(tabuleiro.map((linha) => linha.join(' | ')).join('\n---------\n'));
}

function jogar() {
    imprimirTabuleiro();

    rl.question(`Jogador ${jogo.jogadorAtual}, informe a linha (0-2) e a coluna (0-2) da sua jogada (por exemplo, "1 2"): `, (resposta) => {
        const [linha, coluna] = resposta.split(' ').map(Number);

        if (isNaN(linha) || isNaN(coluna) || linha < 0 || linha > 2 || coluna < 0 || coluna > 2) {
            console.log('Jogada inválida. Tente novamente.');
            jogar();
        } else {
            const jogadaValida = jogo.fazerJogada(linha, coluna);
            if (jogadaValida) {
                const vencedor = jogo.verificarVitoria();
                if (vencedor) {
                    imprimirTabuleiro();
                    if (vencedor === 'Empate') {
                        console.log('O jogo terminou em empate!');
                    } else {
                        console.log(`O jogador ${vencedor} venceu o jogo!`);
                    }
                    rl.close();
                } else {
                    jogar();
                }
            } else {
                console.log('Essa posição já está ocupada. Tente novamente.');
                jogar();
            }
        }
    });
}

console.log('Bem-vindo ao Jogo da Velha!');
jogar();