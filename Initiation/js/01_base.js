//syntaxe de base

// commentaire sur une ligne 


/*
ici, je fais un commentaire sur 
 plusieurs lignes
 */

//  -- 1: Déclarer une variable en JS 
// var Prenom;

//  -- 2: Affecter une valeur à une variable
// Prenom = "Delia";

// var Prenom = "Delia";

//  -- 3: Une instruction se termine TOUJOURS par un point-virgule, aussi il estpossible d'écrire plusieurs instructions sur une seule ligne
//  inst_1;
//  inst_2; inst_3;

//   -- 4: Afficher une boite de dialogue (2 facons)
//  alert("super, tu es arrivé sur mon site ! ");
//   window.alert("super, tu es arrivé sur mon site ! ");

//  -- 5: Afficher dans la console (ici, la valeur de ma variable Prenom );
// console.log(Prenom);

//  --6: Afficher dans la page web
// document.write("A la pause vous aurez des haribos pik !");

//  -- 7: Demander à l'utilisateur une valeur ( 2 facons)
// window.prompt("question: on est quel jour ?" , "jours de la semaine");
// prompt("question: on est quel jour ?" , "jours de la semaine");

//  -- et pour manipuler cette valeur, je n'oublie pas de la string
// var jour = prompt("Question: on est quel jour ?" , "jours de la semaine");
// CloseEvent.log(jour);

//  -- 8: Attention /!\ le JS est sensible à la casse ('case sensitive')
//  mavarialbe =/= maVariable =/= ma_vraiable camel case shake case

// -- 9: Une variable ne peut pas commencer par un chiffre, ne doit contenir que des caracteres alphanumerique, et ne peut pas etre un mot réversé (var, for ... des éléments natifs du langage JS)

// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords

// -- 10: Une variable peut etre déclarée de facon explicit: 
 var fruit;
 var fruit = "fraise";
//   ou implicite;
var fruit_2 = "coco";
haribo ="Tagada";

/*--------------------------------
/~~~~~~~~~~~~~~~~~~~LES TYPES DE VARIABLES ~~~~~~~~~~~~~~~~~~~~~~~~ /
---------------------------------*/

//  -- 1. Chaine de caractéres (string)
var vacances = "2022";
var destination = "Maldive";

//  -- 2. Un nombre entier (integer ou int)
var annee = 2022;

// -- 3. Un nombre dècimal (float)
var nombre_a_virgule = -5.31;

// -- 4. Un booléen (boolean = VRAI/FAUX = TRUE/FALSE)
var unbooleen = false; //true

// --5. Les Constantes
// La déclaration const permet de créer une constante accessible uniquement  en lecture. Contrairement à une variable sq vqleur ne peut plus etre modifiée par réaffectation plus bas dans le code.
//  Une constante ne peut pas etre déclarée à nouveau dans le meme scripte .

//  -- par convention les constantes sont en majouscules 
const PAYS = "France"; // string
const AN = '2022';  // string
const BIRTH = 2022; // nombre

// -- 6. Typeof permet de connaitre le type de ma variable
console.log(vacances);
console.log(typeof vacances);
console.log(annee);
console.log(typeof annee);

//  En JS les variable sont auto-typées 
// On peut convertir une variable de type Numbre en STRING et aussi STRING en NUMBER avec les fonctions natives de JS
//  -- la fonction parseInt() renvoie un entier à partire d'une chaine de caracteres 

var unChiffre = "12";
console.log(unChiffre);
console.log(typeof unChiffre);

// STRING => NUMBER
unChiffre = parseInt(unChiffre);
console.log(unChiffre);
console.log(typeof unChiffre);

//  je ré-affecte une valeur
unChiffre = "12.22";
console.log(unChiffre);
console.log(typeof unChiffre);

//  STRING => FLOAT
unChiffre = parseFloat(unChiffre);
console.log(unChiffre);
console.log(typeof unChiffre);

// NUMBER => STRING
var nb_en_lettres = 258;
console.log(nb_en_lettres);
console.log(typeof nb_en_lettres);

var nb_en_lettres = nb_en_lettres.toString();
console.log(nb_en_lettres);
console.log(typeof nb_en_lettres);

// FIN  
