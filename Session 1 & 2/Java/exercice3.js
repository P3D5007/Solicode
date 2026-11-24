let a = 5;
let b = 99;

console.log("Avant :", a, b);

let temp = a;
a = b;
b = temp;

console.log("Après :", a, b);