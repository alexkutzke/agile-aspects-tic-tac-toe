//Feito por Matheus da Rocha Schelbauer e Mateus Lodi
import read from "readline-sync";


function apresentaJogo() {
    var posicoesJogador;
    let matrizDaVelha = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    let posicoesX = [];
    let posicoesO = [];
    let contadorDeJogadas = 0;
    let novaPosicao;
    let jogador = 'X';
    let jogoTerminou = false;
    
    while (!jogoTerminou) {


        console.log(apresentaJogoDaVelha(matrizDaVelha)); 

        if (contadorDeJogadas%2 == 0) {
            jogador = 'X';
            posicoesJogador = posicoesX;
        }
        else{
            jogador = 'O';
            posicoesJogador = posicoesO;
        }

        novaPosicao = perguntaJogada(jogador);
        
        while (!validaJogada(posicoesX, posicoesO, novaPosicao)) {
            novaPosicao = perguntaJogada(jogador)
        }
        
        insereJogada (novaPosicao, posicoesJogador, jogador,matrizDaVelha);

        jogoTerminou = checkVitoria(posicoesJogador, jogador, contadorDeJogadas);

        console.log(`Xpos ${posicoesX}`)
        console.log(`Opos ${posicoesO}`)

        contadorDeJogadas++;
    }
}

function apresentaJogoDaVelha(matrizDaVelha) {
    return `-------------- \n Jogo da velha \n \n (${matrizDaVelha[0]}) (${matrizDaVelha[1]}) (${matrizDaVelha[2]}) \n (${matrizDaVelha[3]}) (${matrizDaVelha[4]}) (${matrizDaVelha[5]}) \n (${matrizDaVelha[6]}) (${matrizDaVelha[7]}) (${matrizDaVelha[8]}) --------------`;
}

function validaJogada(posicoesX,posicoesO,novaPosicao) {

    if (posicoesX.includes(novaPosicao) || posicoesO.includes(novaPosicao)) {
        console.log (`A posicao ${novaPosicao} ja foi utilizada, por favor selecione uma posicao vaga`);
        return false;
    } else if (!Number.isInteger(novaPosicao) || novaPosicao < 0 || novaPosicao > 8) {
        console.log (`O numero ${novaPosicao} apresentado e invalido!`);
        return false;
    } else {
        return true;
    }    
}

function perguntaJogada(jogadelu){
    return Number(read.question (`Escolha uma posicao vaga para marcar ${jogadelu}:`));
}

function insereJogada(posicao, posicoesJogador, jogador, matrizDaVelha) {
    posicoesJogador.push(posicao);
    matrizDaVelha[posicao] = jogador;
    console.log(`Você escolheu para marcar ${jogador} na posição ${posicao}`);
    return posicoesJogador;
}

function checkVitoria(posicoesJogadorAtual, jogador, contadorDeJogadas) {
    
    const posicoesDeVitoria = [
        [0, 1, 2],
        [3, 4, 5], 
        [6, 7, 8], 
        [0, 3, 6], 
        [1, 4, 7], 
        [2, 5, 8], 
        [0, 4, 8], 
        [2, 4, 6]
    ]

    var jogoTerminou = varrePosicoesDeVitoria(posicoesDeVitoria, posicoesJogadorAtual, jogador);
    console.log(jogoTerminou);
    if (terminaJogo(jogoTerminou, jogador)) {
    }else if (contadorDeJogadas > 7){
        console.log(`Deu velha!`);
        jogoTerminou = true;
    }
    return jogoTerminou;
}

function varrePosicoesDeVitoria(posicoesDeVitoria, posicoesJogadorAtual){
    var jogoTerminou = false;
    for (let index = 0; index < posicoesDeVitoria.length; index++) {
        jogoTerminou = posicoesDeVitoria[index].every(function(valor) {
    
            return posicoesJogadorAtual.indexOf(valor) >= 0;
        });

        if(jogoTerminou){
            break;
        }
    }
    return jogoTerminou;
}

function terminaJogo(jogoTerminou, jogador){
    if(jogoTerminou){
        console.log(`O jogo terminou, ${jogador} venceu!`)
        return true;
    }
    return false
}

export { apresentaJogoDaVelha, validaJogada, insereJogada, checkVitoria, varrePosicoesDeVitoria, terminaJogo}

//Para executar basta descomentar 
//apresentaJogo();

