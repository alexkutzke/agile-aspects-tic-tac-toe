const Jogo = require('./Jogo');

// Mock para substituir a função 'console.log' durante os testes
global.console.log = jest.fn();

describe('Jogo', () => {
  let jogo;

  beforeEach(() => {
    jogo = new Jogo();
    console.log.mockClear();
  });

  afterEach(() => {
    console.log.mockRestore();
  });

  test('Deve imprimir a matriz inicial do jogo', () => {
    jogo.jogar();

    expect(console.log).toHaveBeenNthCalledWith(3, '- - -');
    expect(console.log).toHaveBeenNthCalledWith(4, '- - -');
    expect(console.log).toHaveBeenNthCalledWith(5, '- - -');
  });

  test('Deve alternar corretamente entre os jogadores', () => {
    expect(jogo.jogadorAtual).toBe(jogo.jogadorUm);

    jogo.alternarJogador();
    expect(jogo.jogadorAtual).toBe(jogo.jogadorDois);

    jogo.alternarJogador();
    expect(jogo.jogadorAtual).toBe(jogo.jogadorUm);
  });

  test('Deve detectar um vencedor nas linhas', () => {
    jogo.tabuleiro = [
      ['X', 'X', 'X'],
      ['-', '-', '-'],
      ['-', '-', '-'],
    ];
    jogo.verificarVencedor();
    expect(jogo.ganhador).toBe(jogo.jogadorUm);
  });

  test('Deve detectar um vencedor nas colunas', () => {
    jogo.tabuleiro = [
      ['X', '-', '-'],
      ['X', '-', '-'],
      ['X', '-', '-'],
    ];
    jogo.verificarVencedor();
    expect(jogo.ganhador).toBe(jogo.jogadorUm);
  });

  test('Deve detectar um vencedor nas diagonais', () => {
    jogo.tabuleiro = [
      ['X', '-', '-'],
      ['-', 'X', '-'],
      ['-', '-', 'X'],
    ];
    jogo.verificarVencedor();
    expect(jogo.ganhador).toBe(jogo.jogadorUm);
  });
});
