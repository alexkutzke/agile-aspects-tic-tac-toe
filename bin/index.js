import readline from 'readline';
import JogoDaVelha from '../src/jogo-da-velha.js';

const digitaNoTerminal = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

function solicitarJogada(jogo) {
	digitaNoTerminal.question(
		`Jogador ${jogo.jogadorAtual}, faça sua jogada (linha, coluna): `,
		(jogada) => {
			const [linha, coluna] = jogada.split(' ').map(Number);
			if (
				!Number.isNaN(linha) &&
				!Number.isNaN(coluna) &&
				linha >= 0 &&
				linha < 3 &&
				coluna >= 0 &&
				coluna < 3
			) {
				jogo.fazerJogada(linha, coluna);
				if (!jogo.jogoEncerrado) {
					solicitarJogada(jogo);
				} else {
					console.log('Jogo encerrado!');
					if (jogo.vencedor) {
						console.log(`O jogador ${jogo.vencedor} venceu!`);
					} else {
						console.log('O jogo terminou em empate.');
					}
					digitaNoTerminal.close();
				}
			} else {
				console.log('Jogada inválida. Tente novamente.');
				solicitarJogada(jogo);
			}
		}
	);
}

function iniciarJogo() {
	const jogo = new JogoDaVelha();

	console.log('Bem-vindo ao jogo da velha :) ');
	console.log('Para fazer uma jogada, digite as coordenadas no formato "linha coluna".');
	console.log(`Jogador atual: ${jogo.jogadorAtual}`);
	console.log(jogo.tabuleiro.map(row => row.join(' ')).join('\n'));

	solicitarJogada(jogo);
}

iniciarJogo();
