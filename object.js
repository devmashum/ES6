const products = [
    { id: 1, name: 'lenovo', price: 65000 },
    { id: 2, name: 'Samsung', price: 125000 },
    { id: 3, name: 'Nokia', price: 35000 },
    { id: 4, name: 'Apple', price: 165000 },
    { id: 5, name: 'LG', price: 64000 },
    { id: 6, name: 'Walton', price: 5000 }
]
const prices = products.map(a => a.price * 1000);
const names = products.map(a => a.name);


console.log(names);
console.log(prices);
