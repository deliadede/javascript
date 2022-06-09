// alert("hello")

var jour = prompt("quelle jour sommes-nous ?");
  if(jour === "lundi"){
  document.write("Demain nous serons mardi ...");
}else if(jour === "mardi"){
    document.write("Demain nous serons mercredi ");
}else if(jour === "mercredi"){
    document.write("Demain nous serons jeudi ");
} else if(jour === "jeudi"){
        document.write("Demain nous serons vendredi ");
}else if(jour === "vendredi"){
    document.write("bon week-end ")
}else if(jour === "samedi"){
    document.write("Demain nous serons dimanche ");
}else if(jour === "dimanche"){
    document.write("Bon courage ;- ");
}else{
    document.write("Jour inconnu");
}

switch(jour){
    case "Lundi":
        console.log("demain en est mardi");
        break;

    case "mardi":
        console.log("demain en est mercredi");
        break;

    case "mercredi":
        console.log("demain en est jeudi");
        break;

    case "jeudi":
        console.log("demain en est vendredi");
        break;

    case "vendredi":
        console.log("demain en est samedi");
        break;

    case "samedi":
        console.log("demain en est dimanche");
        break;

    case "dimanche":
        console.log("demain en est lundi");
        break;

    default:
        console.log("Désolé,vérifiez l'orthographe et veuillez écrire sans majuscules.");
}
