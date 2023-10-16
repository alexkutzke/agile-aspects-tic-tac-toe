const { init, newMove, check } = require('./script');

test('Initializes the game', () => {
  document.body.innerHTML = `
    <main>
      <h2 class="currentPlayer"></h2>
      <div class="game">
        <button data-i="1"></button>
      </div>
    </main>
  `;

  init();
  const currentPlayer = document.querySelector('.currentPlayer');
  const button = document.querySelector('.game button');
  expect(currentPlayer.innerHTML).toBe('JOGADOR DA VEZ: X');
  expect(button.innerHTML).toBe('');
});

test('Performs a move', () => {
  document.body.innerHTML = `
    <main>
      <h2 class="currentPlayer"></h2>
      <div class="game">
        <button data-i="1"></button>
      </div>
    </main>
  `;

  init();
  const button = document.querySelector('.game button');
  newMove({ target: button });
  const currentPlayer = document.querySelector('.currentPlayer');
  expect(button.innerHTML).toBe('X');
  expect(currentPlayer.innerHTML).toBe('JOGADOR DA VEZ: O');
});

test('Checks for a win', () => {
  const selected = ['X', 'O', 'X', 'O', 'X', 'O', 'O', 'X', 'O'];

  expect(check(selected)).toBe('O');
});