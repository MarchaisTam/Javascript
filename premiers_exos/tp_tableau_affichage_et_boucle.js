/*Déclarer affecter un tableau avec les valeur suivante
    un tableau film avec 5 film à l'interieur
    Lisez les entrée 4 et 2.
    Afficher à l'aide de console tout le tableau*/

    let film = ["Titanic", "Avatar", "L'odysée de l'espace", "Parasite", "Shrek"];
    console.log(film[1]);
    console.log(film[3]);
    
    /* Parcours le tableau suivant a l'aide d'un for
     * et ensuite à l'aide d'un forEach
     * Affiche à l'aide d'un console.log chaque élément*/
    
    
    const tableauDeMonstre = [
        "Frankenstein",
        "Dracula",
        "Momie",
        "Pikachu"
    ]
    
    for (let i = 0; i < tableauDeMonstre.length; i++) {
        console.log(tableauDeMonstre[i]);
    }
    
    tableauDeMonstre.forEach(monstre => {
        console.log(monstre);
    });
    