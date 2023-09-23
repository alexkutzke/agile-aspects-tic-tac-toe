import JogoDaVelha from "./JogoDaVelha";

describe('Jogo da velha', () => {
  describe('Verificar Jogo Novo', () => {
    test('Testes para ver se o Jogo está sendo criado', () => {
      const jogo = new JogoDaVelha();
      console.log(`Jogador Atual: ${jogo.jogadorAtual}`);
      console.log(jogo.tabuleiro)
      expect(jogo.tabuleiro).toBe([
        ['', '', ''], ['', '', ''], ['', '', '']]);
    });

    test('Testes para ver se jogadas são feitas', () => {
      const jogo = new JogoDaVelha();
      jogo.reiniciarJogo();
      jogo.fazerJogada(0, 0); // "X"
      expect(jogo.tabuleiro[0][0]).toBe("X");
    });

  });
});
    
//     test('Testes para o método de verificar vencedor linha 1', () => {
//       const jogo = new JogoDaVelha();
//       jogo.reiniciarJogo();
//       jogo.fazerJogada(0, 0); // 'X'
//       jogo.fazerJogada(0, 1); // 'X'
//       jogo.fazerJogada(0, 2); // 'X'
//       expect(jogo.verificarVencedor("X")).toBe(true);
//     });
//   });
// });



// test('Fazer uma jogada', () => {
//   reiniciarJogo();
//   fazerJogada(0, 0); // Primeira jogada, jogador 'X'
//   expect(verificarVencedor('X')).toBe(false); // Não deve haver vencedor ainda
// });



// test('Verificar vitória na diagonal 1', () => {
//   reiniciarJogo();
//   fazerJogada(0, 0); // 'X'
//   fazerJogada(0, 1); // 'O'
//   fazerJogada(1, 1); // 'X'
//   fazerJogada(0, 2); // 'O'
//   fazerJogada(2, 2); // 'X' (vitória na diagonal 1)
//   console.log(tabuleiro)
//   expect(verificarVencedor("X")).toBe(true);
// });

// test('Verificar vitória na diagonal 2', () => {
//   reiniciarJogo();
//   fazerJogada(2, 0); // 'X'
//   fazerJogada(0, 0); // 'O'
//   fazerJogada(1, 1); // 'X'
//   fazerJogada(0, 1); // 'O'
//   fazerJogada(0, 2); // 'X' (vitória na diagonal 2)
//   expect(verificarVencedor('X')).toBe(true);
// });

// test('Verificar vitória na 1ª linha', () => {
  //   reiniciarJogo();
  //   fazerJogada(0, 0); // 'X'
  //   fazerJogada(1, 0); // 'O'
  //   fazerJogada(0, 1); // 'X'
  //   fazerJogada(1, 1); // 'O'
  //   fazerJogada(0, 2); // 'X' (vitória na linha 0)
  //   expect(verificarVencedor('X')).toBe(true);
  // });

// test('Verificar vitória na 2ª linha', () => {
  //   reiniciarJogo();
  //   fazerJogada(1, 0); // 'X'
  //   fazerJogada(0, 0); // 'O'
//   fazerJogada(1, 1); // 'X'
//   fazerJogada(0, 1); // 'O'
//   fazerJogada(1, 2); // 'X' (vitória na linha 1)
//   expect(verificarVencedor()).toBe('X');
// });

// test('Verificar vitória na 3ª linha', () => {
//   reiniciarJogo();
//   fazerJogada(2, 0); // 'X'
//   fazerJogada(0, 0); // 'O'
//   fazerJogada(2, 1); // 'X'
//   fazerJogada(0, 1); // 'O'
//   fazerJogada(2, 2); // 'X' (vitória na linha 2)
//   expect(verificarVencedor()).toBe('X');
// });

// test('Verificar vitória na 1ª coluna', () => {
//   reiniciarJogo();
//   fazerJogada(0, 0); // 'X'
//   fazerJogada(0 ,1); // 'O'
//   fazerJogada(1, 0); // 'X'
//   fazerJogada(1, 1); // 'O'
//   fazerJogada(2, 0); // 'X' (vitória na coluna 0)
//   expect(verificarVencedor()).toBe('X');
// });

// test('Verificar vitória na 2ª coluna', () => {
//   reiniciarJogo();
//   fazerJogada(0, 1); // 'X'
//   fazerJogada(0, 0); // 'O'
//   fazerJogada(1, 1); // 'X'
//   fazerJogada(1, 0); // 'O'
//   fazerJogada(2, 1); // 'X' (vitória na coluna 1)
//   expect(verificarVencedor()).toBe('X');
// });

// test('Verificar vitória na 3ª coluna', () => {
//   reiniciarJogo();
//   fazerJogada(0, 2); // 'X'
//   fazerJogada(0, 0); // 'O'
//   fazerJogada(1, 2); // 'X'
//   fazerJogada(1, 0); // 'O'
//   fazerJogada(2, 2); // 'X' (vitória na coluna 2)
//   expect(verificarVencedor()).toBe('X');
// });



// test('Verificar empate', () => {
//   reiniciarJogo();
//   fazerJogada(0, 0); // 'X'
//   fazerJogada(0, 1); // 'O'
//   fazerJogada(0, 2); // 'X'
//   fazerJogada(1, 0); // 'O'
//   fazerJogada(1, 2); // 'X'
//   fazerJogada(1, 1); // 'O'
//   fazerJogada(2, 0); // 'X'
//   fazerJogada(2, 2); // 'O'
//   fazerJogada(2, 1); // 'X' (empate)
//   expect(verificarVencedor()).toBe('Empate');
// });
