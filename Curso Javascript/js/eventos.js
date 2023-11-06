"use strict";

//Eventos del Raton

window.addEventListener('load',function(){
    function cambiarColor() {
        var bg = boton.style.background;
      
        if (bg == "green") {
          boton.style.background = "red";
        } else {
          boton.style.background = "green";
        }
        boton.style.padding = "10px";
        boton.style.border = "1px soli #ccc";
      
        return true;
      }
      
      var boton = document.querySelector("#boton");
      
      //Click
      boton.addEventListener("click", function () {
        cambiarColor();
        this.style.border = "10px solid black";
      });
      
      //Mouse Over
      
      boton.addEventListener("mouseover", function () {
        boton.style.background = "yellow";
      });
      
      //Mouse Out
      boton.addEventListener("mouseout", function () {
        boton.style.background = "#ccc";
      });
      
      //focus
      var input = document.querySelector("#campo_nombre");
      input.addEventListener("focus", function () {
          console.log("[focus] Estas dentro del input");
      });
      
      //blur
      input.addEventListener("blur", function () {
          console.log("[blur] Estas fuera del input");
      });
      
      //keydown
      input.addEventListener("keydown", function () {
          console.log("[keydown] Pulsando esta tecla", String.fromCharCode(event.keyCode));
      });
      
      //keypress
      input.addEventListener("keypress", function () {
          console.log("[keypress] tecla presionada", String.fromCharCode(event.keyCode));
      });
      
      //keyup
      input.addEventListener("keyup", function () {
          console.log("[keyup] tecla soltada", String.fromCharCode(event.keyCode));
      });
      
});//end load

