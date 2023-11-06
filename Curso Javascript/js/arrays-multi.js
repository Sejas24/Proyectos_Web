'use strict'

//Arrays Multidimensionales

var categorias = ["Accion","Terror","Comedia"];
var peliculas = ['La verdad duele', 'La vida es bella', 'Gran torino'];

//peliculas.sort(); //ordenar en alfabetico
//peliculas.reverse(); //ordenar inversamente

var cine = [categorias,peliculas];
/*
console.log(cine);
console.log(cine[0][1]);
console.log(cine[1][2]);


var elemento = "";
do{
    var elemento = prompt("Introduce tu pelicula: ");
    peliculas.push(elemento);
    console.log(peliculas);
}while(elemento != "ACABAR");

peliculas.pop();
    
*/
 var indice = peliculas.indexOf("Gran torino");
 if(indice > -1){
     peliculas.splice(indice,1);
 }

 var pelicula_string = peliculas.join();
 var cadena = "texto1 , texto2, texto3";
 var cadena_array = cadena.split(",");

 console.log(peliculas);


