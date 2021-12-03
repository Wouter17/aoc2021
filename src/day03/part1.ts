import fs from 'fs';

let text: any = fs.readFileSync('./values.txt', 'utf-8');
text = text.split(/\r?\n/);

let gamma: number[] = [];

for (let i = 0; i < text.length; i++) {
    for (let j = 0; j < text[i].length; j++) {
        if (Number(text[i].charAt(j)) === 1)
            gamma[j] ? (gamma[j] = gamma[j] + 1) : (gamma[j] = 1);
    }
}

gamma = gamma.map((value) => (value > 500 ? 1 : 0));
const gammaResult: number = parseInt(gamma.join(''), 2);

const epsilon = Math.pow(2, text[0].length) - 1 - gammaResult;

console.log(epsilon * gammaResult);
