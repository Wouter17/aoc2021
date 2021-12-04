import * as fs from 'fs';

class Board {
    public horizontal: number[][];
    public vertical: number[][];
    constructor(numbers: number[][]) {
        this.horizontal = numbers;
        this.vertical = numbers[0].map((value, index) =>
            numbers.map((value) => value[index])
        );
    }

    isSolved(numbers: number[]): number[][] {
        return (
            this.horizontal.filter((value: number[]) =>
                value.every((value) => numbers.includes(value))
            ) ||
            this.vertical.filter((value: number[]) =>
                value.every((value) => numbers.includes(value))
            )
        );
    }
}

let text: any = fs.readFileSync('./src/day04/input.txt', 'utf-8');
text = text.split(/\r?\n/).filter((text: never) => text);

const numbersDraw = text[0].split(',').map(Number);

text.splice(0, 1);

const boards: Board[] = [];
let currentList: number[][] = [];
for (let i = 1; i <= text.length; i++) {
    currentList.push(text[i - 1].match(/\w+/g).map(Number));
    if (i % 5 === 0) {
        boards.push(new Board(currentList));
        currentList = [];
    }
}

let index = 1;
while (!boards.some((value) => value.isSolved(numbersDraw.slice(0, index)).length > 0)) {
    index++;
}

const solvedBoard: Board = boards.filter(
    (value) => value.isSolved(numbersDraw.slice(0, index)).length > 0
)[0];

//const solvedRow = solvedBoard.isSolved(numbersDraw.slice(0, index))[0];

const Unmarked: number[] = solvedBoard.horizontal
    .reduce((previousValue, currentValue) => previousValue.concat(currentValue), [])
    .filter((value) => !numbersDraw.slice(0, index).includes(value));

/*const sumOfUnmarked = [
    ...new Set(Unmarked.filter((value) => !numbersDraw.slice(0, index).includes(value))),
].reduce((previousValue, currentValue) => previousValue + currentValue, 0);
*/
export default Unmarked.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
) * numbersDraw[index - 1];
