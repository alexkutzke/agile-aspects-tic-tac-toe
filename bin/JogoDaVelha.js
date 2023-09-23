class JogoDaVelha {
  
  constructor() {
    this.tabuleiro = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""]
    ];
    
    this.jogadorAtual = "X";
  }
  
  reiniciarJogo() {
    this.tabuleiro == [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""]
    ];
    this.jogadorAtual = "X";
  }


    fazerJogada(linha, coluna) {
      if (this.tabuleiro[linha][coluna] === "") {
        this.tabuleiro[linha][coluna] = this.jogadorAtual;
        if (this.jogadorAtual === "X") {
          this.jogadorAtual = "O";
        } else {
          this.jogadorAtual = "X";
        }
        
        console.log("Tabuleiro após a jogada:");
        this.mostrarTabuleiro();
      }
    };
    
  
    mostrarTabuleiro() {
      for (let i = 0; i < 3; i++) {
        console.log(this.tabuleiro[i].join(" | "));
        if (i < 2) {
          console.log("---------");
        }
      }
  };

}

export default JogoDaVelha;
      
      // Verificar vitória após cada jogada
      // if (verificarVencedor(jogadorAtual)) {
      //   console.log(`Jogador ${jogadorAtual} venceu!`);
      //   reiniciarJogo();
      // } else {
      //   jogadorAtual = jogadorAtual === "X" ? "O" : "X";
      // }

  
  //   verificarVencedor(jogador) {
  //   // Verificar linhas
  //   for (let i = 0; i < 3; i++) {
  //     if (this.tabuleiro[i][0] === jogador &&
  //         this.tabuleiro[i][1] === jogador &&
  //         this.tabuleiro[i][2] === jogador) {
  //       return true;
  //     }
  //   }
  //   return false; // Nenhum vencedor encontrado
  // }

  
  // verificarVencedor(jogador) {
    // Verificar linhas
    // for (let i = 0; i < 3; i++) {
    //   if (tabuleiro[i][0] == jogador && tabuleiro[i][1] == jogador && tabuleiro[i][2] === jogador) {
    //     return true
    //   }
    // }
  
    // // Verificar colunas
    // for (let j = 0; j < 3; j++) {
    //   if (tabuleiro[0][j] === jogador && tabuleiro[1][j] === jogador && tabuleiro[2][j] === jogador) {
    //     return true;
    //   }
    // }
  
    // Verificar diagonais
  //   if (tabuleiro[0][0] == jogador && tabuleiro[1][1] == jogador && tabuleiro[2][2] == jogador) {
  //     return true
  //   }
  //   if (tabuleiro[0][2] == jogador && tabuleiro[1][1] == jogador && tabuleiro[2][0] == jogador) {
  //     return true
  //   }
  
  //   return false; // Nenhum vencedor encontrado
  // }
  
  
