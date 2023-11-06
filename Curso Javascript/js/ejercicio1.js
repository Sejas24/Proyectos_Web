'use strict'

//Ejercicio 1
/*TODO: Programa que pida 2 numeros y que nos diga cual es el mayor, menor o iguales
TODO: si los numeros no son un numero o son menor igual a 0 volver a pedir datos*/

var numero1 = parseInt(prompt("Introduce el primer numero", 0));
var numero2 = parseInt(prompt("Introduce el segundo numero", 0));

while(numero1 <= 0 || numero2<= 0 || isNaN(numero1) || isNaN(numero2)){
    if(numero1 > numero2){
        console.log("El numero1 es mayor: " + numero1);
    } else if(numero2>numero1){
        console.log("El numero2 es mayor: " + numero2);
    }else if(numero1 == numero2){
        console.log("Los Numeros son iguales");
    }else{
        console.log("Ingrese numeros correctos");
    }
}






