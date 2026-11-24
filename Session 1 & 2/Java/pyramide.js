let Hauteur = 5;

if (Hauteur > 0) {
    for (let ligne = 1; ligne <= Hauteur; ligne++) {
        let ligneTexte = "";
        for (let s = 1; s <= Hauteur - ligne; s++) {
            ligneTexte = ligneTexte + " ";
        }
        for (let e = 1; e <= (2 * ligne) - 1; e++) {
            ligneTexte = ligneTexte + "*";
        }
        console.log(ligneTexte);
    }
} else {
    console.log("Hauteur Invalide.");
}