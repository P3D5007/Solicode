const prompt = require("prompt-sync")();
let x = Number (prompt("donner le nombre: "))

for(let number = 1; number <= x; number++) {
    if(x % number === 0){
        console.log(number);
    }
}