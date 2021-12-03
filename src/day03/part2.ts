import fs from 'fs';

const calculateFrequency = (arr: string[], pos: number) => {
    return arr.reduce(
        (prev, current) => Number(prev) + +(current.charAt(pos) === '1'),
        0
    );
};

let text: any = fs.readFileSync('./values.txt', 'utf-8');
text = text.split(/\r?\n/);

let filterDigit = 0;
let filter: string;
let oxygenText: string[] = text;
while (oxygenText.length > 1) {
    filter =
        calculateFrequency(oxygenText, filterDigit) >= oxygenText.length / 2 ? '1' : '0';
    oxygenText = oxygenText.filter((value) => value.charAt(filterDigit) === filter);
    filterDigit++;
}
const oxygenFinal = parseInt(oxygenText[0], 2);

filterDigit = 0;
let co2Text: string[] = text;
while (co2Text.length > 1) {
    filter = calculateFrequency(co2Text, filterDigit) < co2Text.length / 2 ? '1' : '0';
    co2Text = co2Text.filter((value) => value.charAt(filterDigit) === filter);
    filterDigit++;
}
const co2Final = parseInt(co2Text[0], 2);
console.log(oxygenFinal * co2Final);
