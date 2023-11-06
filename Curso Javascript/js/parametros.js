'use strict'


//Parametros Rest y SPREAD

function listadoFrutas(fruta1,fruta2, ...resto_las_frutas){
    console.log("Fruta 1: ",fruta1);
    console.log("Fruta 2: ",fruta2);
    console.log("resto de frutas: ",resto_las_frutas);
}
listadoFrutas("Naranja", "Manzana","Pera", "Mandarina","Piña", "Uva");

var frutas =["Naranja", "Manzana"];
listadoFrutas(...frutas,"Pera", "Mandarina","Piña", "Uva");