class JogoDaVelha {
	constructor() {
		this.tabuleiro = [
			[' ', ' ', ' '],
			[' ', ' ', ' '],
			[' ', ' ', ' '],
		];
		this.jogadorAtual = 'X';
		this.vencedor = null;
		this.jogoEncerrado = false;
	}
	
	fazerJogada(linha, coluna) {
		if (!this.jogoEncerrado && this.tabuleiro[linha][coluna] === ' ') {
			this.tabuleiro[linha][coluna] = this.jogadorAtual;
			if (this.verificarVitoria()) {
				this.vencedor = this.jogadorAtual;
				this.jogoEncerrado = true;
			} else {
				this.jogadorAtual = this.jogadorAtual === 'X' ? 'O' : 'X';
			}
		}
	}
	
	verificarVitoria() {
		const tabuleiro = this.tabuleiro;
		
		for (let linha = 0; linha < 3; linha++) {
			if (
				tabuleiro[linha][0] === tabuleiro[linha][1] &&
				tabuleiro[linha][0] === tabuleiro[linha][2] &&
				tabuleiro[linha][0] !== ' '
			) {
				return true;
			}
		}
			
		for (let coluna = 0; coluna < 3; coluna++) {
			if (
				tabuleiro[0][coluna] === tabuleiro[1][coluna] &&
				tabuleiro[0][coluna] === tabuleiro[2][coluna] &&
				tabuleiro[0][coluna] !== ' '
			) {
				return true;
			}
		}
				
		if (
			(
			tabuleiro[0][0] === tabuleiro[1][1]&&
			tabuleiro[0][0] === tabuleiro[2][2] &&
			tabuleiro[0][0] !== ' ') || 
			(
			tabuleiro[0][2] === tabuleiro[1][1] &&
			tabuleiro[0][2] === tabuleiro[2][0] &&
			tabuleiro[0][2] !== ' ')
		) {
			return true;
		}
					
		const todasAsCelulasPreenchidas = tabuleiro.every(row =>
			row.every(celula => celula !== ' ')
		);
			
		if (todasAsCelulasPreenchidas) {
			this.jogoEncerrado = true;
			this.vencedor = null;
			return true;
		}
		
		return false;
	}
}

export default JogoDaVelha;