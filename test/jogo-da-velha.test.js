import JogoDaVelha from '../src/jogo-da-velha.js';

test('Fazer uma jogada válida', () => {
	const jogo = new JogoDaVelha();
	jogo.fazerJogada(0, 0);
	expect(jogo.tabuleiro[0][0]).toBe('X');
	expect(jogo.jogadorAtual).toBe('O');
});

test('Tentar fazer uma jogada em uma célula ocupada', () => {
	const jogo = new JogoDaVelha();
	jogo.fazerJogada(0, 0);
	jogo.fazerJogada(0, 0);
	expect(jogo.tabuleiro[0][0]).toBe('X');
	expect(jogo.jogadorAtual).toBe('O');
});

test('Verificar se o jogo está encerrado após uma vitória', () => {
	const jogo = new JogoDaVelha();
	jogo.fazerJogada(0, 0);
	jogo.fazerJogada(1, 0);
	jogo.fazerJogada(0, 1);
	jogo.fazerJogada(1, 1);
	jogo.fazerJogada(0, 2);
	expect(jogo.jogoEncerrado).toBe(true);
	expect(jogo.vencedor).toBe('X');
});