import * as fs from 'fs';

let text: any = fs.readFileSync('./src/day02/input.txt', 'utf-8');
text = text.split(/\r?\n/);

let depth = 0;
let horizontal = 0;

for (let i = 0; i < text.length; i++) {
    if (text[i].startsWith('forward')) horizontal += Number(text[i].split(' ')[1]);
    if (text[i].startsWith('up')) depth -= Number(text[i].split(' ')[1]);
    if (text[i].startsWith('down')) depth += Number(text[i].split(' ')[1]);
}

export default depth * horizontal;
