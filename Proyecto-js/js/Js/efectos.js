$(document).ready(function () {
  var caja = $("#caja");

  $("#mostrar").hide();
  $("#mostrar").click(function () {
    $(this).hide();
    $("#ocultar").show();
    //$("#caja").show('fast');
    //$("#caja").fadeIn('fast');
    //$("#caja").fadeTo("fast", 0.3);
    caja.slideDown("slow");
  });
  $("#ocultar").click(function () {
    $(this).hide();
    $("#mostrar").show();
    //$("#caja").hide('normal');
    //$("#caja").fadeOut('slow');
    //$("#caja").fadeTo("fast", 0);
    caja.slideUp("slow", function () {
      console.log("Cartel Ocultado");
    });
  });

  $("#todoenuno").click(function () {
    //$("#caja").toggle("fast");
    //$("#caja").fadeToggle("fast");
    caja.slideToggle("fast");
  });

  $("#animame").click(function () {
    caja
      .animate(
        {
          marginLeft: "500px",
          fontSize: "40px",
          height: "100px",
        },
        "slow"
      )
      .animate(
        {
          borderRadius: "900px",
          marginTop: "80px",
        },
        "slow"
      )
      .animate(
        {
          borderRadius: "0px",
          marginLeft: "0px",
        },
        "slow"
      )
      .animate(
        {
          borderRadius: "100px",
          marginTop: "0px",
        },
        "slow"
      );
    caja.animate(
      {
        marginLeft: "500px",
        fontSize: "40px",
        height: "100px",
      },
      "slow"
    );
  });
});
