let compteur = 0;
let somme = 0;

for (let nombre = 1; nombre <= 20; nombre++){
    if (nombre % 2 === 0){
        compteur = compteur + 1;
        somme = somme + nombre;
    }
}

console.log("Nombre de pairs : " , compteur);
console.log("Nombre de pairs : " , somme);