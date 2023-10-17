const { init, newMove, check } = require('./script');

test('Initializes the game', () => {
  document.body.innerHTML = '
    <main>
      <h2 class="player"></h2>
      <div class="game">
        <button data-i="1"></button>
      </div>
    </main>
  ';

  init();
  const player = document.querySelector('.player');
  const button = document.querySelector('.game button');
  expect(player.innerHTML).toBe('JOGADOR DA VEZ: X');
  expect(button.innerHTML).toBe('');
});

test('Performs a move', () => {
  document.body.innerHTML = '
    <main>
      <h2 class="player"></h2>
      <div class="game">
        <button data-i="1"></button>
      </div>
    </main>
  ';

  init();
  const button = document.querySelector('.game button');
  newMove({ target: button });
  const player = document.querySelector('.player');
  expect(button.innerHTML).toBe('X');
  expect(player.innerHTML).toBe('JOGADOR DA VEZ: O');
});

test('Checks for a win', () => {
  const selected = ['X', 'O', 'X', 'O', 'X', 'O', 'O', 'X', 'O'];

  expect(check(selected)).toBe('O');
});