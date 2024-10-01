const fruits = ["apple", "banana", "coconut"];
const upperFruits = [];

fruits.forEach(fruit => {
    upperFruits.push(fruit.toUpperCase());
});

console.log(upperFruits);