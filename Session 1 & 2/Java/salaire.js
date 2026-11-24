const prompt = require("prompt-sync")();

let nom = prompt("Nom de l'employé : ");
let salaireBase = Number(prompt("Salaire de base : "));
let heuresSupp = Number(prompt("Tarif heure supplémentaire : "));
let tarifHeureSupp = Number(prompt("Tarif d'une heure supplémentaire : "));
let prime = Number(prompt("Prime : "));

let montantHeuresSupp = heuresSupp * tarifHeureSupp;
let salaireBrut = salaireBase + montantHeuresSupp + prime;

let retenues = salaireBrut * 0.10;
let salaireNet = salaireBrut - retenues;

console.log("Employé :", nom);
console.log("Salaire de base :", salaireBase, "DHS");
console.log("Heures supplémentaires :", montantHeuresSupp, "DHS");
console.log("Salaire brut :", salaireBrut, "DHS");
console.log("Retenues :", retenues, "DHS");
console.log("Salaire net :", salaireNet, "DHS");