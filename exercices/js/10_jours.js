// alert("hy");

var Mois = parseInt(prompt("Mois", "<<saisir un chiffre entre 1 et 12>>" ));


// if ( Mois === 1){
//     document.write("31 jours");
// }else if(Mois === 2){
//     document.write("28 jours");
// }else if(Mois === 3){
//     document.write("31 jours");
// }else if(Mois === 4){
//     document.write("30 jours");
// }else if(Mois === 5){
//     document.write("31 jours");
// }else if(Mois === 6){
//     document.write("30 jours");
// }else if(Mois === 7){
//     document.write("31 jours");
// }else if(Mois === 8){
//     document.write("31 jours");
// }else if(Mois === 9){
//     document.write("30 jours");
// }else if(Mois === 10){
//     document.write("31 jours");
// }else if(Mois === 11){
//     document.write("30 jours");
// }else if(Mois === 12){
//     document.write("31 jours");
// }


if (Mois === 2){//si on a choisi février  => chiffre 2 
    document.write("le mois numéro" + Mois +" fait 28 jours ");
}else if ((Mois === 4) || (Mois === 6) || (Mois === 9) || (Mois === 11)){
    document.write("les mois numéro" + Mois +" fait 30 jours ");
}else if ((Mois === 1) || (Mois === 3) || (Mois === 5) || (Mois === 7) || (Mois === 8) || (Mois ===10) || (Mois === 12)){
    document.write("les mois numéro" + Mois +" fait 31 jours ")
}else
    document.write(" votre choix " + Mois +" n'est pas dand le calendrier ");   

        



