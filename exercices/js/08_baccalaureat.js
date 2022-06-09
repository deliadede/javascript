// alert('hi');

var moyenne = parseFloat(prompt("quelle est ta moyenne au bac"));

if (moyenne < 10 ){// si la moyenne est inférieure à 10
    document.write("Tu est recalé !"); // j'affiche qu'il est recalé
}else if((moyenne >= 10) &&(moyenne < 12) ){// sinon, si la moyenne est en entre 10 et 12
    document.write("Tu passe !");//j'affiche que le candidat passe 
}else if((moyenne >= 12) &&(moyenne <= 20) ){// sinon, si la moyenne est supérieure à 12
    document.write("Bravo pour la mention!");//j'affiche qu'il a une mention
}else{// en cas de saisie ne rentrant pas dans cas si-avant
    document.write("ET de 0 à 20 ça donne ... !");//je lui indique qu'il n'a pas saisi ce que l'on lui demandait
}

