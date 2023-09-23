import JogoDaVelha from "./JogoDaVelha";

describe('Jogo da velha', () => {

  describe('Verificar Jogo Novo', () => {
    test('Testes para ver se o Jogo está sendo criado', () => {
      const jogo = new JogoDaVelha();
      expect(jogo.tabuleiro).toStrictEqual([["", "", ""], ["", "", ""], ["", "", ""]]);
    });
    test('Testes para ver se jogadas são feitas [0][0]', () => {
      const jogo = new JogoDaVelha();
      jogo.reiniciarJogo();
      jogo.fazerJogada(0, 0); // 'X'
      expect(jogo.tabuleiro[0][0]).toBe("X");
    });
    test('Testes para ver se jogadas são feitas [1][1]', () => {
      const jogo = new JogoDaVelha();
      jogo.reiniciarJogo();
      jogo.fazerJogada(1, 1); // 'X'
      expect(jogo.tabuleiro[1][1]).toBe("X");
    });
    test('Testes para ver se jogadas são feitas [2][2]', () => {
      const jogo = new JogoDaVelha();
      jogo.reiniciarJogo();
      jogo.fazerJogada(2, 2); // 'X'
      expect(jogo.tabuleiro[2][2]).toBe("X");
    });
  });

  describe('Verificar se jogadas são feitas alternando o jogador', () => {
    test('Testes para ver está alterando', () => {
      const jogo = new JogoDaVelha();
      jogo.reiniciarJogo();
      jogo.fazerJogada(0, 0); // 'X'
      jogo.fazerJogada(0, 1); // 'O'
      jogo.fazerJogada(1, 1); // 'X'
      jogo.fazerJogada(0, 2); // 'O'
      jogo.fazerJogada(2, 2); // 'X'
      expect(jogo.tabuleiro[0][0]).toBe("X");
      expect(jogo.tabuleiro[0][1]).toBe("O");
      expect(jogo.tabuleiro[1][1]).toBe("X");
      expect(jogo.tabuleiro[0][2]).toBe("O");
      expect(jogo.tabuleiro[2][2]).toBe("X");
    });
  });

  describe('Verificar se jogadas são válidas', () => {
    test('Jogadas inválida - Fora do array', () => {
      const jogo = new JogoDaVelha();
      jogo.reiniciarJogo();
      jogo.fazerJogada(5, 5); // 'X'
      expect(jogo.jogadaValida()).toBe(false);
    });

    test('Jogadas inválida - Mesma posição', () => {
      const jogo = new JogoDaVelha();
      jogo.reiniciarJogo();
      jogo.fazerJogada(0, 0); // 'X'
      jogo.fazerJogada(0, 0); // 'O'
      expect(jogo.jogadaValida()).toBe(false);
    });
  });

  describe('Verificar vencedor', () => {
    //Linhas
    test('Verificar vitória na linha 0', () => {
      const jogo = new JogoDaVelha();
      jogo.reiniciarJogo();
      jogo.fazerJogada(0, 0); // 'X'
      jogo.fazerJogada(1, 0); // 'O'
      jogo.fazerJogada(0, 1); // 'X'
      jogo.fazerJogada(1, 1); // 'O'
      jogo.fazerJogada(0, 2); // 'X' (vitória na linha 0)
      // console.log(jogo.tabuleiro)
      expect(jogo.verificarVencedor("X")).toBe(true);
    });

    test('Verificar vitória na linha 1', () => {
      const jogo = new JogoDaVelha();
      jogo.reiniciarJogo();
      jogo.fazerJogada(1, 0); // 'X'
      jogo.fazerJogada(0, 0); // 'O'
      jogo.fazerJogada(1, 1); // 'X'
      jogo.fazerJogada(0, 1); // 'O'
      jogo.fazerJogada(1, 2); // 'X' (vitória na linha 1)
      // console.log(jogo.tabuleiro)
      expect(jogo.verificarVencedor("X")).toBe(true);
    });

    test('Verificar vitória na linha 2', () => {
      const jogo = new JogoDaVelha();
      jogo.reiniciarJogo();
      jogo.fazerJogada(2, 0); // 'X'
      jogo.fazerJogada(0, 0); // 'O'
      jogo.fazerJogada(2, 1); // 'X'
      jogo.fazerJogada(0, 1); // 'O'
      jogo.fazerJogada(2, 2); // 'X' (vitória na linha 2)
      // console.log(jogo.tabuleiro)
      expect(jogo.verificarVencedor("X")).toBe(true);
    });

    //Colunas
    test('Verificar vitória na coluna 0', () => {
      const jogo = new JogoDaVelha();
      jogo.reiniciarJogo();
      jogo.fazerJogada(0, 0); // 'X'
      jogo.fazerJogada(0, 1); // 'O'
      jogo.fazerJogada(1, 0); // 'X'
      jogo.fazerJogada(1, 1); // 'O'
      jogo.fazerJogada(2, 0); // 'X' (vitória na coluna 2)
      // console.log(jogo.tabuleiro)
      expect(jogo.verificarVencedor("X")).toBe(true);
    });

    test('Verificar vitória na coluna 1', () => {
      const jogo = new JogoDaVelha();
      jogo.reiniciarJogo();
      jogo.fazerJogada(0, 1); // 'X'
      jogo.fazerJogada(0, 0); // 'O'
      jogo.fazerJogada(1, 1); // 'X'
      jogo.fazerJogada(2, 2); // 'O'
      jogo.fazerJogada(2, 1); // 'X' (vitória na coluna 2)
      // console.log(jogo.tabuleiro)
      expect(jogo.verificarVencedor("X")).toBe(true);
    });

    test('Verificar vitória na coluna 2', () => {
      const jogo = new JogoDaVelha();
      jogo.reiniciarJogo();
      jogo.fazerJogada(0, 2); // 'X'
      jogo.fazerJogada(0, 0); // 'O'
      jogo.fazerJogada(1, 2); // 'X'
      jogo.fazerJogada(0, 1); // 'O'
      jogo.fazerJogada(2, 2); // 'X' (vitória na coluna 2)
      // console.log(jogo.tabuleiro)
      expect(jogo.verificarVencedor("X")).toBe(true);
    });

    //Diagonais
    test('Verificar vitória na diagonal 1', () => {
      const jogo = new JogoDaVelha();
      jogo.reiniciarJogo();
      jogo.fazerJogada(0, 0); // 'X'
      jogo.fazerJogada(0, 1); // 'O'
      jogo.fazerJogada(1, 1); // 'X'
      jogo.fazerJogada(0, 2); // 'O'
      jogo.fazerJogada(2, 2); // 'X' (vitória na diagonal 1)
      // console.log(jogo.tabuleiro)
      expect(jogo.verificarVencedor("X")).toBe(true);
    });

    test('Verificar vitória na diagonal 2', () => {
      const jogo = new JogoDaVelha();
      jogo.reiniciarJogo();
      jogo.fazerJogada(2, 0); // 'X'
      jogo.fazerJogada(0, 0); // 'O'
      jogo.fazerJogada(1, 1); // 'X'
      jogo.fazerJogada(0, 1); // 'O'
      jogo.fazerJogada(0, 2); // 'X' (vitória na diagonal 2)
      // console.log(jogo.tabuleiro)
      expect(jogo.verificarVencedor('X')).toBe(true);
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
