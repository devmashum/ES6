// const difference = (x, y) => x - y;
// const sum = difference(100, 1);
// console.log(sum);

const doMath = (x, y, z) => {
    const sum = x + y + z;
    const mult = x * y * z;
    // const abc = (x - y) * z;
    // const bcn = x * (y + z);
    const result = sum + mult;

    return result;
}

const input = doMath(3, 3, 3);

console.log(input);