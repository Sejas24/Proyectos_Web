type alfanumerico = string | number;

//String

let cadena: string = "Sergio Cordova";


//Number

let numero: number = 12;

//Booleano

let verdadero_falso: boolean = true;

//Any

let cualquiera: any = "Hola";

//Arrays

//var lenguajes: Array<string> = ["PHP","JS","CSS"];
var lenguajes: Array<any> = ["PHP","JS","CSS",12];

//let years: any[] = ["DOCE",23,34];
let years: number[] = [12,23,34];

//Dos tipos de datos o mas

//let cadena2: string | number | boolean = "Sergio Cordova";
let cadena2: string | number = "Sergio Cordova";

let cadena3: alfanumerico = "Sergio Cordova";

cadena2 = 12;

// let vs var

var numero1 = 10;
var numero2 = 12;

if(numero1 == 10){
    let numero1 = 44; // solo define a nivel de bloques
    var numero2 = 55; // define a nivel Global
}

console.log(cadena, numero, verdadero_falso, cualquiera, lenguajes);