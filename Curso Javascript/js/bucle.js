'use strict'

//Bucle For
var numero = 100;
for(var i= 0 ; i <= numero ; i++){
    console.log("Vamos por el numero: " + i);
}

//Bucle While

var year = 2018;

while(year != 1991){
    console.log("Estamos en el año: " + year);
    if(year==2000){
        break;
    }
    year--;
}

//Bucle Do While

var years = 30;

do{
    alert("SOLO CUANDO SEA DIFERENTE A 20");
    years--;

}while(years>25)