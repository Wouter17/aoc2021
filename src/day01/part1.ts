import fs from 'fs';

let text: any = fs.readFileSync('./values.txt', 'utf-8');
text = text.split(/\r?\n/);
text = text.map(Number);

let total = 0;

for (let i = 1; i < text.length; i++) {
    if (text[i] > text[i - 1]) {
        total++;
    }
}

console.log(total);
