// tp prompt

let question = "Entrez votre prénom : ";
let result = prompt(question);
console.log(result)
if(result.length > 10){
    alert('format invalide :trop long');
}else if(result.length < 1){
    alert('format invalide :trop court')
}else{
    alert(`Bienvenue ${result}`)
} 




/*
    Crée une variable nombre et affecte lui un chiffre ou un nombre
    console.log le type de la variable
    Convertie la variable nombre en STRING
    affiche le 
    Crée une variable chaineDeCaractere et affecte lui un texte
    affiche le 
    Convertie la variable en nombre
    affiche le
    Quel est  ton constat ?

    bonus
    Trouve trois façon de convertir une variable en string ou number
*/

let nombre = 3;
console.log(typeof nombre);
nombre = nombre.toString();
console.log(nombre);
console.log(typeof nombre);
let chaineDeCaractere = "caractères";
console.log(typeof chaineDeCaractere);
chaineDeCaractere = parseInt(chaineDeCaractere);
console.log(chaineDeCaractere);
console.log(typeof chaineDeCaractere);