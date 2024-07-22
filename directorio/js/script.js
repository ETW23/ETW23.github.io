//Obtener json de condiciones climatologicas
const captura = new CapturaJSON("https://movil.puertos.es/simo/seastate/harbor/", "11210/extended");

//Se imprimen los datos climatologicos
captura.obtenerDatos(function (datos) {
  tempAir.innerHTML = parseFloat(datos.AirTemp[0].ta).toFixed(1) + ' &deg;C';
  velVien.innerHTML = parseInt(datos.wind[0].vv_md).toFixed(1) + ' Km/h'
});



//Obetener datos de la temperatura del agua 
const tempAgua = new CapturaJSON("https://opendata.gijon.es/", "descargar.php?id=972&tipo=JSON");
tempAgua.obtenerDatos(function (teag) {
  let tempeagua = teag.temperatura_aguas.
    temperatura_agua[0].temperatura;
  //En caso de que no haya dato se imprime una alternativa 
  if (tempeagua.length === 0) {
    tempWat.innerHTML = 'Sin datos disponibles';
  } else {
    tempWat.innerHTML = tempeagua + ' &deg;C';
  }
});



//Obtener json de mareas
const capturaMareas = new CapturaJSON("https://movil.puertos.es/simo/seastate/harbor/", "11210/daily_extended");

//Se imprimen los datos de mareas
capturaMareas.obtenerDatos(function (mareas) {
  var fecha = new Date();

  //Establezco el horario de verano (UCT+2)
  fecha.setHours(2, 0, 0, 0);

  //Pasamos a hora UNIX
  var horaUnix = fecha.getTime() / 1000;

  //Determinamos la hora de las mareas y donde se se introduce en el HTML
  function pleaYbaja(variable, posicion, ubicacion, primeOsegu) {
    //Devlviendo el formato de hora normal
    variable = new Date(mareas[horaUnix][0][posicion] * 1000);
    var horas = variable.getHours();
    var minutos = variable.getMinutes();

    //Se coloca un 0 delante de la hora y los minutos cuando corresponda
    if (horas < 10) {
      horas = "0" + horas;
    }
    if (minutos < 10) {
      minutos = "0" + minutos;
    }
    var horaNormal = horas + ":" + minutos;

    ubicacion.innerHTML += '<strong>' + primeOsegu + '</strong>' + horaNormal + ' h <br>';
  }

  pleaYbaja('plea1', 'high_tide1_date', mareAlta1, '1&ordf; ');
  pleaYbaja('plea2', 'high_tide2_date', mareAlta1, '2&ordf; ');
  pleaYbaja('baja1', 'low_tide1_date', mareBaja1, '1&ordf; ');
  pleaYbaja('baja2', 'low_tide2_date', mareBaja1, '2&ordf; ');

});



//Se obtiene de datos abiertos el estado del agua en las playas
const caliAgua = new CapturaJSON("https://opendata.gijon.es/", "descargar.php?id=879&tipo=JSON");

