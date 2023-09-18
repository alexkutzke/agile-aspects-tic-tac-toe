export function criarJogo() {
    return Array(9).fill(null);
  }
  
  export function fazerJogada(jogada, index, jogador) {
    if (!jogada[index] && !vencedor(jogada)) {
      jogada[index] = jogador;
    }
  }
  
  export function vencedor(jogada) {
    const linhasValidas = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
}
  
    //ver como faço para verificar as jogadas de cada jogador
