$(document).ready(function () {
  //MouseOver y MouseOut
  var caja = $("#caja");
  /*
    caja.mouseover(function(){
        $(this).css("background", "red");
    });

    caja.mouseout(function(){
        $(this).css("background","green");
    });
    */

  //Hover

  function cambiaRojo() {
    $(this).css("background", "red");
  }

  function cambiaVerde() {
    $(this).css("background", "green");
  }

  caja.hover(cambiaRojo, cambiaVerde);

  //Click

  caja.click(function () {
    $(this).css("background", "blue").css("color", "white");
  });

  //Doble Click
  caja.dblclick(function () {
    $(this).css("background", "pink").css("color", "yellow");
  });

  //Focus

  var nombre = $("#nombre");
  var datos = $("#datos");

  nombre.focus(function () {
    $(this).css("border", "2px solid green");
  });

  //Blur
  nombre.blur(function () {
    $(this).css("border", "2px solid red");

    datos.text($(this).val()).show();
  });

  //MouseDown

  datos.mousedown(function () {
    $(this).css("border-color", "gray");
  });

  //MouseUp

  datos.mouseup(function () {
    $(this).css("border-color", "green");
  });

  //MouseMove
  $(document).mousemove(function () {
    //console.log("En X:" + event.clientX);
    //console.log("En Y:" + event.clientY);

    //Para Hacer desaparecer el raton
    $('body').css("cursor","none");


    var sigueme = $("#sigueme");
    sigueme.css("left",event.clientX);
    sigueme.css("top",event.clientY);

  });
});
