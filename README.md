Especialização em Desenvolvimento Ágil de Software

Setor de Educação Profissional e Tecnológica - SEPT

Universidade Federal do Paraná - UFPR

---

*Aspectos Ágeis de Programação*

Prof. Alexander Robert Kutzke

# Projeto Jogo da Velha com TDD

Utilize a metodologia TDD para desenvolver um Jogo da Velha (Tic tac toe) **em modo texto**, na sequência, envie um *Pull Request* para este repositório.

Esse projeto pode ser feito em duplas. Não esqueça de identificar os integrantes da dupla nos comentários do pull request. Apenas um precisa realizar o envio da tarefa.

A interface do jogo é livre, mas deve ser em modo texto (terminal).

## Como Jogar

1. Execute o jogo utilizando um dos comandos abaixo:
    ```
    npm run tictactoe

    ou

    ./bin/index.js
    ```

    Execute os testes utilizando o comando:

    ```
    npm run test
    ```

2. O tabuleiro do jogo é apresentado com as coordenadas de linha e coluna. Por exemplo:
    ```
      0 1 2
    0 | | | 
      -----
    1 | | | 
      -----
    2 | | | 
    ```

3. O jogo começa com o jogador 1 (X). Para fazer um movimento, indique a posição onde deseja colocar o seu caractere, separando a linha e a coluna por uma vírgula. Por exemplo, para colocar o seu caractere na linha 1, coluna 2, digite `1,2` e pressione Enter.

4. O jogo continuará alternando entre os jogadores até que haja um vencedor ou o tabuleiro esteja completamente preenchido. Se alguém ganhar ou o jogo empatar, uma mensagem será exibida indicando o resultado.

5. Divirta-se!

Este repositório já está configurado para utilizar o framework [Jest](https://jestjs.io) com [Babel](https://babeljs.io).
Além disso, o projeto pode ser executado com os seguintes comandos:

