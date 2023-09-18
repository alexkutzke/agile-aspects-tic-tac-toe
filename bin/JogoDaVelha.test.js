import { criarJogo, fazerJogada, vencedor } from './JogoDaVelha';

test('cria um novo jogo vazio', () => {
  const game = criarJogo();
  expect(game).toEqual(Array(9).fill(null));
});

test('faz uma jogada e verifica o vencedor', () => {
  const game = criarJogo();
  fazerJogada(game, 0, 'X');
  fazerJogada(game, 4, 'O');
  fazerJogada(game, 1, 'X');
  fazerJogada(game, 8, 'O');
  fazerJogada(game, 2, 'X');

  const winner = vencedor(game);
  expect(winner).toBe('X');
});
