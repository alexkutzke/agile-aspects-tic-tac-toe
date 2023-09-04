import Input from './Input.js'

class Player {
    constructor(gameInstance) {
        this.tile = "X"
        this.game = gameInstance;
    }

    async chooseLocation() {
        const location = await Input.readAndValidateInput(this.game)
        return location;
    }

    toggleTile() {
        this.tile = this.tile === 'X' ? 'O' : 'X';
    }
}

export default Player;