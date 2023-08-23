function add(a, b) {
    const result = a + b;
    if (result > 10) {
        console.log('The value is grater then 10');
        return result;
    } else {
        console.log('no valid result');
    }

}

const sum = add(5, 4);

