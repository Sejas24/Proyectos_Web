$(document).ready(function () {
  //Load

  //  $('#datos').load("https://reqres.in/");

  //GET
  $.get("https://reqres.in/api/users", { page: 1 }, function (response) {
    console.log("Fuera del Each");
    response.data.forEach((element) => {
      console.log("element" + element);
      $("#datos").append(
        "<p>" + element.first_name + " " + element.last_name + "</p>"
      );
    });
  });

  //POST

  $("#formulario").submit(function (e) {
    e.preventDefault();
    var usuario = {
      //Cualquiera de las dos es valia para el json
      name: $('input[name = "name"]').val(),
      web: $('input[name = "web"]').val(),
      //web: "sergioCordova.com"
    };
    /*
    console.log("Usuario: " + usuario);
    $.post($(this).attr("action"), usuario, function (response) {
      console.log(response);
    }).done(function(){
      alert("Usuario añadio Correctamente");
    });
    
    */

    $.ajax({
      type: 'POST',
      //dataType: 'json',
      //contentType: 'application/json',
      url: $(this).attr("action"),
      data: usuario,
      beforeSend: function(){
        console.log("Enviando Usuario...")
      },
      success: function(response){
        console.log(response);
      },
      error: function(){
        console.log("A Ocurrio un error"); 
      },
      timeout: 2000
    });

    return false;
  });

  
});
