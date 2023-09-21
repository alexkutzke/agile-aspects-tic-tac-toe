

function criarTabuleiro() {
  return [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' '],
  ];
}

function fazerJogada(tabuleiro, linha, coluna, jogador) {
  if (tabuleiro[linha][coluna] === ' ') {
    tabuleiro[linha][coluna] = jogador;
    return tabuleiro;
  } else {
    return null;
  }
}



function verificarVencedor(tabuleiro) {

  module.exports = {
    criarTabuleiro,
    fazerJogada,
    verificarVencedor,
  }
  };