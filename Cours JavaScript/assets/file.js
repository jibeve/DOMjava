
    // var container = document.getElementsById("container");
    // console.log(container.innerHTML);

  
//on passe soit par document soit par container (car container est contenu dans documents)

var container = document.getElementById("container");
console.log(container.innerHTML);

var paragraphes = document.getElementsByTagName("p");
for (let paragraphe of paragraphes){
    console.log(paragraphe.innerHTML);
}

var bleus = document.getElementsByClassName("blue");
for (let bleu of bleus){
    console.log(bleu.innerHTML);
}

//si on veut récupérer un élément selon la valeur de l'attribut name

var parConteneurs = document.getElementsByName("parConteneur");
for (let parConteneur of parConteneurs){
    console.log(parConteneur.innerHTML);
}

//Les selecteurs css

//On cible tous les select
var pbleus = document.querySelectorAll("p.blue");
for (let pbleu of pbleus){
    console.log(pbleu.innerHTML);
}

//Pour recuperer la balise 
var prouge = document.querySelector("p.red");
console.log(prouge.innerHTML);

//On cible la balise a
var lien = document.querySelector("a");
//On souhaite récupérer l'attribut d'un élément HTML
var href = lien.getAttribute('href');
console.log(href);

//Pour modifier l'attribut 
lien.setAttribute('href', "https://cvbootstrapjohnbismuth.herokuapp.com/");
console.log(lien);
console.log(lien.href);


var container = document.getElementsById("container"); 

console.log(container.innerHTML);
console.log(container.className);


//pour modifier une classe d'un doc HTML//

container.className= "blue";
console.log(container.className);

//Si on veut ajouter une nouvelle class à container

container.className += " red";
console.log(container.className);

//Pour récupérer la liste des classes de container
var list = container.classList;
//on rajoute une classe à la liste
list.add("green");
console.log(list);


//Pour recuperer le contenu sans les balises

// var container = document.getElementsById("container"); 
// console.log(container.innerHTML);
// console.log(container.textContent);

//Pour modifier le contenu du texte

var container = document.getElementsById("container"); 
container.innerHTML += "<p>Hello</p>";
console.log(container.innerHTML);
console.log(container.textContent);
container.className = "blue";
console.log(container.className);
container.className += " red";
console.log(container.className);

var parent = container.parentNode;
console.log(parent);

container.innerHTML += "<p>Hello</p>";
console.log(container.innerHTML);
console.log(container.textContent);



