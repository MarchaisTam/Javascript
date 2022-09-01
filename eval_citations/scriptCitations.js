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

let body = document.querySelector("body");
let citation = document.querySelector(".citation");
let auteurCitation = document.querySelector(".auteurCitation");
let boutonCitationSuivante = document.querySelector(".boutonCitationSuivante");

let listeCitations = [
    ["La nature fait les hommes semblables, la vie les rend différents.", "Confucius"],
    ["Le monde est dangereux à vivre ! Non pas tant à cause de ceux qui font le mal, mais à cause de ceux qui regardent et laissent faire.", "Albert Einstein"],
    ["Dans la vengeance et en amour, la femme est plus barbare que l'homme.", "Friedrich Nietzsche"],
    ["Exige beaucoup de toi-même et attends peu des autres. Ainsi beaucoup d'ennuis te seront épargnés.", "Confucius"],
    ["Dans la vie on ne fait pas ce que l'on veut mais on est responsable de ce que l'on est.", "Jean-Paul Sartre"],
    ["On ne souffre jamais que du mal que nous font ceux qu'on aime. Le mal qui vient d'un ennemi ne compte pas.", "Victor Hugo"],
    ["Aimer, ce n'est pas se regarder l'un l'autre, c'est regarder ensemble dans la même direction.", "Antoine De Saint-Exupéry"],
    ["Pour critiquer les gens il faut les connaître, et pour les connaître, il faut les aimer.", "Coluche"],
    ["Choisissez un travail que vous aimez et vous n'aurez pas à travailler un seul jour de votre vie.", "Confucius"],
    ["La règle d'or de la conduite est la tolérance mutuelle, car nous ne penserons jamais tous de la même façon, nous ne verrons qu'une partie de la vérité et sous des angles différents.", "Gandhi"]
];


boutonCitationSuivante.addEventListener("click", function () {
    getRandomCitation();
    rafraichirCitation();
})

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let citationActuelle;

function getRandomCitation() {
    nbRandom = getRandomInt(11);
    while (citationActuelle == listeCitations[nbRandom]) {
        nbRandom = getRandomInt(11);
    }
    citationActuelle = listeCitations[nbRandom];
}

function rafraichirCitation() {
    citation.textContent = citationActuelle[0];
    auteurCitation.textContent = citationActuelle[1];
}
