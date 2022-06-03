// // alert('hey');
// // L'opérateur de comparaison  == signifie 'egal à '
// // Il permet de vérifier qui les VALEURS de 2variables sont identique

// var nb1 = 123;
// var nb2 ="123";
// console.log(nb1 == nb2); //retourne TRUE

// // l'opérateur de comparaison  === signifie "strictement égale à"
// // il permet de vérifier la VALEUR et le type 

// console.log(nb1 === nb2); //retourne FALSE 

// // -- L'opérateur != signifie "différent de ... en VALEUR"
// console.log(nb1 != nb2); // retourne FALSE

// // -- l'opérateur !== signifie "strictement différent de ... en VALEUR ET EN type"
// console.log(nb1 !== nb2);//retourne TRUE

// // -------------------------

// // EXERCICE
// /* J'arrive sur un espace sécurisé au moyen du prénom et l'age.
//   Je doit saisir mon prénom et mon age pour etre authentifié sur le site (les infos sont en Base De Données , ici dans mes variables prenom et age. )
//   En cas d'échec une alerte m'informe du problème.
//   Si tout se passe bien, un message de bienvenue m'accueille.

//   -------------------------------
// */

// var prenom, monAge;
// prenom = "delia";
// monAge = 20;

// // 1 -- Demander son prenom à l'utilisateur avec un prompt

// var prenomLogin = prompt("Quelle est votre prenom ?");

// // 2 -- Je vérifie si le prénom saisi (prenomLogin) correspond à celui de donnée (prenom)

// if(prenomLogin === prenom){
//     // alert('test');
//     //2a. si tout est ok , je continue la vérification avec l'age
//     //2a1. Demande a mon utilisateur son age via un PROMPT

//     //pour demander un reponse qui contient juste des chiffres
//     var ageLogin = parseInt(prompt("votre age ?"));
//     if(ageLogin === monAge){
//     alert("Bienvenue" + prenomLogin);
// }else{
//     //2a2. si les age ne corresponent pas, je lance une Alert.
//     alert("Erreur d'age");
// }

// }else{// 2b.Sinon, les prénom ne correspond pas je lance une ALERT.
//     alert("Attention, prénom non réconnu");

// }

var prenom, monAge, mdp;
prenom = "tom";
monAge = 28;
mdp = "bibi";

var prenomLogin = prompt( " Quel est votre prénom ? " );

if (prenomLogin === prenom){
    var ageLogin = parseInt(prompt( " votre age ? " ));

    if(ageLogin === monAge){
        var mdpLogin = prompt( " le mot de passe ? " );
        if (mdpLogin === mdp){
            alert("Bienvenue" +  prenomLogin);
        }else{
            alert("Pb de mot de passe !");
        }

    }else{
        alert("Erreur d'age");
    }

}else{
    alert("Attention prénom non reconue");
}
