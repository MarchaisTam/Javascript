//fonction hello world ^^

function helloWorld(){
    console.log('Hello world !');
}
helloWorld();

function helloWorld2(message){
    console.log(message);
}
helloWorld2("coucou"); 





/* Créez une fonction permettant d’afficher l’IMC d’une personne, en rentrant comme paramètre
son poids et sa taille.
Pour info : La formule de l’IMC est poids(en kg) / taille²(en mètre).
L’utilisateur devra rentré son poids en kg, donc à vous de faire la conversion cm->mètre, de
faire le calcul nécessaire pour l’IMC et d’afficher le résultat arrondi à 1 chiffre après la virgule.
 */

    let poids = prompt("Quel est votre poids en kg ?");
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

getImc(poids,taille);  