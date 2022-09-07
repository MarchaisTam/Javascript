/**
 * Pour inclure nos scripts qui vont intéragir avec le DOM, nous allons les placer avant la fin de la balise
body.
- Je vous invite à chercher pourquoi placer nos balise à cette endroit et pas à un autre endroit.
- Faites un fichier js que vous incluez dans le fichier html que je vais vous donner.
- Créez et console.logguez les variables qui vont afficher : le h2, tout les « a », la div avec la
class « text ».
- Si vous utilisez querySelector et querySelectorAll constatez vous une différence ?
 */


/*let burger = document.getElementById("burger");
let burgerSelector = document.querySelector("#burger");
let h2 = document.querySelector("h2");
let a = document.querySelectorAll("a");
let text = document.querySelector(".text");
let nav = document.querySelector("nav");
let img = document.querySelector("img");*/


/* Maintenant que vous savez sélectionner des éléments vous allez pour voir les modifier.
- A l’aide de js modifier le texte du h2.
- A l’aide de js modifier le texte uniquement du deuxième a */

//h2.textContent = "Louer à Marseille vos vacances";
//a[1].textContent = "Nos bons plans";

/*
    Ajouter un h1 avant la nav dans une div
    Supprimer l'image
    */

/*let newH1 = document.createElement("div");
newH1.innerText = "nv titre";
nav.prepend(newH1);
img.remove();*/


/*
    Enlevez tout les script ajouté plus tôt
    Modifiez le style du body pour mettre un background gradient plutôt que le bleu actuel
    */

//let body = document.querySelector("body");
//body.setAttribute("style", "background: linear-gradient(#e66465, #9198e5);");

/*
- Créez une page html avec un lien et un bouton 
- A l'aide de addEventListener créz un évènement pour supprimer le lien en cliquant dessus.
- Changez le bakground color du body en survolant le bouton et faites
  qu'il redevienne blanc quand la souris quitte le bouton
- Crée une section avec un h1 dedans et un texte dans la section mais en dehors du h1
 - créez un évènement au clique du h1 qui crée une alert disant que vous
  cliquez sur le h1 et de même por la section. Que constatez vous ?
  */

/*let bouton = document.querySelector("button");
let a = document.querySelectorAll("a");


bouton.addEventListener("click", function() {
    a[3].remove();
});

bouton.addEventListener("mouseover",  function() {
    body.setAttribute("style", "background-color: red;");
});

bouton.addEventListener("mouseout",  function() {
    body.setAttribute("style", "background: linear-gradient(#e66465, #9198e5);");
});

let newSection = document.createElement("section");*/


/* Créez une fonctions permettant de générer une couleurs aléatoirement.
- Essayez de faire changer la couleur d’un bouton toutes les 2 secondes à l’aide de setInterval et de
votre fonction.
- Créez un lien permettant d’arrêter ce changement de couleur*/

/*let boutonChanger = document.querySelector(".changeColor");
let boutonStop = document.querySelector(".stopRandomColor");


boutonChanger.addEventListener("click", function() {
    setRandomColor();
});

boutonStop.addEventListener("click", function() {
    clearInterval(setRandomColor);
});

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}  

function getRandomColor2() {
    var num1 = getRandomInt(255);
    var num2 = getRandomInt(255);
    var num3 = getRandomInt(255)
    var color2 = "rgb(" + num1 + "," + num2 + "," + num3 + ")";
    return color2;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

setInterval(setRandomColor, 1000);


function setRandomColor() {
    $(".changeColor").css("background-color", getRandomColor2());
}*/


/*Voici comment va se dérouler notre Timer :
- Un bouton s’affiche sur la page proposant de « Lancer le décompte »
- L’utilisateur clique sur ce bouton, qui va lancer une fonction start(), qui s’occupera de créer
un intervalle sur la fonction decompte() toutes les secondes, pendant 10 secondes.
- La fonction decompte(), lorsqu’elle est appelée :
• Décrémentera (retirera 1) à une variable secondes, qui contient comme valeur 10
• Vérifiera si secondes est différent de 0, pour afficher dans la page le nombre de
secondes restantes
• Sinon, si secondes vaut 0, appellera la fonction stop(), qui aura pour but d’arrêter
l’intervalle*/

/*let boutonLancerDecompte = document.querySelector(".lancerDecompte");
let affichageDecompte = document.querySelector(".decompte");

decompte
let secondes = 10;

function start() {
    setInterval(decompte, 1000);
}

function stop() {
    clearInterval(decompte);
}

function decompte() {
    secondes--;
    if(secondes !== 0) {
        affichageDecompte.textContent = secondes;
    } else {
        stop();
    }
}

boutonLancerDecompte.addEventListener("click", start);*/


//SPOILER
// Voici comment va se dérouler notre bouton Spoiler :
// - Un bouton s’affiche sur la page proposant d’afficher le message
// - L’utilisateur clique sur le bouton, ce qui va activer une condition
// • La variable hidden vaut true ? Dans ce cas, on affiche le message, on change
// le texte du bouton en « Cacher », et on passe la variable hidden en false
// • La variable hidden vaut false ? Dans ce cas, on cache le message, on change
// le texte du bouton en « Afficher », et on passe la variable hidden en true

let boutonAfficherMessage = document.querySelector(".afficherMessage");
let message = document.querySelector(".message");
message.setAttribute("style", "visibility: hidden;");
let hidden = true;


boutonAfficherMessage.addEventListener('click', function () {
    if (hidden == true) {
        message.setAttribute("style", "visibility: visible;");
        boutonAfficherMessage.textContent = "Cacher";
        hidden = false;
    } else {
        message.setAttribute("style", "visibility: hidden;");
        boutonAfficherMessage.textContent = "Afficher le message";
        hidden = true;
    }
})

//Générateur de citation 
/* 
    - Créez le fichier HTML (attention à la sémantique des balises)
    - Créez le fichier Css pour avoir un visuel le plus proche possible du mien. (font =
    satisfy)

    - Créez les variables nécessaires au projet, prenez 5 minutes pour réfléchir à un
    algorithme, cela vous donneras une idée de vos besoins.
    - Allez chercher tout les éléments à modifier dans le DOM et stockez les également.
    - Créez un tableau avec vos citations préférées ainsi que l’auteur correspondant.
    (une dizaine)
    - Créez un évènement sur le clique du bouton « nouvelle citation ».
    - Créez une fonction permettant d’aller piocher une citation aux hasard dans votre
    tableau
    - Créez une fonction permettant d’actualise la citation et l’auteur.
    - Je vous laisse penser à un système pour qu’une citation ne sorte pas deux
    fois de suite.
    - Vous devriez avoir toutes les armes pour avancer, renseignez vous bien sur les
    fonctions mathématiques, elles pourront vous être utiles.
    - Vous pourriez avoir besoin d’une boucle à un endroit et de connaitre la longueur de
    votre tableau.
    J’en dis pas plus sinon c’est pas drôle, je vous donne la correction sur un zip et non
    dans le cours, comme ça vous avez tout.
    */


