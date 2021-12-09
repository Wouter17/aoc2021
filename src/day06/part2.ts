import * as fs from 'fs';

const text: string = fs.readFileSync('./src/day06/input.txt', 'utf-8');
const startingFish: number[] = text.split(',').map(Number);

const fish = new Array(9).fill(0);

startingFish.forEach((element) => {
    fish[element]++;
});

for (let i = 0; i < 256; i++) {
    const tmp = fish[0];
    for (let j = 0; j < fish.length - 1; j++) {
        fish[j] = fish[j + 1];
    }
    fish[6] += tmp;
    fish[8] = tmp;
}

export default fish.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
);
