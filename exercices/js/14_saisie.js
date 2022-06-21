// alert("hy")
//1er methode
var nombre = parseInt(prompt("Entrez un nombre entre 50 et 100 : "));

// while( nombre > 50 && nombre < 100){
//     alert("le nombre :" + nombre +"que vous avez saisie est compris entre 50 et 100");
//     nombre = prompt("Entrer un nombre 50 et 100 :");
// }

// 2eme methode avec l'inverse

// while (nombre <50 || nombre >100){
//     alert("Vous avez saisie " + nombre + "n'appartient pas a l'intervalle 50 et 100");
//     nombre = prompt("Entrer un nombre entre 50 et 100 :");
// }

// 3eme Methodeavec boucle while et dedans if else

while (nombre != 'quitter'){
    if(nombre >= 50 && nombre >=100){
    alert("le nombre :" + nombre + "que vous avez saisi est compris entre 50 et 100");
    nombre = prompt("Entrer un nombre'quitter' pour quitter");

    }else if(nombre <50 || nombre >100){
        alert("Vous avez saisi" + nombre + "n'appartient pas a l'intervalle 50 et 100");
        nombre = prompt("Entrer un nombre'quitter' pour quitter");
    }else{
        alert(("Erreur entrer un nombre correcte"));
        nombre = prompt("Entrer un nombre entre 50 et 100 :");
    }
}