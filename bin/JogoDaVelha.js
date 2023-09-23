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
      if(this.jogadaValida(linha, coluna) === true){
        if (this.tabuleiro[linha][coluna] === "") {
          this.tabuleiro[linha][coluna] = this.jogadorAtual;
          if (this.jogadorAtual === "X") {
            this.jogadorAtual = "O";
          } else {
            this.jogadorAtual = "X";
          }
        }
      }
        return false    
    };

    jogadaValida(linha, coluna) {
      //Ver se está dentro do array
      if (linha >= 0 && linha < 3 && coluna >= 0 && coluna < 3) {
        // //Ver se o espaço ja foi preenchida 
        if (this.tabuleiro[linha][coluna] === "") {
          return true;
        }
      }
      // Se a linha ou a coluna estiverem fora do tabuleiro ou já tiver uma jogada
      return false;
    }

    
    
    jogadaValida(linha, coluna) {
      // Verifique se a linha e a coluna estão dentro dos limites do tabuleiro
      if (linha >= 0 && linha < 3 && coluna >= 0 && coluna < 3) {
        // Verifique se a célula está vazia (não foi jogada ainda)
        if (this.tabuleiro[linha][coluna] === "") {
          return true;
        }
        
        else {
          console.log("Essa célula já está ocupada.");
        }
      } else {
        console.log("Coordenadas fora dos limites do tabuleiro.");
      }
      return false; // A jogada é inválida
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    verificarVencedor(jogador) {
    // Verificar linhas
    for (let i = 0; i < 3; i++) {
      if (this.tabuleiro[i][0] == jogador && this.tabuleiro[i][1] == jogador && this.tabuleiro[i][2] === jogador) {
        return true;
      }
    }

    // Verificar colunas
    for (let j = 0; j < 3; j++) {
      if (this.tabuleiro[0][j] === jogador && this.tabuleiro[1][j] === jogador && this.tabuleiro[2][j] === jogador) {
        return true;
      }
    }

    // Verificar diagonais
    if (this.tabuleiro[0][0] == jogador && this.tabuleiro[1][1] == jogador && this.tabuleiro[2][2] == jogador) {
      return true;
    }
    if (this.tabuleiro[0][2] == jogador && this.tabuleiro[1][1] == jogador && this.tabuleiro[2][0] == jogador) {
      return true;
    }

    return false; // Se retornar false é pq deu velha!
  }

}

export default JogoDaVelha;
      
      // Verificar vitória após cada jogada
      // if (verificarVencedor(jogadorAtual)) {
      //   console.log(`Jogador ${jogadorAtual} venceu!`);
      //   reiniciarJogo();
      // } else {
      //   jogadorAtual = jogadorAtual === "X" ? "O" : "X";
      // }

  
  
    
  
  //   return false; // Nenhum vencedor encontrado
  // }
  

  
  
  