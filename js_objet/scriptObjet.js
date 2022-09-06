/*- Créez un constructeur de “Stagiaire” avec pour attributs : nom, prénom, age, ville de naissance
- Ce constructeur aura pour méthode “sePresenter” qui affichera tous les attributs nom, prénom,
age et le nom de la ville de naissance.
- Creéz un constructeur de “Ville” avec pour attribut : nom, nombre d’habitants, pays.
- Créez deux objets de “stagiaire” et créez autant d’objets de “ville” que necessaire pour pouvoir
assigner ces objets à l’attribut “ville” de naissance”.*/

function Stagiaire(nom, prenom, age, villeDeNaissance) {
    this.age = age;
    this.prenom = prenom;
    this.nom = nom;
    this.villeDeNaissance = villeDeNaissance;
    this.sePresenter = function () {
        console.log("Le Stagiaire " + this.nom + " " + this.prenom +" a " + this.age + " ans et est né(é) à " + this.villeDeNaissance.nom);
    }
}


function Ville(nom, nombreDhabitant, pays) {
    this.nom = nom;
    this.nombreDhabitant = nombreDhabitant;
    this.pays = pays;
}

let ville1 = new Ville("Perpignan", 70000, "France");
let ville2 = new Ville("Toulouse", 500000, "France");

let Stagiaire1 = new Stagiaire("Max", "Dupont", 25, ville1);
let Stagiaire2 = new Stagiaire("Bob", "Martin", 46, ville2);

//Stagiaire1.sePresenter();
//Stagiaire2.sePresenter();

/*La classe Personnage
Propriétés :
 pseudo,
 classe (magicien ou guerrier)
 sante
 attaque
 niveau (initialisé à 1)
Méthodes :
 evoluer() - Augmente le niveau personnage de 1, et affiche "[pseudo]
passe au niveau [niveau] !"'
 verifierSante() - Vérifie si la santé du personnage est inférieure ou
égale à 0. Si c'est le cas, réinitialise la santé à 0 pour ne pas avoir de
points de vie négatifs et affiche "[pseudo] a perdu !"
Getters :
 informations() - Affiche les informations du personnage "[pseudo]
[classe] a [sante] points de vie et est au niveau [niveau]."*/

function Personnage(pseudo, classe, sante, attaque) {
    this.pseudo = pseudo;
    this.classe = classe;
    this.sante = sante;
    this.attaque = attaque;
    this.niveau = 1;

    this.evoluer = function () {
        this.niveau++;
        console.log(this.pseudo + " " + this.classe + " a " + this.sante + " points de vie et est passé au niveau " + this.niveau)
    }

    this.verifierSante = function () {
        if (this.sante <= 0 ) {
            this.sante = 0;
            console.log(this.pseudo + " a perdu");
        }
    }

    this.informations = function () {
        console.log(pseudo + " " + classe + " a " + sante + " points de vie et est au niveau" + niveau + ".")
    }
}

/*La classe Magicien hérite de Personnage
Propriétés :
 Aucune. Se contente d'appeler le constructeur de Personnage, en lui
donnant en paramètres (pseudo, "magicien", 170, 90). Donc vous
l'aurez compris, pour initialiser un joueur, il faudra appeler le
constructeur de la classe que nous voulons, et donner juste un
pseudo. Le reste sera géré par la classe choisie (magicien ou guerrier).
Méthodes :
 attaquer(personnage) - Prend en paramètre le personnage adverse
(donc un objet). Réduit la santé du personnage adverse selon le
nombre de dégâts que fait le personnage en cours, et affiche
"[pseudo] attaque [personnage.pseudo] en lançant un sort ([attaque]
dégâts)". Ensuite, appelle la fonction evoluer(). Puis, appelle la
fonction verifierSante() du personnage adverse.
 coupSpecial(personnage) - Prend en paramètre le personnage
adverse (donc un objet). Réduit la santé du personnage adverse selon
le nombre de dégâts que fait le personne en cours, fois 5, et affiche
"[pseudo] attaque avec son coup spécial puissance des arcanes
[personnage.pseudo] ([attaque * 5] dégâts)". Ensuite, appelle la
fonction evoluer(). Puis, appelle la fonction verifierSante() du
personnage adverse.*/

