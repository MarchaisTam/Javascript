//tp console log nom prenom

/* let nom = "Marchais";
let prenom ="Tam";
console.log(nom + " " + prenom); */

//tp alert et confirm 

/* alert('Attention !');
function myFunction() {
    confirm("Message de confirmation");
}
 */

// tp alerte différente en fonctionde la reponse a confirm

/* let question = "voulez vous confirmer ?";
let result = confirm(question);
if (result == true){
    alert('vous avez confirmé !');
} else {
    alert('vous refusez')
}
 */

// tp prompt

/* let question = "Entrez votre prénom : ";
let result = prompt(question);
console.log(result)
if(result.length > 10){
    alert('format invalide :trop long');
}else if(result.length < 1){
    alert('format invalide :trop court')
}else{
    alert(`Bienvenue ${result}`)
} */




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

/* let nombre = 3;
console.log(typeof nombre);
nombre = nombre.toString();
console.log(nombre);
console.log(typeof nombre);
let chaineDeCaractere = "caractères";
console.log(typeof chaineDeCaractere);
chaineDeCaractere = parseInt(chaineDeCaractere);
console.log(chaineDeCaractere);
console.log(typeof chaineDeCaractere); */





//fonction hello world ^^

/* function helloWorld(){
    console.log('Hello world !');
}
helloWorld();

function helloWorld2(message){
    console.log(message);
}
helloWorld2("coucou"); */





/* Créez une fonction permettant d’afficher l’IMC d’une personne, en rentrant comme paramètre
son poids et sa taille.
Pour info : La formule de l’IMC est poids(en kg) / taille²(en mètre).
L’utilisateur devra rentré son poids en kg, donc à vous de faire la conversion cm->mètre, de
faire le calcul nécessaire pour l’IMC et d’afficher le résultat arrondi à 1 chiffre après la virgule.
 */

  /*   let poids = prompt("Quel est votre poids en kg ?");
    let taille = prompt("Quel est votre taille en cm ?");
    poids = parseInt(poids);
    taille = parseInt(taille);
    taille = taille/100;
    console.log(poids);
    console.log(taille);
    taille = taille*taille;

function getImc(poids, taille){
    let imc = poids/taille;
    18.5 / 25 / 32
    if(imc < 18.5){
        console.log("insuffisance pondérale")
    }else if(imc >= 18.5 || imc < 25){
        console.log("")
    }else if(imc >= 25 || imc < 32){
        console.log("supoids")
    }else if(imc > 32){
        console.log("obésité morbide")
    }
    console.log(imc);
}

getImc(poids,taille);  */

/* Créez une fonction qui affiche « c’est le matin » si l’heure est inférieur à midi,
« c’est l’après midi » si l’heure est entre 12h et 18h et « c’est le soir » si l’heure
est au dessus */

/* let heure = prompt("Quelle heure est-t-il ?");

function getTimePeriod(heure){
    if(heure < 12){
        console.log("c'est le matin");
    }else if(heure >= 12 && heure <= 18){
        console.log("c'est l'après midi");
    }else{
        console.log("c'est les soir");
    }
}

getTimePeriod(heure); */



/*
    Faite une comparaison en utilisant un switch sur une variable prénom
    dans le switch vous pouvez checker 3 prénom de fille et 3 garçons
    votre programme demande un prénom
    si vous entrez un des 3 alors console log vous ete un garçon
    pareille pour fille
    sinon console log invalide ou prénom non reconnus
    comparaison insensibles a la casse

    Bonus pour une ternaire moins de 18 ans majeur : mineur

    */


/* let userName = prompt("quel est votre nom ?")
switch (userName) {
    case "john":
    case "jeanot":
    case "bob":
        console.log("garçon");
        break;
    case "lili":
    case "anne":
    case "charlotte":
        console.log("fille");
        break;
    default:
        console.log("invalide ou prénom non reconnus");
}
let userAge = prompt("quel est votre age ?");
userAge < 18 ? console.log("mineur"): console.log("majeur"); */


/*
Avec la boucle dowhile demandez un prénom jusqu'à l'obtenir
Bonus
Avec un confirm() reposer la question tant que l'utilisateur dit non 

*/

/* do{
    var nom = prompt("quel est votre prenom");
}while(nom === null || nom === "");
 */


/* Pour ce petit tp vous allez créer votre propre erreur à l’aide de « throw new Error() »
- Créez un programme qui demande à l’utilisateur de choisir entre 3 sorts (boule
de feu – trait de glace et chaine d’éclair).
- boule de feu = 40 dégats, trait de glace = 35 dégats et chaine d’éclair = 25 dégat.
- Si l’utilisateur choisis l’un de ses trois sorts, une alerte apparait disant que vous
avez choisis le « nom du sort » qui fait les dégats annoncé ci-desus.
- Si l’utilisateur choisis un sort autre que les trois ci-dessus, vous créez une erreur
et l’affichez.
« Switch case » vous sera utile pour cette exercice. */


let sort = prompt("quel sort voulez vous lancer ?")
switch (sort) {
    case "chaine d’éclair":
        alert("chaine d’éclair fait 25 dégats");
        break;
    case "boule de feu":
        alert("boule de feu fait 40 dégats");
        break;
    case "trait de glace":
        alert("trait de glace fait 35 dégats");
        break;
}