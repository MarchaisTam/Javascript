//Juste Prix 
/*

Pour ceux qui ne sont pas familiers avec ce jeu, il s'agit de
deviner le prix d'un produit. Ici, trois possibilités :
- C'est plus cher
- C'est moins cher
- C'est le juste prix !
Dans cette version du "Juste prix", nous générerons un
prix aléatoire, et nous calculerons le nombre de coups
qu'il faut à un joueur pour retrouver le juste prix.
Ainsi, il pourra se confronter à ses amis pour tenter de
voir qui retrouve le bon prix avec le moins de coups
possibles !
Je vous attends dans la prochaine session !
Etape 1 - Sélectionner nos éléments
Etape 2 - Cacher l'erreur
Etape 3 - Générer un nombre aléatoire
Etape 4 - Vérifier que l'utilisateur donne bien un nombre
Etape 5 - Agir à l'envoi du formulaire
Etape 6 - Créer la fonction vérifier

Couleur:
#004a6f
#2b9f88
*/

let userNumberInput = document.querySelector(".userNumberInput");
let boutonDemarrer = document.querySelector(".boutonDemarrer");
let message = document.querySelector(".message");

const nbrSecret = Math.floor(Math.random() * 1001);

boutonDemarrer.addEventListener("click", function () {
    console.log(userNumberInput.value);
    console.log(nbrSecret);
    
    let compteur = 0;
    if (verifier() == "plus") {
        message.innerHTML = "Plus";
        compteur++;
    } else if (verifier() == "moins") {
        message.innerHTML = "Moins";
        compteur++;
    } else if (verifier() == true) {
        message.innerHTML = "Bravo Vous avez trouvé en " + compteur + " coups";
        nbrSecret = getRandomInt();
    }
})

function verifier() {
    if (userNumberInput.value == nbrSecret) {
        return true;
    } else if (userNumberInput.value <= nbrSecret) {
        return "plus";
    } else if (userNumberInput.value >= nbrSecret) {
        return "moins";
    }
}
