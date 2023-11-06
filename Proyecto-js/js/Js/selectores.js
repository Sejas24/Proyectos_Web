$(document).ready(function () {
  //Selector de iD
  $("#rojo").css("background", "red").css("color", "white");

  $("#amarillo").css("background", "yellow").css("color", "green");

  $("#verde").css("background", "green").css("color", "white");

  //Selector de Clase
  $('.zebra').css("padding", "5px");
  //mi_clase.css("border", "5px dashed black");

  $('.sin_borde').click(function () {
    console.log("Click Dado!!");
    $(this).addClass('zebra');
  });

  //Selectores de etiqueta
  var parrafos = $('p').css("cursor", "pointer");

  parrafos.click(function(){
    var that = $(this);
    if(!that.hasClass('grande')){
        that.addClass('grande');
    }else{
        that.removeClass('grande');
    }
  });

  //Selectores de atributo

  $('[title = "Google"]').css('background', '#ccc');
  $('[title = "Facebook"]').css('background', 'blue');

  //Otros

  //$('p, a').addClass('margen-superior');

  //var busqueda = $('#caja').find('.resaltado');
  //var busqueda = $("#caja .resaltado").eq(0).parent().find('[title="Google"]');

  var busqueda = $("#elemento2").parent().parent().find('resaltado');


  console.log(busqueda);

});
