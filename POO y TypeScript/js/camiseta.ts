//Interface

//con implements utilizas las interfaces 

interface CamisetaBase {
    //  setColor: (color: any) => any;
    //  getColor: () => string;

    setColor(color: string): any;
    getColor(): string;
}

//Decorador
function estampar(logo: string) {
    return function (target: Function) {
        target.prototype.estampacion = function (): void {
            console.log("Camiseta estampada con el logo de: " + logo);
        }
    }
}

//Clase (Molde del Objeto)
//@estampar('Gucci Gang')
class Camiseta implements CamisetaBase {
    //Propiedades (Caracteristicas del Objeto)
    private color: string = "";
    private modelo: string = "";
    private marca: string = "";
    private talla: string = "";
    private precio: number = 0;

    //Metodos (funciones o acciones del Objeto)

    constructor(color: string, modelo: string, marca: string, talla: string, precio: number) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio

    }

    public setColor(color: string) {
        this.color = color;
    }

    public getColor() {
        return this.color;
    }
}


// Clase Hija
//Con extends haces herencia!

class Sudadera extends Camiseta {
    public capucha: boolean = true;

    setCapucha(capucha: boolean) {
        this.capucha = capucha;
    }

    getCapucha(): boolean {
        return this.capucha;
    }
}


var sudadera_nike = new Camiseta("sd", "sdddd", "dfgd", "sda", 10);
console.log(sudadera_nike);
sudadera_nike


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