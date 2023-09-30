import {apresentaJogoDaVelha, validaJogada, insereJogada, checkVitoria, varrePosicoesDeVitoria, terminaJogo} from './';


describe('NotMainFuntion', () => {
    describe('testando apresentar Jogo da Velha', () => {
        test('Jogo inicial', () => {
            expect(apresentaJogoDaVelha([0, 1, 2, 3, 4, 5, 6, 7, 8])).toEqual(`-------------- \n Jogo da velha \n \n (0) (1) (2) \n (3) (4) (5) \n (6) (7) (8) --------------`);
        });
        test('Inserindo dado aleatorio na matriz', () => {
            expect(apresentaJogoDaVelha([0, 1, 'X', 'O', 4, 5, 6, 7, 8])).toEqual(`-------------- \n Jogo da velha \n \n (0) (1) (X) \n (O) (4) (5) \n (6) (7) (8) --------------`);
        });
    });

    describe('teste valida jogada', () =>{
        test('testando inserção de posição já existente', () => {
            expect( validaJogada([0,1],[4],1)).toEqual(false)
        });
        test('testando inserção válida', () => {
            expect( validaJogada([0,3],[4],1)).toEqual(true)
        });
        test('testando inserção inválida de posição não existente', () => {
            expect( validaJogada([0,3],[4],9)).toEqual(false)
        });
        test('testando inserção inválida de float', () => {
            expect( validaJogada([0,3],[4],4.6)).toEqual(false)
        });
        test('testando inserção inválida de string', () => {
            expect( validaJogada([0,3],[4],'quero que amazônia exploda')).toEqual(false)
        });
        test('testando inserção inválida de vazio', () => {
            expect( validaJogada([0,3],[4],)).toEqual(false)
        });
    });

    describe('teste inserção de jogada', () =>{
        test('testando inserção valida', () => {
            expect( insereJogada(2, [0,1], 'X', ['X', 'X', 2, 3, 4, 5, 6, 7, 8])).toEqual([0,1,2])
        });
        test('testando inserção valida', () => {
            expect( insereJogada(2, [0,6], 'O', ['O', 'X', 2, 3, 4, 5, 'O', 7, 8])).toEqual([0,6,2])
        });
        
    });
    describe('teste checagem de vitória', () =>{
        test('testando vitória [0,1,2]', () => {
            expect(checkVitoria([0,1,2], 'X', 4)).toEqual(true)
        });
        test('testando vitória', () => {
            expect(checkVitoria([3, 4, 5], 'X', 4)).toEqual(true)
        });
        test('testando vitória [6, 7, 8]', () => {
            expect(checkVitoria([6, 7, 8], 'X', 4)).toEqual(true)
        });
        test('testando vitória', () => {
            expect(checkVitoria([0,1,2], 'X', 4)).toEqual(true)
        });
        test('testando não vitória', () => {
            expect(checkVitoria([0,1,3], 'X', 4)).toEqual(false)
        });
        
    });
    describe('teste checagem de função vitória', () =>{
        test('testando vitória [0,1,2]', () => {
            expect(varrePosicoesDeVitoria([
                [0, 1, 2],
                [3, 4, 5], 
                [6, 7, 8], 
                [0, 3, 6], 
                [1, 4, 7], 
                [2, 5, 8], 
                [0, 4, 8], 
                [2, 4, 6]
            ], [0,1,2])).toEqual(true)
        });        
        test('testando não vitória [0,1,3]', () => {
            expect(varrePosicoesDeVitoria([
                [0, 1, 2],
                [3, 4, 5], 
                [6, 7, 8], 
                [0, 3, 6], 
                [1, 4, 7], 
                [2, 5, 8], 
                [0, 4, 8], 
                [2, 4, 6]
            ], [0,1,3])).toEqual(false)
        });        
    });
    describe('teste de terminologia de jogo', () =>{
        test('testando fim de jogo', () => {
            expect(terminaJogo(true, 'X')).toEqual(true)
        });
        test('testando continua jogo', () => {
            expect(terminaJogo(false, 'O')).toEqual(false)
        });     
    });

});
