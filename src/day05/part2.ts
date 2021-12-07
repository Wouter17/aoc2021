import * as fs from 'fs';

let text: any = fs.readFileSync('./src/day05/input.txt', 'utf-8');
text = text.split(/\r?\n/);

const grid = new Array(999).fill(0).map(() => Array(999).fill(0));

text.forEach((line: string) => {
    const matches = line.match(/\w+/g) || [];
    const parts: number[] = matches.map(Number);

    if (
        !(
            parts[0] === parts[2] ||
            parts[1] === parts[3] ||
            Math.abs(parts[0] - parts[1]) === Math.abs(parts[2] - parts[3]) ||
            Math.abs(parts[0] - parts[2]) === Math.abs(parts[1] - parts[3])
        )
    )
        return;

    let x1, x2, y1, y2, factor;
    let reverse = false;
    if (parts[0] >= parts[2]) {
        x1 = parts[0];
        x2 = parts[2];
        reverse = true;
    } else {
        x1 = parts[2];
        x2 = parts[0];
    }
    if (parts[1] >= parts[3]) {
        y1 = parts[1];
        y2 = parts[3];
        reverse = !reverse;
    } else {
        y1 = parts[3];
        y2 = parts[1];
    }
    if ((parts[1] - parts[3]) / (parts[0] - parts[2]) > 0) {
        factor = 1;
    } else {
        factor = -1;
    }

    if (x1 === x2) {
        for (let i = y2; i <= y1; i++) {
            grid[i][x1]++;
        }
    } else if (y1 === y2) {
        for (let i = x2; i <= x1; i++) {
            grid[y1][i]++;
        }
    } else {
        for (let i = 0; i <= x1 - x2; i++) {
            grid[(reverse ? y1 : y2) + i * factor][x2 + i]++;
        }
    }
});

const filteredGrid = grid
    .reduce((previousValue, currentValue) => previousValue.concat(currentValue), [])
    .filter((value) => value > 1);

export default filteredGrid.length;
