import * as fs from 'fs';

let text: any = fs.readFileSync('./src/day05/input.txt', 'utf-8');
text = text.split(/\r?\n/);

const grid = new Array(999).fill(0).map(() => Array(999).fill(0));

text.forEach((line: string) => {
    const matches = line.match(/\w+/g) || [];
    const parts: number[] = matches.map(Number);

    if (!(parts[0] === parts[2] || parts[1] === parts[3])) return;

    let x1, x2, y1, y2;
    if (parts[0] >= parts[2]) {
        x1 = parts[0];
        x2 = parts[2];
    } else {
        x1 = parts[2];
        x2 = parts[0];
    }
    if (parts[1] >= parts[3]) {
        y1 = parts[1];
        y2 = parts[3];
    } else {
        y1 = parts[3];
        y2 = parts[1];
    }

    for (let i = x2; i <= x1; i++) {
        for (let j = y2; j <= y1; j++) {
            grid[i][j] = grid[i][j] + 1;
        }
    }
});

const filteredGrid = grid
    .reduce((previousValue, currentValue) => previousValue.concat(currentValue), [])
    .filter((value) => value > 1);

export default filteredGrid.length;