function Magicien() {
    Personnage.call(pseudo, "Magicien", 170, 90);

    this.attaquer = function (personnage) {
        personnage.sante-= this.attaque;
        console.log(this.pseudo + " attaque "+ personnage.pseudo + " en lançant un sort (" + this.attaque + " dégâts)");
        personnage.evoluer();
        personnage.verifierSante();
    }

    this.coupSpecial = function (personnage) {
        personnage.sante-= (this.attaque*5);
        console.log(this.pseudo + " attaque avec son coup spécial puissance des arcanes "+ personnage.pseudo + ", " + this.attaque + " dégâts)");
        personnage.evoluer();
        personnage.verifierSante();
    }
}

/*La classe Guerrier hérite de Personnage
Propriétés :
 Aucune. Se content d'appeler le constructeur de Personnage, en lui
donnant en paramètres (pseudo, "guerrier", 350, 50). Donc vous
l'aurez compris, pour initialiser un joueur, il faudra appeler le
constructeur de la classe que nous voulons, et donner juste un
pseudo. Le reste sera géré par la classe choisie (magicien ou guerrier).
Méthodes :
 attaquer(personnage) - Prend en paramètre le personnage adverse
(donc un objet). Réduit la santé du personnage adverse selon le
nombre de dégâts que fait le personnage en cours, et affiche
"[pseudo] attaque [personnage.pseudo] avec son épée ([attaque]
dégâts)". Ensuite, appelle la fonction evoluer(). Puis, appelle la
fonction verifierSante() du personnage adverse.
 coupSpecial(personnage) - Prend en paramètre le personnage
adverse (donc un objet). Réduit la santé du personnage adverse selon
le nombre de dégâts que fait le personne en cours, fois 5, et affiche
"[pseudo] attaque avec son coup spécial haches de guerre
[personnage.pseudo] ([attaque * 5] dégâts)". Ensuite, appelle la
fonction evoluer(). Puis, appelle la fonction verifierSante() du
personnage adverse.*/


function Guerrier() {
    Personnage.call(pseudo, "Guerrier", 350, 50);

    this.attaquer = function (personnage) {
        personnage.sante-= this.attaque;
        console.log(this.pseudo + " attaque "+ personnage.pseudo + " avec son épée (" + this.attaque + " dégâts)");
        personnage.evoluer();
        personnage.verifierSante();
    }

    this.coupSpecial = function (personnage) {
        personnage.sante-= (this.attaque*5);
        console.log(this.pseudo + " attaque avec son coup spécial haches de guerre "+ personnage.pseudo + ", " + this.attaque + " dégâts)");
        personnage.evoluer();
        personnage.verifierSante();
    }
}

//let gandalf = new Magicien("Gandalf");
//let aragorn = new Guerrier("Aragon");

/*console.log(aragorn.informations);
console.log(gandalf.informations);
gandalf.attaquer(aragorn);
console.log(aragorn.informations);
aragorn.attaquer(gandalf);
console.log(gandalf.informations);
gandalf.coupSpecial(aragorn);*/



class Travailleur{
    constructor(nom, corpsDeMetier, savoirFaire, competence) {
        this.nom = nom;
        this.corpsDeMetier = corpsDeMetier;
        this.savoirFaire = savoirFaire;
        this.competence = competence;
    }

    auBoulot(){
        return console.log(this.nom + " se met au boulot !")
    }
}

class Informaticien extends Travailleur{
    constructor(nom, corpsDeMetier, savoirFaire, competence, langage){
        super(nom, corpsDeMetier, savoirFaire, competence)
        this.langage = langage;
    }

    auBoulot() {
        if(this.langage == "javascript") {
            console.log(this.nom + " se met à coder frénetiquement");
            this.jetDeCompetence();
        } else {
            console.log("C'est quoi ce language bizarre ?");
            this.competence -= 3;
        }
    }

    jetDeCompetence() {
        return Math.floor(Math.random() * 101);
    }


