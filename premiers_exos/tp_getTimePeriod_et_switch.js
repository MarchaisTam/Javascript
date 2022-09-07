/* Créez une fonction qui affiche « c’est le matin » si l’heure est inférieur à midi,
« c’est l’après midi » si l’heure est entre 12h et 18h et « c’est le soir » si l’heure
est au dessus */

let heure = prompt("Quelle heure est-t-il ?");

function getTimePeriod(heure){
    if(heure < 12){
        console.log("c'est le matin");
    }else if(heure >= 12 && heure <= 18){
        console.log("c'est l'après midi");
    }else{
        console.log("c'est les soir");
    }
}

getTimePeriod(heure); 



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


let userName = prompt("quel est votre nom ?")
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
userAge < 18 ? console.log("mineur"): console.log("majeur");

