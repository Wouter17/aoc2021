import * as fs from 'fs';

let text: any = fs.readFileSync('./src/day08/input.txt', 'utf-8');
text = text.split(/\r?\n/).map((element: string) => element.split(' | '));
text = text.map((element: string[]) => element.map((value: string) => value.split(' ')));

const count: number[] = text.map((element: string[][]) =>
    element[1].reduce((previousValue, currentValue) => {
        if ([2, 4, 3, 7].indexOf(currentValue.length) > -1) {
            return previousValue + 1;
        }
        return previousValue;
    }, 0)
);

export default count.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
);
