import Game from '../model/Game.js'
import Player from '../model/Player.js'

let player;
let game;

beforeAll(() => {
    game = new Game();
    player = new Player(game);
});

test("Should instantiate a Player class object",
    () => { expect(player).
        toBeInstanceOf(Player);
})

test("Should have a string as tile attribute",
    () => { expect(player.tile).
        toEqual(expect.any(String));
})

test("Should have a 'X' as the first tile attribute",
    () => { expect(player.tile).
        toEqual("X");
})

test("Should have a Game as game attribute",
    () => { expect(player.game).
    toEqual(expect.any(Game));
})

test("Function toggleTile should change player tile between X and O",
    () => { player.toggleTile()
    expect(player.tile).
        toEqual("O");
})

test("Function toggleTile should change player tile between X and O",
    () => { player.tile = "O"
    player.toggleTile()
    expect(player.tile).
        toEqual("X");
})