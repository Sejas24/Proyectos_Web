"use strict";
//Interface
//Decorador
function estampar(logo) {
    return function (target) {
        target.prototype.estampacion = function () {
            console.log("Camiseta estampada con el logo de: " + logo);
        };
    };
}
//Clase (Molde del Objeto)
//@estampar('Gucci Gang')
class Camiseta {
    //Metodos (funciones o acciones del Objeto)
    constructor(color, modelo, marca, talla, precio) {
        //Propiedades (Caracteristicas del Objeto)
        this.color = "";
        this.modelo = "";
        this.marca = "";
        this.talla = "";
        this.precio = 0;
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    setColor(color) {
        this.color = color;
    }
    getColor() {
        return this.color;
    }
}
// Clase Hija
//Con extends haces herencia!
class Sudadera extends Camiseta {
    constructor() {
        super(...arguments);
        this.capucha = true;
    }
    setCapucha(capucha) {
        this.capucha = capucha;
    }
    getCapucha() {
        return this.capucha;
    }
}
var sudadera_nike = new Camiseta("sd", "sdddd", "dfgd", "sda", 10);
console.log(sudadera_nike);
sudadera_nike;
//var sudadera_nike = new Sudadera("sd", "sdddd", "dfgd", "sda", 10);
//sudadera_nike.setCapucha(true);
//sudadera_nike.setColor("Gris ");
//console.log(sudadera_nike);
/*
    Solo si es Public la variable

    var camiseta = new Camiseta();
    camiseta.color = "Rojo";
    camiseta.modelo = "Manga Larga";
    camiseta.marca = "Nike";
    camiseta.talla = "L";
    camiseta.precio = 10;

    //var playera = new Camiseta();
    //playera.setColor("Rojo");

    //console.log(playera, camiseta.getColor());

    // Con Constructor

    var playera = new Camiseta('Rojo','Manga Corta','Nike','S', 55);
    console.log(playera);
*/
