/*Pour voir si tout vas bien jusque ici nous allons créer un calculateur en boite de dialogue
(une sorte de calculatrice simplifiée).
Objectif :
- Demandez de faire un choix entre addition – soustraction – multiplication – division
- Indice : pour un retour à la ligne « \n » tant que l’utilisateur ne choisis pas une des quatre
proposition il serait bien de répéter la question.
- Demandez de rentrer un nombre, puis un deuxieme
- Indice : Répéter la demande si un nombre n’est pas rentré, je vous laisse chercher la
fonction qui permet de checker cela.
- Crée 4 fonctions correspond aux 4 méthodes de calculs
- Selon le choix de l’utilisateur appelé la fonction correspondante
- Affichez le résultat
- Proposez à l’utilisateur de recommencer*/


let operation = "";

while(operation !== "addition" && operation !== "soustraction" && operation !== "multiplication" && operation !== "division"){
    operation = prompt("Choix entre addition – soustraction – multiplication – division");
}
console.log(operation);


let a;
while(isNaN(a) && a !== " "){
    a = parseInt(prompt("Choisissez un premier chiffre"));
}
console.log(a);



let b;
while(isNaN(b) && b !== " "){
    b = parseInt(prompt("Choisissez un deuxième chiffre"));
}
console.log(b);



function addition(a, b) {
    let res = a + b;
    alert("L'addition de " + a + " + " + b + " est égale à " + res);
}

function soustraction(a, b) {
    let res = a - b;
    alert("La soustraction " + a + " + " + b + " est égale à " + res);
}

function multiplication(a, b) {
    let res = a * b;
    alert("La multiplication de " + a + " + " + b + " est égale à " + res);
}

function division(a, b) {
    let res = a / b;
    alert("La division " + a + " + " + b + " est égale à " + res);
}

switch (operation) {
    case "addition":
        addition(a,b);
        break;
    case "soustraction":
        soustraction(a,b);
        break;
    case "multiplication":
        multiplication(a,b);
        break;
    case "division":
        division(a,b);
        break;
    default :
        alert("opération non reconnu");
}
