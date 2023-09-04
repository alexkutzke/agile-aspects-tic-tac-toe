import Game from '../model/Game.js'


let game;

beforeAll(() => {
    game = new Game();
});

test("Should instantiate a Game class object",
    () => { expect(game).
    toBeInstanceOf(Game);
})

test("Should have a array as a game board attribute",
    () => { expect(game.board).
    toEqual(expect.any(Array));
})

test("Should have a drawBoard method",
    () => { expect(game.drawBoard).
    toBeDefined();
})

test("Function setLocation should set a tile in the given location",
    () => { game.setLocation(0, 'X')
        expect(game.board[0]).toEqual('X')
})

test("Function setLocation should set a tile in the given location",
    () => { game.setLocation(1, 'O')
        expect(game.board[1]).toEqual('O')
})

test("Function setLocation should set a tile in the given location",
    () => { game.setLocation(2, 'X')
        expect(game.board[2]).toEqual('X')
})

test("Function isOver should return true to game over with a winning combination 1",
    () => { game.board = [
                    'X','X','X',
                    'O','O', null,
                    null,null,null]
    expect(game.isOver()).
    toEqual(true)
})

test("Function isOver should return true to game over with a winning combination 2",
    () => { game.board = [
                    'X','O','O',
                    'X','O','O',
                    'X',null,null]
    expect(game.isOver()).
    toEqual(true)
})

test("Function isOver should return true to game over with a winning combination 3",
    () => { game.board = [
                    'X','O','X',
                    'X','X','O',
                    'O','O','O']
    expect(game.isOver()).
    toEqual(true)
})

test("Function isOver should return true to game over with a draw",
    () => { game.board = [
                    'X','O','X',
                    'X','X','O',
                    'O','X','O']
    expect(game.isOver()).
    toEqual(true)
})

test("Function isOver should return false to game not over with a winning or draw 1",
    () => { game.board = [
                    'X',null,'O',
                    'X','O',null,
                    null,null,null]
    expect(game.isOver()).
    toEqual(false)
})

test("Function isOver should return false to game not over with a winning or draw 2",
    () => { game.board = [
                    'X','X','O',
                    'X','X','O',
                    'O','O',null]
    expect(game.isOver()).
    toEqual(false)
})

test("Function isOver should return false to game not over with a winning or draw 3",
    () => { game.board = [
                    'X',null,null,
                    null,null,null,
                    null,null,null]
    expect(game.isOver()).
    toEqual(false)
})