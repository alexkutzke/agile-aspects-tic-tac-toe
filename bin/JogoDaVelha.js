var tabuleiro = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

let jogadorAtual = 'X';

export function fazerJogada(linha, coluna) {
  if (tabuleiro[linha][coluna] === '') {
    tabuleiro[linha][coluna] = jogadorAtual;
    
    // Verificar vitória após cada jogada
    if (verificarVencedor(jogadorAtual)) {
      console.log(`Jogador ${jogadorAtual} venceu!`);
      reiniciarJogo();
    } else {
      jogadorAtual = jogadorAtual === 'X' ? 'O' : 'X';
    }
  }
}

export function verificarVencedor(jogador) {
  // Verificar linhas
  for (let i = 0; i < 3; i++) {
    if (tabuleiro[i][0] === jogador && tabuleiro[i][1] === jogador && tabuleiro[i][2] === jogador) {
      return true;
    }
  }

  // Verificar colunas
  for (let j = 0; j < 3; j++) {
    if (tabuleiro[0][j] === jogador && tabuleiro[1][j] === jogador && tabuleiro[2][j] === jogador) {
      return true;
    }
  }

  // Verificar diagonais
  if (tabuleiro[0][0] === jogador && tabuleiro[1][1] === jogador && tabuleiro[2][2] === jogador) {
    return true;
  }
  if (tabuleiro[0][2] === jogador && tabuleiro[1][1] === jogador && tabuleiro[2][0] === jogador) {
    return true;
  }

  return false; // Nenhum vencedor encontrado
}


export function reiniciarJogo() {
  tabuleiro = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  jogadorAtual = 'X';
}