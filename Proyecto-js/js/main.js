$(document).ready(function () {
  //Slider
  if (window.location.href.indexOf("index") > -1) {
    $(".galeria").bxSlider({
      mode: "fade",
      captions: true,
      slideWidth: 1500,
      responsive: true,
      pager: false,
    });
  }

  //Posts
  if (window.location.href.indexOf("index") > -1) {
    var posts = [
      {
        title: "Prueba de titulo 1",
        //date: moment().format("MMM Do YYY"),
        date:
          "Publicado el dia: " +
          moment().format("ddd") +
          "de " +
          moment().format("MMM") +
          "del " +
          moment().format("YYY"),
        content:
          "Laboris aute incididunt dolor aliquip cillum laborum voluptate labore cupidatat sint magna. Laboris et Lorem nisi qui fugiat quis ut enim nulla. Cupidatat elit ipsum nisi sit exercitation ullamco id ullamco. Est reprehenderit ad fugiat minim ipsum sit pariatur voluptate irure cupidatat. Ut Lorem laboris nisi commodo qui ipsum anim quis velit sint esse. Proident ad nulla adipisicing deserunt laboris amet et sit minim magna eiusmod elit mollit amet. Ut nisi dolor ullamco sint veniam dolore quis adipisicing eu labore magna elit anim commodo.Elit mollit exercitation enim magna quis. Ex nulla irure voluptate tempor eiusmod. Esse et sunt veniam fugiat mollit officia magna ullamco.",
      },
      {
        title: "Prueba de titulo 2",
        date: moment().format("MMM Do YYY"),
        content:
          "Laboris aute incididunt dolor aliquip cillum laborum voluptate labore cupidatat sint magna. Laboris et Lorem nisi qui fugiat quis ut enim nulla. Cupidatat elit ipsum nisi sit exercitation ullamco id ullamco. Est reprehenderit ad fugiat minim ipsum sit pariatur voluptate irure cupidatat. Ut Lorem laboris nisi commodo qui ipsum anim quis velit sint esse. Proident ad nulla adipisicing deserunt laboris amet et sit minim magna eiusmod elit mollit amet. Ut nisi dolor ullamco sint veniam dolore quis adipisicing eu labore magna elit anim commodo.Elit mollit exercitation enim magna quis. Ex nulla irure voluptate tempor eiusmod. Esse et sunt veniam fugiat mollit officia magna ullamco.",
      },
      {
        title: "Prueba de titulo 3",
        date: moment().format("MMM ddd YYY"),
        content:
          "Laboris aute incididunt dolor aliquip cillum laborum voluptate labore cupidatat sint magna. Laboris et Lorem nisi qui fugiat quis ut enim nulla. Cupidatat elit ipsum nisi sit exercitation ullamco id ullamco. Est reprehenderit ad fugiat minim ipsum sit pariatur voluptate irure cupidatat. Ut Lorem laboris nisi commodo qui ipsum anim quis velit sint esse. Proident ad nulla adipisicing deserunt laboris amet et sit minim magna eiusmod elit mollit amet. Ut nisi dolor ullamco sint veniam dolore quis adipisicing eu labore magna elit anim commodo.Elit mollit exercitation enim magna quis. Ex nulla irure voluptate tempor eiusmod. Esse et sunt veniam fugiat mollit officia magna ullamco.",
      },
      {
        title: "Prueba de titulo 4",
        date:
          "Publicado el dia: " +
          moment().date("ddd") +
          "de " +
          moment().format("MMM") +
          "del " +
          moment().format("YYY"),
        content:
          "Laboris aute incididunt dolor aliquip cillum laborum voluptate labore cupidatat sint magna. Laboris et Lorem nisi qui fugiat quis ut enim nulla. Cupidatat elit ipsum nisi sit exercitation ullamco id ullamco. Est reprehenderit ad fugiat minim ipsum sit pariatur voluptate irure cupidatat. Ut Lorem laboris nisi commodo qui ipsum anim quis velit sint esse. Proident ad nulla adipisicing deserunt laboris amet et sit minim magna eiusmod elit mollit amet. Ut nisi dolor ullamco sint veniam dolore quis adipisicing eu labore magna elit anim commodo.Elit mollit exercitation enim magna quis. Ex nulla irure voluptate tempor eiusmod. Esse et sunt veniam fugiat mollit officia magna ullamco.",
      },
      {
        title: "Prueba de titulo 5",
        date: new Date(),
        content:
          "Laboris aute incididunt dolor aliquip cillum laborum voluptate labore cupidatat sint magna. Laboris et Lorem nisi qui fugiat quis ut enim nulla. Cupidatat elit ipsum nisi sit exercitation ullamco id ullamco. Est reprehenderit ad fugiat minim ipsum sit pariatur voluptate irure cupidatat. Ut Lorem laboris nisi commodo qui ipsum anim quis velit sint esse. Proident ad nulla adipisicing deserunt laboris amet et sit minim magna eiusmod elit mollit amet. Ut nisi dolor ullamco sint veniam dolore quis adipisicing eu labore magna elit anim commodo.Elit mollit exercitation enim magna quis. Ex nulla irure voluptate tempor eiusmod. Esse et sunt veniam fugiat mollit officia magna ullamco.",
      },
      {
        title: "Prueba de titulo 6",
        date: new Date(),
        content:
          "Laboris aute incididunt dolor aliquip cillum laborum voluptate labore cupidatat sint magna. Laboris et Lorem nisi qui fugiat quis ut enim nulla. Cupidatat elit ipsum nisi sit exercitation ullamco id ullamco. Est reprehenderit ad fugiat minim ipsum sit pariatur voluptate irure cupidatat. Ut Lorem laboris nisi commodo qui ipsum anim quis velit sint esse. Proident ad nulla adipisicing deserunt laboris amet et sit minim magna eiusmod elit mollit amet. Ut nisi dolor ullamco sint veniam dolore quis adipisicing eu labore magna elit anim commodo.Elit mollit exercitation enim magna quis. Ex nulla irure voluptate tempor eiusmod. Esse et sunt veniam fugiat mollit officia magna ullamco.",
      },
    ];

    posts.forEach((item, index) => {
      var post = `
            <article class="post">
            <h2>${item.title} </h2>
            <span class="date"> ${item.date} </span>
            <p>
                ${item.content}
            <p>
            <a href="#" class = "button-more">Leer mas </a>
            </article>
        `;

      $("#posts").append(post);
    });
  }

  //Selector de tema

  var theme = $("#theme");
  $("#to-green").click(function () {
    theme.attr("href", "css/green.css");
  });
  $("#to-red").click(function () {
    theme.attr("href", "css/red.css");
  });
  $("#to-blue").click(function () {
    theme.attr("href", "css/blue.css");
  });

  //Scroll arriba de la web

  $(".subir").click(function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      500
    );

    return false;
  });

  //Login Falso con Local Storage

  $("#login form").submit(function () {
    var form_name = $("#form_name").val();

    localStorage.setItem("form_name", form_name);
  });

  var form_name = localStorage.getItem("form_name");
  if (form_name != null && form_name != "undefined") {
    var about_parrafo = $("#about p");

    about_parrafo.html("<br><strong>Bienvenido , " + form_name + "</strong>");
    about_parrafo.append("<a href='#' id='logout'>Cerrar Sesion</a>");

    $("#login").hide();

    $("#logout").click(function () {
      localStorage.clear();
      location.reload();
    });
  }

  //Acordeon

  if (window.location.href.indexOf("about") > -1) {
    $("#acordeon").accordion();
  }

  //Reloj

  if (window.location.href.indexOf("reloj") > -1) {
    setInterval(() => {
      var reloj = moment().format("hh:mm:ss");
      $("#reloj").html(reloj);
    }, 1000);
  }

  //Validacion
  if (window.location.href.indexOf("contact") > -1) {
    $("form input[name='date']").datepicker({
      dateFormat: "dd-mm-yy",
    });
    $.validate({
      lang: 'es',
      errorMessagePosition: 'top',
      scrollTopOnError: true,
      modules : 'date, security',
    });
  }
});
