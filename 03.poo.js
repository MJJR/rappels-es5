//------------------------------------
// Partie 3 - Programmation orientée objet
//------------------------------------

//------------------------------------
// Fonction constructeur
//------------------------------------

function Personne(prenom,nom,pseudo){
    this.nom = nom;
    this.prenom = prenom;
    this.pseudo = pseudo;
    this.getNomComplet = function(){
        return ""+nom+" '"+pseudo+"' "+prenom;
    }
}

var jules = new Personne("Jules","LEMAIRE","jules77");

var paul = new Personne("Paul","LEMAIRE","paul44");

var afficherPersonne = function(personne){
    console.log("prenom = "+personne.prenom);
    console.log("nom = "+personne.nom);
    console.log("pseudo = "+personne.pseudo);
    console.log("nom complet = "+personne.getNomComplet());
}

afficherPersonne(jules);
console.log("");
afficherPersonne(paul);

//------------------------------------
// Modifier un objet
//------------------------------------

jules.pseudo = "jules44";

console.log("le nouveau pseudo de jules = "+jules.pseudo);

//------------------------------------
// Ajouter une propriété à Personne
//------------------------------------

console.log("L'age de jules est : "+jules.age);

Personne.prototype.age = "NON RENSEIGNE";

console.log("L'age de jules est : "+jules.age);

jules.age = 30;

console.log("L'age de jules est : "+jules.age);

//------------------------------------
// Ajouter une méthode à Personne
//------------------------------------

Personne.prototype.getInitiales = function(){
    return this.prenom.charAt(0)+this.nom.charAt(0);
}

console.log("initial de jules = "+jules.getInitiales());

//------------------------------------
// Objet sans fonction constructeur
//------------------------------------

var robert = {
    prenom : "Robert",
    nom : "LEPREFET",
    pseudo : "robert77",
    getNomComplet : function(){
        return ""+this.nom+" '"+this.pseudo+"' "+this.prenom;
    }
};

afficherPersonne(robert);

//------------------------------------
// Héritage via une fonction constructeur
//------------------------------------

function Client(prenom, nom, pseudo,num){
    Personne.call(this,prenom,nom,pseudo )
    this.numeroClient = num;
    this.getInfo = function(){
        return ""+this.numeroClient+" : "+ this.getNomComplet()
    }
}

var steve = new Client("Steve","LUCUS","steve44","A01");

afficherPersonne(steve);

console.log("NumeroClient de steve : "+steve.numeroClient);
console.log(steve.getInfo());


//------------------------------------
// 
//------------------------------------