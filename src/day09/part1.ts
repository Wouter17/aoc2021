import * as fs from 'fs';

let text: any = fs.readFileSync('./src/day09/input.txt', 'utf-8');
text = text.split(/\r?\n/);
text = text.map((element: string) => element.split('').map(Number));

const lowpoints = [];

for (let i = 0; i < text.length; i++) {
    for (let j = 0; j < text[i].length; j++) {
        if (
            text[i][j] <
                (text[i - 1] === undefined || text[i - 1][j] === undefined
                    ? 10
                    : text[i - 1][j]) &&
            text[i][j] <
                (text[i + 1] === undefined || text[i + 1][j] === undefined
                    ? 10
                    : text[i + 1][j]) &&
            text[i][j] < (text[i][j - 1] !== undefined ? text[i][j - 1] : 10) &&
            text[i][j] < (text[i][j + 1] !== undefined ? text[i][j + 1] : 10)
        )
            lowpoints.push(text[i][j]);
    }
}

export default lowpoints.reduce(
    (previousValue, currentValue) => previousValue + currentValue + 1,
    0
);
