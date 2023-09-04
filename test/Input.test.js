import Game from '../model/Game.js'
import Input from '../model/Input.js'


test("Function isNumber should return true for a integer input",
    () => { expect(Input.isNumber(1)).
    toEqual(true);
})

test("Function isNumber should return false if a input is not a integer",
    () => { expect(Input.isNumber("A")).
    toEqual(false);
})

test("Function isInRange should return true for a limit valid input [0-8]",
    () => { expect(Input.isInRange(1)).
    toEqual(true);
})

test("Function isInRange should return false for a input above limit [0-8]",
    () => { expect(Input.isInRange(-1)).
    toEqual(false);
})

test("Function isInRange should return false for a input below limit [0-8]",
    () => { expect(Input.isInRange(9)).
    toEqual(false);
})

test("Function isLocationEmpty should return true for a input in a null spot",
    () => { let game = new Game()
    game.board = [
        null,null,null,
        null,null,null,
        null,null,null,
    ]
    expect(Input.isLocationEmpty(0, game)).
    toEqual(true);
})

test("Function isLocationEmpty should return false for a input in a not null spot",
    () => { let game = new Game()
    game.board = [
        'X',null,null,
        null,null,null,
        null,null,null,
    ]
    expect(Input.isLocationEmpty(0, game)).
    toEqual(false);
})