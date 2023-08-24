const details = {
    name: 'faisal',
    age: 32,
    height: 1.79,
}

// const keys = Object.keys(details) + Object.values(details);

const keys = Object.keys(details);
const values = Object.values(details);
console.log(keys);
console.log(values);





Object.freeze(age);
console.log(details);