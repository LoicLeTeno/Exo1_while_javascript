// ## 1 
let eleves = ["Alexis", "Andy", "Charles", "Dorian", "Farhad", "Ilyas", "Junior", "Kev", "Loïc", "Mihai", "Oussama"];
let classe = [];
let compt = 0;

// ## 2
let choixMax = +prompt("Attention, covid nombre étudiant limités, choisie !");

while (classe.length < choixMax) {
    classe.push(eleves[compt]);
    compt++;
}

console.log(classe);