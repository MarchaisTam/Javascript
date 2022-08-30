/**
 * Crée un tableau parcourer le avec un forof
 * afficher une valeur du tableau à chaque tour
 */
const arrOfHuman = [
    "jean",
    "emeline",
    "jean-paul",
    "sarah",
    "edouard",
    "mohamed",
    "gwendoline",
    "kamella"
];

for (const human of arrOfHuman) {
    console.log(human);
}


/**
 * Crée un tableau associatif, film réalisateur
 * Afficher deux entrée de votre tableau à l'aide d'un console.log
 */
/*
    Avec le tableau crée dans le précedent tp
    Modifié le pour avoir un tableau à deux dimension
    une premiere avec l'ensemble des films
    une seconde avec le film et son auteur (si vous ne savez pas mettez inconnus ou je ne sais pas)
    Affiché l'entrée 4 et 1
    le titre du film est TITRE
    l'auteur du film est AUTEUR
    Affiché l'ensemble 
*/

let tabAsso = [
    ["Titanic", "Avatar", "L'odysée de l'espace", "Parasite", "Shrek"],
    ["jean", "emeline", "jean-paul", "sarah", "edouard", "mohamed", "gwendoline", "kamella"]
]

//pas reussi

//Déclarer un tableau qui contient deux dimension, ajouter un troisième tableau. à l'aide de splice
//Un tableau à deux dimensions
let tab = [
    ["titi", "tata", "toto"],
    ["jiji", "jaja", "jojo"],
]; 

tab.splice(0, 0, ["yiyi","yaya", "yoyo"]);
//console.table(tab);


/**
 * Maintenant créée un autre tableau dans lequelles 
 * vous allez poussez des information 
 * Recherchez la méthode adéquate pour ajouter des information dans votre tableau
 * ajouter un prenom supplémentaire
 * affiche le résultat 
 * ajouter un nouveau tableau dans le tableau
 * affiche le résultat
 */

let tab2 = ["dede", "dodo", "didi"];
console.table(tab2);

tab2.push("dudu")
console.table(tab2);
tab2.push(["fifi","fufu","fafa"]);
console.table(tab2);

/**
 * avec le tableau present afficher les valeur à l'aide de console.table
 * Ensuite changez l'ensemble des donner et remplacer les par des fruit 
 * Utiliser splice pour changer à nouveau les valeurs du tableau par des nom la derniere
 *  entrée doit être une variable au préalablement déclarer affecter
 */
let arrOfHumans = ["john", "james", "bob", "leonard"];
console.table(arrOfHumans);
let name1 = "loulou";
arrOfHumans.splice(0, 4, "kiwi","orange", "pomme");
console.table(arrOfHumans);
arrOfHumans = ["john", "james", "bob", name1];


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

//exo4
const initialValue = 0;
const sumValueArr = someArr.reduce(
    (previousValue, currentValue) => previousValue + currentValue, initialValue);

console.log(sumValueArr);
// expected output: 10


