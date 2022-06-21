// alert("hi")


// Question 1
// While

// var manege = 0;
// while(manege <= 10){
//     document.write("C'est le tour n°" + manege + "<br>");
//     manege++
// }

// document.write("<hr>");

// var question =parseInt(prompt("Combien de tours voulez-vous faire ? "));
// var compteur = 1;
// while (compteur <= question){
//     document.write("C'est le tour n°" + compteur +"<br>")
//     compteur++;
// }

// FOR

for(var manege =1; manege <=10; manege++){
    document.write("C'est le tour n°"+ manege +"<br>");
}

document.write("<hr>");

var nbTours = parseInt(prompt("Combien de tours à faire ? "));
for (var tour = 1; tour <= nbTours; tour++){
    document.write("C'est le tour n°" + tour +"<br>");
}