import * as fs from 'fs';

let text: any = fs.readFileSync('./src/day01/input.txt', 'utf-8');
text = text.split(/\r?\n/);
text = text.map(Number);

let total = 0;

for (let i = 3; i < text.length; i++) {
    if (text[i] > text[i - 3]) {
        total++;
    }
}

export default total;
