'use strict'

//Localstorage

//Comprobar disponibilidad del localstorage

if(typeof(Storage) !== 'undefined'){
    console.log("Localstorage disponible");
}else{
    console.log("Localstorage no disponible");
}

//Guardar datos

localStorage.setItem("titulo","Curso de javascript");


//Recuperar elemento

document.querySelector("#peliculas").innerHTML = localStorage.getItem("titulo");

//Guardar Objetos

var usuario = {
    nombre: "Sergio Cordova",
    email: "sergio@sergio.com",
    web: "sergio@web.com"
};

localStorage.setItem("usuario", JSON.stringify(usuario));


//Recupérar Objeto

var userjs =  JSON.parse(localStorage.getItem("usuario"));

console.log(userjs);
//document.querySelector("#peliculas").append(" " + userjs.web + " - " + userjs.nombre);

document.querySelector("#datos").append(" " + userjs.web + " - " + userjs.nombre);

//Borrar LocalStorage

//localStorage.removeItem("usuario");

localStorage.clear();

