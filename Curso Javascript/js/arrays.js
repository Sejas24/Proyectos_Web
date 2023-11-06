'use strict'

//Arrays 

var nombre = "Sergio Cordova";
var nombres = ["Sergio Cordova", "Victor Robles","Juan Lopez","Manolo Pedraza",52,true];

var lenguajes = new Array("PHP", "JS","Go","Java");

//console.log(nombres[0]);
//console.log(lenguajes);
/*
var elemento = prompt("Que elemento del array desea?",0);
if(elemento >= nombres.length){
    alert("Introduzca un numero correcto menor que: " + nombres.length);
}else{
    alert("Usuario Seleccionado es: " + nombres[elemento]);
} 
*/

document.write("<h1>Lenguajes de programacion del 2018</h1>");
document.write("</ul>");

/*
for(var i=0;i<lenguajes.length;i++){
    document.write("<li>" + lenguajes[i] + "</li>");
}

lenguajes.forEach((elemento,index,data)=>{
    document.write("<li>" +index+" - "+ elemento + "</li>");
});

for(let lenguaje in lenguajes){
    document.write("<li>" + lenguajes[lenguaje] + "</li>");
}
*/
document.write("</ul>");

//Busquedas 
var precios = [10 , 20 , 50 , 80 , 12];
//var busqueda = lenguajes.findIndex(lenguaje => lenguaje == "PHP");
var busqueda = precios.some(precio => precio >= 50);

console.log(busqueda);
