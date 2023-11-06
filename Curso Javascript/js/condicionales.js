'use strict'

//condicional if

var edad1 = 30;
var edad2 = 12;

if(edad1 > edad2){
    console.log("La edad 1 es mayor que edad 2");
}else{
    console.log("La edad 2 es mayor que edad 1");
}

var edad = 33;
var nombre = "Sergio Cordova";
/*
Operadores Relacionales
    Mayor: >
    Menor: <
    Mayor o igual: >=
    Menor o igual: <=
    igual: =
    distinto = !=
*/
if(edad >= 18){
    console.log(nombre+"Tiene"+edad+"años, Es Mayor de edad");
    if(edad<=33){
        console.log("Todavia eres milenial");
    }else if(edad >= 70){
        console.log("Eres Anciano");
    }else{
        console.log("Ya no eres milenial");
    }
}else{
    console.log(nombre+"Tiene"+edad+"años, Es Menor de edad");
}
/* Operadores Logicos
        AND(Y): &&
        OR(O) : ||
        NEGACION: !
*/
var year = 2018;

//Negacion

if(year!=2016){
    console.log("El año no es 2016" + year);
}

//AND

if(year>= 2000 && year <= 2020){
    console.log("Estamos en la era actual " + year);
}else {
    console.log("Estamos en la era post moderna");
}

//OR

if(year == 2008  || (year >= 2018 && year == 2020)){
    console.log("El año acaba en 8 " + year);
}else{
    console.log("Año no registrado");
}
