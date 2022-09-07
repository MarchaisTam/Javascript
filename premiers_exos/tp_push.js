/**
 * Maintenant créée un autre tableau dans lequelles 
 * vous allez poussez des information 
 * Recherchez la méthode adéquate pour ajouter des information dans votre tableau
 * ajouter un prenom supplémentaire
 * affiche le résultat 
 * ajouter un nouveau tableau dans le tableau
 * affiche le résultat
 */

let tab2 = ["dede", "dodo", "didi"];
console.table(tab2);

tab2.push("dudu")
console.table(tab2);
tab2.push(["fifi","fufu","fafa"]);
console.table(tab2);

/**
  * avec le tableau present afficher les valeur à l'aide de console.table
  * Ensuite changez l'ensemble des donner et remplacer les par des fruit 
  * Utiliser splice pour changer à nouveau les valeurs du tableau par des nom la derniere
  *  entrée doit être une variable au préalablement déclarer affecter
  */
let arrOfHumans = ["john", "james", "bob", "leonard"];
console.table(arrOfHumans);
let name1 = "loulou";
arrOfHumans.splice(0, 4, "kiwi","orange", "pomme");
console.table(arrOfHumans);
arrOfHumans = ["john", "james", "bob", name1];