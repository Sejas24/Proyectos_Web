'use strict'

//pruebas con Let y Var

//prueba con var
var numero = 40;
console.log(numero);

if(true){
    var numero = 50;
    console.log(numero); //valor 50
}
console.log(numero);

//prueba con Let
//trabaja con nivel de bloque limitado con la declaracion que este
var texto = "Curso JS ";
console.log(texto);
if(true){
    let texto = "Curso Flutter 5";
    console.log(texto);
}

console.log(texto);