"use strict";
//String
let cadena = "Sergio Cordova";
//Number
let numero = 12;
//Booleano
let verdadero_falso = true;
//Any
let cualquiera = "Hola";
//Arrays
//var lenguajes: Array<string> = ["PHP","JS","CSS"];
var lenguajes = ["PHP", "JS", "CSS", 12];
//let years: any[] = ["DOCE",23,34];
let years = [12, 23, 34];
//Dos tipos de datos o mas
//let cadena2: string | number | boolean = "Sergio Cordova";
let cadena2 = "Sergio Cordova";
let cadena3 = "Sergio Cordova";
cadena2 = 12;
// let vs var
var numero1 = 10;
var numero2 = 12;
if (numero1 == 10) {
    let numero1 = 44; // solo define a nivel de bloques
    var numero2 = 55; // define a nivel Global
}
console.log(cadena, numero, verdadero_falso, cualquiera, lenguajes);
