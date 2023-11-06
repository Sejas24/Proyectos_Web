$(document).ready(function () {


  reloadLinks();

  $("#add_button")
  .removeAttr('disabled')
  .click(function () {
    //$("#menu").html('<li><a href ="' + $("#add_link").val() + '"></a></li>');
    //$("#menu").append('<li><a href ="' + $("#add_link").val() + '"></a></li>'); //Añadir al Final
    $("#menu").prepend('<li><a href ="' + $("#add_link").val() + '"></a></li>'); //Añadir al Principio
    //$("#menu").before('<li><a href ="' + $("#add_link").val() + '"></a></li>'); //Añadir Fuera de la lista - antes
    //$("#menu").after('<li><a href ="' + $("#add_link").val() + '"></a></li>'); //Añadir Fuera de la lista - despues
    $("#add_link").val('');
    reloadLinks();
  });
});

function reloadLinks() {
  $("a").each(function (index) {
    var that = $(this);
    var enlace = that.attr("href");
    that.attr('target','_blank');
    that.text(enlace);
  });
}
