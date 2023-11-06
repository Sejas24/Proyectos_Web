'use strict'

//Ejercicios 

function mostrarArray(elemento,textoCustom=""){
    document.write("<h1>Contenido del array" + textoCustom + "</h1>");
    document.write("<ul>");
    numero.forEach((elemento,index)=> {
        document.write("<li>" + elemento+"</li>");
    });
    document.write("<ul>");
}

var numero = new Array(6);

for(var i=0;i<=5;i++){
    numero[i]=parseInt(prompt("Ingrese un numero",  0));
}

//Mostrar en el cuerpo de la pagina
mostrarArray(numero);

//mostrar array en la consola
console.log(numero);


//Ordenar y Mostrar
numero.sort(function(a,b){return a-b});
mostrarArray(numero,'Ordenado');


//Invertir y mostrar

numero.reverse();
mostrarArray(numero,'Revertido');


//Cuantos elementos tiene un array
document.write("<h1>el array tiene: " + numero.length + " elementos</h1>");

//Busqueda
var busqueda = parseInt(prompt("Busca un numero",  0));
var posicion = numero.findIndex(numeros => numeros == busqueda);

if(posicion && posicion != -1){
    document.write("<hr/><h1>Encontrado</h1>");
    document.write("<h1>Posicion de la busqueda: " + posicion + "</h1><hr/>");
}else{
    document.write("<hr/><h1>No Encontrado</h1><hr/>");
}
