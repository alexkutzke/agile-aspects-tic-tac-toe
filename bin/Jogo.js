class Jogo {
  constructor() {
    this.tabuleiro = [
      ['-', '-', '-'],
      ['-', '-', '-'],
      ['-', '-', '-'],
    ];
    this.jogadorUm = 'PRIMEIRO';
    this.jogadorDois = 'SEGUNDO';
    this.jogadorAtual = this.jogadorUm;
    this.ganhador = null;
  }

  jogar() {
    console.log(`________________________`);
    console.log('Tabuleiro:');
    this.tabuleiro.forEach((row) => {
      const linhaFormatada = row.map((valor) => (valor === '-' ? '-' : valor));
      console.log(linhaFormatada.join(' '));
    });

    if (this.ganhador !== null) {
      console.log(`PARABÉNS!!! O ganhador da partida é o: ${this.ganhador} jogador`);
      console.log(`FIM DE JOGO`);
      console.log(`____________`);
      return;
    }
  
    console.log(`________________________`);
    this.realizarJogada();
  } 

  realizarJogada() {
    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  
    readline.question(
      `${this.jogadorAtual} jogador, escolha uma posição no formato linha coluna (por exemplo, 1 2): `,
      (input) => {
        const [linha, coluna] = input.split(' ').map((x) => parseInt(x));
  
        if (isNaN(linha) || isNaN(coluna) || linha < 1 || linha > 3 || coluna < 1 || coluna > 3) {
          console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
          console.error('Posição inválida. Use o formato linha coluna (por exemplo, 1 2).');
        } else {
          const linhaIndice = linha - 1;
          const colunaIndice = coluna - 1;
  
          if (this.tabuleiro[linhaIndice][colunaIndice] === '-') {
            this.tabuleiro[linhaIndice][colunaIndice] = this.jogadorAtual === this.jogadorUm ? 'X' : 'O';
            this.verificarVencedor();
            this.alternarJogador();
          } else {
            console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
            console.error('Posição já ocupada. Escolha outra posição.');
          }
        }
  
        readline.close();
        this.jogar();
      }
    );
  }
  

  verificarVencedor() {
  for (let linha = 0; linha < 3; linha++) {
    if (
      this.tabuleiro[linha][0] !== '-' &&
      this.tabuleiro[linha][0] === this.tabuleiro[linha][1] &&
      this.tabuleiro[linha][0] === this.tabuleiro[linha][2]
    ) {
      this.ganhador = this.jogadorAtual;
      return;
    }
  }

  for (let coluna = 0; coluna < 3; coluna++) {
    if (
      this.tabuleiro[0][coluna] !== '-' &&
      this.tabuleiro[0][coluna] === this.tabuleiro[1][coluna] &&
      this.tabuleiro[0][coluna] === this.tabuleiro[2][coluna]
    ) {
      this.ganhador = this.jogadorAtual;
      return;
    }
  }

  if (
    this.tabuleiro[0][0] !== '-' &&
    this.tabuleiro[0][0] === this.tabuleiro[1][1] &&
    this.tabuleiro[0][0] === this.tabuleiro[2][2]
  ) {
    this.ganhador = this.jogadorAtual;
    return;
  }
  if (
    this.tabuleiro[0][2] !== '-' &&
    this.tabuleiro[0][2] === this.tabuleiro[1][1] &&
    this.tabuleiro[0][2] === this.tabuleiro[2][0]
  ) {
    this.ganhador = this.jogadorAtual;
    return;
  }
  }

  alternarJogador() {
    this.jogadorAtual = this.jogadorAtual === this.jogadorUm ? this.jogadorDois : this.jogadorUm;
  }
}

module.exports = Jogo;