//Accede a los valores de los datos
caliAgua.obtenerDatos(function (bano) {
  var zonasBano = Object.values(bano.agrupacion_zonas.zonas[0]);

  //Detecta en que dominio se encuentra para diferenciar las playas
  var ubicacion = location.href;
  var ultimoGuion = ubicacion.lastIndexOf('-');
  var parteHastaUltimoGuion = ubicacion.substring(ultimoGuion);

  //Imprime la fecha de la ultima actualizacion de los datos
  fechaCalidadAgua.innerHTML = '<strong>' + zonasBano[0] + '</strong>';
  //Dependiendo del dominio se accede en cada caso a la correspondiente playa para incluir en la pagina las variaciones de datos que se producen en cada una
  servi.innerHTML = esMayo();
  switch (parteHastaUltimoGuion) {
    case '-arbeyal/':
      calidadDeAgua.innerHTML = '<div class="separador">Oeste: <strong>' + zonasBano[1].toUpperCase() + '</strong></div>' + '<div>Este: <strong>' + zonasBano[2].toUpperCase() + '</strong></div>';
      horarioSalvamento.innerHTML = horario['poniarbe'][fecha()];
      break;

    case '-pando/':
      calidadDeAgua.innerHTML = '<div class="separador">Oeste: <strong>' + zonasBano[3].toUpperCase() + '</strong></div>' + '<div>Este: <strong>' + zonasBano[4].toUpperCase() + '</strong></div>';
      horarioSalvamento.innerHTML = horario['poniarbe'][fecha()];
      break;

    case '-lorenzo/':
      calidadDeAguaSlo.innerHTML = '<div class="separador">Escalera 4: ' + '<strong> ' + zonasBano[5].toUpperCase() + '</strong></div><div class="separador"> Escalera 8: ' + '<strong> ' + zonasBano[6].toUpperCase() + '</strong></div>' + '<div class="separador">Escalera 12: ' + '<strong> ' + zonasBano[7].toUpperCase() + '</strong></div>';
      horarioSalvamento.innerHTML = horario['mayores'][fecha()];
      break;

    case '-mayanes/':
      calidadDeAgua.innerHTML = '<strong>' + zonasBano[8].toUpperCase() + '</strong>';
      horarioSalvamento.innerHTML = horario['este'][fecha()];
      break;

    case '-cervigon/':
      calidadDeAgua.innerHTML = '<strong>' + zonasBano[9].toUpperCase() + '</strong>';
      servi.innerHTML = playaMenor();
      horarioSalvamento.innerHTML = horario['este'][fecha()];
      break;

    case '-penarrubia/':
      calidadDeAgua.innerHTML = '<strong>' + zonasBano[10].toUpperCase() + '</strong>';
      servi.innerHTML = playaMenor();
      horarioSalvamento.innerHTML = horario['este'][fecha()];
      break;

    case '-estano/':
      calidadDeAgua.innerHTML = '<strong>' + zonasBano[12].toUpperCase() + '</strong>';
      servi.innerHTML = playaMenor();
      horarioSalvamento.innerHTML = horario['este'][fecha()];
      break;
    default:
      window.location.href = 'https://www.gijon.es/playas';
  }
});



//Funcion para cambiar el icono del estado de la bandera
function cambiarIconoZonas3(...zonas) {
  zonas.forEach((zona, index) => {
    const icono = document.getElementsByClassName('band')[index];
    if (zona.indexOf('-') !== -1) {
      icono.src = '../images/bandera.png';
      banderas.innerHTML = '<strong>SIN BANDERA</strong>';
    } else {
      icono.src = '../images/' + zona + '.png';
    }
  });
}



//Funcion que determina el nivel de UV y establece el valor en la barra
const radiUV = new CapturaJSON("https://opendata.gijon.es/", "descargar.php?id=976&tipo=JSON");
//Accede a los valores de los datos
radiUV.obtenerDatos(function (uv) {
  let radiaciones = 0//uv.radiaciones.radiacion[0].indice;
  const uv1 = document.getElementById('uv1');
  const uv2 = document.getElementById('uv2');
  if (radiaciones > 11 || radiaciones < 1) {
    uv1.style.display = 'none';
    uv2.style.display = 'none';
  }
  let iuv = document.getElementById('nivelUv');
  iuv.innerHTML = radiaciones;
  actualizarNivelUV();
});

