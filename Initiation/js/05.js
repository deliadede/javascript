// alert('test')
// -- Structure de base IF

if (true){// par défaut la condition à vérifier le IF vérifie si elle est vraie
    /* .... code  ....*/
}

var nb1 = 10;
if (nb1 < 50){
   console.log("nb1 est bien inférieur à 50");
}

if (true){
    //code si Vrai  
}else{
    //code si Faux
}

if(nb1 < 50){
    console.log("nb1 est bien supérieur à 50");
}else{
    console.log("nb1 n'est pas supérieur à 50");
}

// EXERCICE
// On utilise le if pour vérifier l'age de l'internaute.
// => s'il est majeur je lui souhaite la bienvenue
// => s'il est mineur je [1] lui signale et [2] le renvoie vers un autre site

// 1 -- je declare la majorité legale
var MajoriteFr= 18;

// 2 -- Démander l'age en s'assurant que nous avons un nombre 
var age = parseInt(prompt("indiquez votre age"));

// 3 -- je verifie si mon internaute est majeur
if(age >= MajoriteFr){
   alert("Bienvenue, vous etes majeur");
}
else{
    // s'il est mineur je lui signale
    alert("Allez voir un autre super site...")
    // et ensuite je redirige vers W3sc
    document.location.href ="https://www.w3schools.com/"
}


