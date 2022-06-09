// alert("hello");

// LES BOUCLES

// -- La boucle FOR
/*
for ( 3 arguments){
        ...   code  ...     
}
 */

// 1. Initialise un compteur à partir de combien je compte (par défaut le compteur est la variable 'i')
// 2. La condition à vérifier qui doit donc etre VRAI  (TRUE)
// 3. Le 'pas' d'incrémentation (combien j'ajoute à chaque tour, généralement 1 donc i++)

for (var i = 1; i<= 10; i+=2) {
    document.write("<p>Instruction exécutée : " + i + "</p>");
}

// -- La boucle WILD (tant que)
// trés utilisée quand on ne connait pas le nombre de tours de bouclezs à l'avance
var j = 1; 

while(j <= 10){
    document.write("<hr /> <p>Instruction exécutée : " + j +"</p>");
// 10 lignes de code
// j++; 
// j = j + 1;
//ou
    j += 1;
}

//------------------------------

/* EXERCICE
\----------------------------------------------/
J'AI 1000€ SUR MON COMPTE 
chaque mois j'ajoute 50€
combien de temp me faut-il pour avoir 2000€ sur mon compte ?
-----------------------------------------------*/


var monCompte = 1000;
var temps = 0;

while(monCompte < 2000){
    document.write("<h3> Sous sur mon compte : " + monCompte + "</h3>");
    monCompte += 50;
    temps++;
}
// toujours en dehors du boucle {}

document.write("<h3> Jusqu'à 2000€, il me faut : "+ temps + "mois </h3>");

// avec une boucle FOR
var tps= 0;
for (var mesSous = 1000; mesSous < 2000; mesSous += 50){
document.write("<h3>Le mois suivant j'ai : " + mesSous + "</h3>")
    tps++;
}
document.write("<h3>Il aura fallu " + tps +"mois </h3>")