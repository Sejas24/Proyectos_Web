'use strict'

//FUNCIONES:

function calculadora(numero1, numero2, mostrar = false){

    if(mostrar==false){
        console.log("Suma: "+ (numero1+numero2));
        console.log("Resta: "+ (numero1-numero2));
        console.log("Multiplicacion: "+ (numero1*numero2));
        console.log("Division: "+ (numero1/numero2));
        console.log("-------------------------------------");
    }else{
        document.write("Suma: "+ (numero1+numero2) + "</br>");
        document.write("Resta: "+ (numero1-numero2) + "</br>");
        document.write("Multiplicacion: "+ (numero1*numero2) + "</br>");
        document.write("Division: "+ (numero1/numero2) + "</br>");
        document.write("-------------------------------------");
    }

    return "Hola soy la calculadora";
}

calculadora(12,8);
calculadora(98,2);