const players = [1, 2, 3, 4, 5]

const reduce = players.reduce((previous, current) => (previous) * (current), 1);

console.log(reduce);