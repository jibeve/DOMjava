//Exercice 1
//Question 1

function changer_style(){
    var x = document.getElementById('parag1')
    x.style.color="white";
    x.style.background = "black";
    x.style.border="1px dotted black";
    x.style.padding="5px";
}

//Question 2

function active(){
    document.getElementById('parag1').classList.add("mystyle");
    var x = document.getElementById('parag1').classList.length;
    console.log(x);

    var y = document.getElementById('parag1').classList.contains("mystyle");
    console.log(y);

}


//Exercice 2

function getAttributes(){
    var x = document.querySelector("a");
    var valeurLien = x.getAttribute('type');
    var valeurHreflang= x.getAttribute('hreflang');
    var valeurRel = x.getAttribute('rel');
    var valeurTarget = x.getAttribute('target');
    alert(valeurLien +  " " + valeurHreflang + " " + valeurRel + " " + valeurTarget);
}

//Exercice 3

// function getFormvalue(){
//     var nom = document.getElementsByName('fname').value;
//     console.log(nom);
// }

//Exercice 3 Damien

function getFormvalue(){​​
    var nom = document.getElementById("form1").elements[0].value;
    var prenom = document.getElementById("form1").elements[1].value;
    document.getElementById("result").innerHTML = nom + " " + prenom;
}​​

//Exercice 4

onload=function(){
    alert('Bienvenue sur ma page!')
    };

function surImage(){
    document.getElementById('image').src ="assets/img/biden.jpg";
}

function enDehorsImage(){
    document.getElementById('image').src ="assets/img/trump.jpg";
}
    
function changeBackground(){
    var x = document.getElementById('back');
    x.style.background = "black";
}



