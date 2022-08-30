/*
Avec la boucle dowhile demandez un prénom jusqu'à l'obtenir
Bonus
Avec un confirm() reposer la question tant que l'utilisateur dit non 

*/

do{
    var nom = prompt("quel est votre prenom");
}while(nom === null || nom === "");


/* Pour ce petit tp vous allez créer votre propre erreur à l’aide de « throw new Error() »
- Créez un programme qui demande à l’utilisateur de choisir entre 3 sorts (boule
de feu – trait de glace et chaine d’éclair).
- boule de feu = 40 dégats, trait de glace = 35 dégats et chaine d’éclair = 25 dégat.
- Si l’utilisateur choisis l’un de ses trois sorts, une alerte apparait disant que vous
avez choisis le « nom du sort » qui fait les dégats annoncé ci-desus.
- Si l’utilisateur choisis un sort autre que les trois ci-dessus, vous créez une erreur
et l’affichez.
« Switch case » vous sera utile pour cette exercice. */





try {

    let sort = prompt("quel sort voulez vous lancer ?");

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
        default :
            alert("Sort non reconnu");
            throw new Error("Sort non reconnu");
    }

    
} catch (e) {
    console.log("for new Error()");
    console.log(e);
}
