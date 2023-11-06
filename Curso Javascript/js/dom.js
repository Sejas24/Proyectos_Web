'use strict'

//DOM - Document object model

function cambiaColor(color){
    caja.style.background = color;
}

//Conseguir elementod con un ID Concreto
//var caja = document.getElementById("micaja");

var caja = document.querySelector("#micaja");

caja.innerHTML = "¡texto en la caja desde js!"
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "white";
caja.className = "Hola";

//conseguir elementos por su etiqueta
var todoslosDivs = document.getElementsByTagName('div');

var seccion = document.querySelector("#miseccion");
var hr = document.createElement("hr");

// todoslosDivs.array.forEach((valor, indice) => {
    var valor;
    for(valor in todoslosDivs){
        console.log(todoslosDivs[valor]);
        if(typeof todoslosDivs[valor].textContent == "string"){
            var parrafo = document.createElement("p");
            var texto = document.createTextNode(todoslosDivs[valor].textContent);
            parrafo.append(texto);
            document.querySelector("#miseccion").prepend(parrafo);
        }
    }

seccion.append(hr);
//});

//var contenidoenTexto = todoslosDivs[2].textContent;
//contenidoenTexto.innerHTML = "Otro elemento para el segundo elemento";
//console.log(todoslosDivs);

//conseguir elementos por su clase
//console.log(caja);


var divsrojos = document.getElementsByClassName('rojo');
var divsAmarillos = document.getElementsByClassName('amarillo');
divsAmarillos[0].style.background = "yellow";
var div;
for( div in divsrojos){
    if(divsrojos[div].className == "rojo"){
        divsrojos[div].style.background = "red";
    }
}
console.log(divsrojos);

//query selector
var id = document.querySelector("#encabezado");
console.log(id);

var claseRojo = document.querySelector("div.rojo");
console.log(claseRojo);

var etiqueta = document.querySelector("div");
console.log(etiqueta);