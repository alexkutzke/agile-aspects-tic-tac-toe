import * as readline from 'readline';

class Input {

    static readAndValidateInput(game) {
        return new Promise((resolve) => {
            const inputReader = readline.createInterface({
                input: process.stdin,
                output: process.stdout
            });

            const readInput = () => {
                inputReader.question('Choose a location: ', (input) => {
                    if (!this.isNumber(input)){
                        console.log('Invalid input. Please enter a number');
                        readInput()
                    } else if (!this.isInRange(input)){
                        console.log('Invalid value. Please enter a number between 0 and 8')
                        readInput()
                    } else if (!this.isLocationEmpty(input, game)){
                        console.log('Invalid location. Place already taken by another player')
                        readInput()
                    } else {
                        inputReader.close();
                        resolve(input);
                    }

                });
            };
            readInput();
        })
    }

    static isNumber(input){
        return !isNaN(input);
    }

    static isInRange(input){
        let lowerBound = 0;
        let upperBound = 8;
        return input >= lowerBound && input <= upperBound;
    }

    static isLocationEmpty(input, game){
        return game.board[input] == null;
    }

}

export default Input;