function actualizarNivelUV() {
  const numeroUV = parseInt(document.getElementById('nivelUv').innerHTML, 10);
  const barraUV = document.getElementById('barraUV');
  const recomenda = document.getElementById('recomenda');

  // Actualizar el valor del medidor
  barraUV.value = numeroUV;

  // Actualizar el color del medidor basado en el valor
  barraUV.classList.remove('verde', 'amarillo', 'naranja', 'rojo', 'morado');
  uv1.classList.remove('sinUv');

  if (numeroUV <= 2) {
    barraUV.classList.add('verde');
    recomenda.innerHTML = '<strong>NO NECESITA PROTECCI&Oacute;N</strong>';
  } else if (numeroUV <= 5) {
    barraUV.classList.add('amarillo');
    recomenda.innerHTML = '<strong>NECESITA PROTECCI&Oacute;N</strong>';
  } else if (numeroUV <= 7) {
    barraUV.classList.add('naranja');
    recomenda.innerHTML = '<strong>NECESITA PROTECCI&Oacute;N</strong>';
  } else if (numeroUV <= 10) {
    barraUV.classList.add('rojo');
    recomenda.innerHTML = '<strong>NECESITA PROTECCI&Oacute;N EXTRA</strong>';
  } else if (numeroUV === 11) {
    barraUV.classList.add('morado');
    recomenda.innerHTML = '<strong>NECESITA PROTECCI&Oacute;N EXTRA</strong>';
  }
}
actualizarNivelUV();



//Se obtiene de datos abiertos el estado del agua en las playas
const datosBanderas = new CapturaJSON("https://opendata.gijon.es/", "descargar.php?id=973&tipo=JSON");

//Accede a los valores de los datos
datosBanderas.obtenerDatos(function (bande) {
  var zonasbande = Object.values(bande.banderas.bandera[0]);
  var banderas = document.getElementById('banderas');
  //Detecta en que dominio se encuentra para diferenciar las playas
  var ubicacion = location.href;
  var ultimoGuion = ubicacion.lastIndexOf('-');
  var parteHastaUltimoGuion = ubicacion.substring(ultimoGuion);

  //Dependiendo del dominio se accede en cada caso a la correspondiente playa para incluir en la pagina las variaciones de datos que se producen en cada una

  switch (parteHastaUltimoGuion) {
    case '-arbeyal/':
      banderas.innerHTML = '<strong>' + zonasbande[0].toUpperCase() + '</strong>';
      cambiarIconoZonas3(zonasbande[0]);
      break;

    case '-pando/':
      banderaOeste.innerHTML = '<strong>' + zonasbande[2].toUpperCase() + '</strong>';
      banderaCentro.innerHTML = '<strong>' + zonasbande[1].toUpperCase() + '</strong>';
      banderaEste.innerHTML = '<strong>' + zonasbande[3].toUpperCase() + '</strong>';
      cambiarIconoZonas3(zonasbande[2], zonasbande[1], zonasbande[3]);
      break;

    case '-lorenzo/':
      banderaOeste.innerHTML = '<strong>' + zonasbande[4].toUpperCase() + '</strong>';
      banderaCentro.innerHTML = '<strong>' + zonasbande[5].toUpperCase() + '</strong>';
      banderaEste.innerHTML = '<strong>' + zonasbande[6].toUpperCase() + '</strong>';
      cambiarIconoZonas3(zonasbande[4], zonasbande[5], zonasbande[6])
      break;

    case '-mayanes/':
      banderas.innerHTML = '<strong>' + zonasbande[7].toUpperCase() + '</strong>';
      cambiarIconoZonas3(zonasbande[7]);
      break;

    case '-cervigon/':
      banderas.innerHTML = '<strong>' + zonasbande[8].toUpperCase() + '</strong>';
      cambiarIconoZonas3(zonasbande[8]);
      break;

    case '-penarrubia/':
      banderas.innerHTML = '<strong>' + zonasbande[9].toUpperCase() + '</strong>';
      cambiarIconoZonas3(zonasbande[9]);
      break;

    case '-estano/':
      banderas.innerHTML = '<strong>' + zonasbande[11].toUpperCase() + '</strong>';
      cambiarIconoZonas3(zonasbande[11]);
      break;

    default:
      window.location.href = 'https://www.gijon.es/playas';
  }
});