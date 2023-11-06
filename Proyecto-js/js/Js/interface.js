$(document).ready(function () {
  //Mover elemento por la Pagina
  $(".elemento").draggable();

  //Redimensionar elementos
  $(".elemento").resizable();

  //Seleccionar y Ordenar elementos
  //$(".lista-seleccionable").selectable();

  $(".lista-seleccionable").sortable({
    update: function (event, ui) {
      console.log("Cambio  la Lista");
    },
  });

  //Drop
  $("#elemento-movido").draggable();
  $("#area").droppable({
    drop: function () {
      console.log("Has Soltado dentro del Area");
    },
  });

  //Efectos

  $("#mostrar").click(function () {
    //$(".caja-efectos").fadeToggle();

    //Se Puede usar cualquier tipo de efectos con cualquiera de los dos metodos

    //$(".caja-efectos").effect("explode");
    //$(".caja-efectos").toggle("shake");
    $(".caja-efectos").toggle("shake", "slow", 2000);
  });

  // Tooltip

  $(document).tooltip();

  // Dialog

  $("#lanzar-popup").click(function(){
      $("#popup").dialog();
  });

  // DatePicker
  $("#calendario").datepicker();

  // Tabs

  $("#pestanas").tabs();


});
