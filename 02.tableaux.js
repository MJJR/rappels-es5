
//------------------------------------
// Partie 2 - Les tableaux
//------------------------------------

var villes = ['nantes', 'paris', 'saint-nazaire', 'angers', 'le mans'];

//------------------------------------
// forEach()
//------------------------------------

villes.forEach(function(element){ console.log(element); });

//------------------------------------
// every()
//------------------------------------

var possedeLettreA = function(mot){
    for(i in mot){
        if(mot[i] == "a" || mot[i] == "A"){
            return true;
        }
    }
    return false;
}

console.log("lettreADansToutesLesVilles = "+villes.every(possedeLettreA));

//------------------------------------
// some()
//------------------------------------

var possedeCaractereTiret = function(mot){
    for(i in mot){
        if(mot[i] == "-"){
            return true;
        }
    }
    return false;
}

console.log("auMoinsUneVilleAvecUnTiret = "+ villes.some(possedeCaractereTiret));

//------------------------------------
// filter()
//------------------------------------

var nePossedePasTiretEtEspace = function(mot){
    for(i in mot){
        if(mot[i] == "-" && mot[i] == " "){
            return false;
        }
    }
    return true;
}

console.log("villesSansTiretSansEspace = [ "+ villes.filter(nePossedePasTiretEtEspace)+" ]");

//------------------------------------
// Chainer les Fonctions
//------------------------------------

var seTermineParS = function(mot){
    if(mot.substr(-1,1) == "s" || mot.substr(-1,1) == "S"){
        return true;
    }
    else{
        return false;
    }
}

var mettreTableauDeMotEnMajuscule = function(tab){
    for(i in tab){
        tab[i] = tab[i].toUpperCase();
    }
    return tab;
}

console.log("villesSansTiretSansEspace = [ "+ mettreTableauDeMotEnMajuscule(villes.filter(seTermineParS))+" ]");
