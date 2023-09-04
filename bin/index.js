import Game from '../model/Game.js'
import Player from '../model/Player.js'

function index () {
    let isOver = false;
    const game = new Game();
    const player = new Player(game);

    async function start(){
        game.drawBoard();
        if (!isOver){
            let choseLocation = await player.chooseLocation()
            game.setLocation(choseLocation, player.tile)

            player.toggleTile()
            isOver = game.isOver()
            start();
        } else {
            return;
        }
    }
    start();
}

index();






