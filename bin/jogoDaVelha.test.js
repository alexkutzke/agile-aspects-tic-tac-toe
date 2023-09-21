const jogoDaVelha = require('../jogoDaVelha');

test('Deve criar um tabuleiro vazio', () => {
  const tabuleiro = jogoDaVelha.criarTabuleiro();
  expect(tabuleiro).toEqual([
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' '],
  ]);
});

test('Deve permitir fazer uma jogada válida', () => {
  const tabuleiro = jogoDaVelha.criarTabuleiro();
  const novoTabuleiro = jogoDaVelha.fazerJogada(tabuleiro, 0, 0, 'X');
  expect(novoTabuleiro).toEqual([
    ['X', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' '],
  ]);
});

test('Não deve permitir fazer uma jogada em uma posição ocupada', () => {
  const tabuleiro = jogoDaVelha.criarTabuleiro();
  const novoTabuleiro = jogoDaVelha.fazerJogada(tabuleiro, 0, 0, 'X');
  const mesmoTabuleiro = jogoDaVelha.fazerJogada(novoTabuleiro, 0, 0, 'O');
  expect(mesmoTabuleiro).toBe(null);
});

test('Deve verificar se há um vencedor na linha', () => {
  const tabuleiro = [
    ['X', 'X', 'X'],
    [' ', 'O', 'O'],
    [' ', ' ', ' '],
  ];
  const resultado = jogoDaVelha.verificarVencedor(tabuleiro);
  expect(resultado).toBe('X');
});

test('Deve verificar se há um vencedor na coluna', () => {
  const tabuleiro = [
    ['X', 'O', 'X'],
    ['X', 'O', 'O'],
    ['X', ' ', ' '],
  ];
  const resultado = jogoDaVelha.verificarVencedor(tabuleiro);
  expect(resultado).toBe('X');
});

test('Deve verificar se há um vencedor na diagonal', () => {
  const tabuleiro = [
    ['X', 'O', 'X'],
    ['O', 'X', 'O'],
    ['O', ' ', 'X'],
  ];
  const resultado = jogoDaVelha.verificarVencedor(tabuleiro);
  expect(resultado).toBe('X');
});

// Adicione mais testes conforme necessário.