    acharnement() {
        console.log(this.nom + " code toutes la nuit comme un sauvage !");
        this.competence += 5;
    }

    afficheCompetence() {
        console.log("Votre compétence actuelle est a " + this.competence);
    }
    

    scenario() {
        this.auBoulot();
        this.jetDeCompetence();
        if (this.competence >= this.jetDeCompetence()) {
            console.log("Au dodo j'ai fini ma journée");
        } else if (this.competence < this.jetDeCompetence()) {
            this.acharnement();
        }
    
    }

}

/*Faite maintenant un petit scénario
        instancié un nouvel informaticien
    
    faite une méthode qui 
        lance au boulot
        faite ensuite un jetDeCompetence
    Si user.competence est supérieur à jet de compétence
        affiche au dodo j'ai finis ma journée
    sinon si user.competence est inférieur à jet de compétence
        execute user.acharnement
    Affiche afficheCompetence*/

/*let toto = new Informaticien("toto", "Informatique", "Coder", 0, "javascript");
toto.scenario();
toto.scenario();
toto.scenario();
toto.scenario();
toto.scenario();*/

/*
    Créée une classe Block qui 4 attribut
    balise qui contiendra une balise "div section article ou autre" devra être en argument dans l'instanciation.
    contenus, qui pourra être une string ou autre ce sera le contenus dans votre balise 
    un attribut body qui contiendra le query selector du body
    et un attribut element qui contiendra un createElement(de la balise);

    Crée une méthode fillElement() elle permettra de modifier le contenus de votre élément 
    une méthode append qui acrochera le contenus à votre page
    et une méthode addNewElement qui lancera les deux autre méthode.

    Une fois que tout ceci fonctionne (pour verifier faite des test)

    Faite une nouvelle classe Bouton qui héritera de Block
    Cette classe aura tout les attribut precedent plus un attribut
    event qui sera , "click" "mouseOver" ou autre écouteur d'évènement.
    Elle aura une méthode addNewEvent qui permettra d'ajouter un évènement sur un element precis.
    Pour commencer fait un évènement simple console.log("hello");
    Cela permettra de vérifier que tout fonctionne.

    Faite une instance d'un bouton, une fois fait il faudra alors afficher ce bouton dans votre page.
    Ensuite ajouter un évènement dessus qui ce déclenchera au click

    Une fois que tout fonctionne correctement, vous allez alors modifier votre méthode
    Retirer le console.log("Hello") et instancier un nouveau block a la place.
    Vous mettrez la balise et le contenus que vous souhaitez à l'interieur peut importe.
    lancez également la méthode addNewElement sur celui ci

    Cliquez plusieur fois sur votre bouton, vous devriez normalement voir apparaitre plusieur élément que vous venez de créee

    */

    class Block{
        constructor(balise) {
            this.balise = balise;
            this.contenus = "contenu";
            this.body = document.querySelector("body");
            this.element = document.createElement(balise);
        }
    
        fillElement(){
            this.element.textContent = this.contenus;
        }

        append() {
            this.body.append(this.element);
        }

        addNewElement() {
            this.fillElement();
            this.append();
        }
    }

    let element1 = new Block("div");
    element1.addNewElement();
    let element2 = new Block("div");
    element2.addNewElement();
    
    class Bouton extends Block{
        constructor(balise){
            super(balise);
            this.balise = balise;
            this.contenus = "Bouton";
            this.event = "click";
        }

        addNewEvent() {
            console.log("hello");
            this.element.addEventListener(this.event, function () {

                console.log("hello2");
            });
        }
    }

    //let bouton1 = new Bouton("button");
    //bouton1.addNewElement();
    //bouton1.addNewEvent();


    /**
 * Les dates tp-27
 * Je vais vous demander de m’afficher la date actuelle dans ce format : jeudi 20 mai 2021
 * Je vous donne deux indices :
 * - Une méthode de l’objet date pourra vous être utile.
 * - L’objet navigator du BOM pourra également vous être utile
 */

    const date = new Date();
    console.log(date);
    
    