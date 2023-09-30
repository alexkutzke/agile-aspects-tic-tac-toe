import { checkWinner, isValidMove, selectPlayer } from "./index"

describe("Tic Tac Toe", () => {
    describe('testing is valid move', () => {
        test('not a valid move', () =>{
            let board = [1, 2, 3, 4, 5, 6, 7, 8, 9]
            expect(isValidMove(10)).toBe(false)
        })
    })
    describe('testing winner', () =>{
        test('there is a winner', () =>{
            expect(checkWinner()).toBe(true)
        })
    })
    describe('testing select player', () => {
        test('select next player', () => {
            expect(selectPlayer("X")).toBe("O")
        })
    })
})