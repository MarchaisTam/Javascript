/**
 * Dans le tableau suivant
 * Faite une recherche d'index sur james (le retour doit être un number)
 * Ajouter une personne à la fin du tableau
 * enfin boucler sur le tableau pour afficher toutes les entrées
 */
let jamesPosition = arrOfHumans.indexOf("james");
console.log(arrOfHumans[jamesPosition]);
arrOfHumans.push("boby");
arrOfHumans.forEach(human => {
    console.log(human);
    console.log(arrOfHumans.indexOf(human));
});



//Exercice 1 
//Retournez le un tableau contenant le double de chaque entrée
//[2, 4, 6, 8, 10] 
//Exo 2 
//retourner les entrée pair de votre tableau
//const evenArr = ???
//retourner les entrée impair de votre tableau
//const oddArr = ???
//Exo 3 
//retouner la valeur maximal de votre tableau
//maxValueArr = ???
//Retourner la valeur minimal de votre tableau
//minValueArr = ???
//Exo 4
//retourner la somme de toutes les entrée du tableau
//const sumValueArr = ???

//exo1
const someArr = [1, 2, 3, 4, 5];
const foisDeux = someArr.map(x => x * 2);
console.table(someArr);
console.table(foisDeux);

//exo2
const isImpair = someArr.filter(x => x%2 !== 0);
console.table(isImpair);

const isPair = someArr.filter(x => x%2 == 0);
console.table(isPair);

//exo3
function isMax(array) {
    let nbMax = 0;
    array.forEach(element => {
        if (element > nbMax) {
            nbMax = element;
        }
    });
    return nbMax;
}
//let max = someArr.filter(isMax(someArr));

//exo4
const initialValue = 0;
const sumValueArr = someArr.reduce(
    (previousValue, currentValue) => previousValue + currentValue, initialValue);

console.log(sumValueArr);
// expected output: 10


// Déclarer une variable globale
// Afficher la 
// Déclarer une variable dans une fonction
// Afficher la 
// Déclarer une variable dans une boucle while
// Avec var afficher la à l’extérieur 
// Avec let afficher la à l’extérieur
let a = 1;
console.log(a);

function b () {
    var c = 2;
    console.log(c);
}
//console.log(c);

if (a == 1) {
    let d = 3;
    console.log(a);
}
console.log(a);

