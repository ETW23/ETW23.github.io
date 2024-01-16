var jsonDoc;
var datos;
var particionadoTh;
var cadena;
//Declaro el set para guardar lo que hay en servicios:
let servicioSet = new Set();

function traerFichero() {
  //Marcar el boton de tabla na mas cargar la pagina
  document.getElementById("botonTabla").click();
  // Obtener la instancia del objeto JSON
  var http_request = new XMLHttpRequest();

  // Preparar la funcion de respuesta
  http_request.onreadystatechange = muestraContenido;

  // Realizar peticion HTTP
  switch (document.getElementById("ano").value) {
    case "0":
      http_request.open(
        "GET",
        "https://opendata.gijon.es/descargar.php?id=587&tipo=JSON",
        false
      );
      http_request.send(null);
      break;
    case "1":
      http_request.open(
        "GET",
        "https://opendata.gijon.es/descargar.php?id=586&tipo=JSON",
        false
      );
      http_request.send(null);
      break;
    case "2":
      http_request.open(
        "GET",
        "https://opendata.gijon.es/descargar.php?id=585&tipo=JSON",
        false
      );
      http_request.send(null);
      break;
    case "3":
      http_request.open(
        "GET",
        "https://opendata.gijon.es/descargar.php?id=584&tipo=JSON",
        false
      );
      http_request.send(null);
      break;
    case "4":
      http_request.open(
        "GET",
        "https://opendata.gijon.es/descargar.php?id=583&tipo=JSON",
        false
      );
      http_request.send(null);
      break;
    case "5":
      http_request.open(
        "GET",
        "https://opendata.gijon.es/descargar.php?id=582&tipo=JSON",
        false
      );
      http_request.send(null);
      break;
    case "6":
      http_request.open(
        "GET",
        "https://opendata.gijon.es/descargar.php?id=581&tipo=JSON",
        false
      );
      http_request.send(null);
      break;
    case "7":
      http_request.open(
        "GET",
        "https://opendata.gijon.es/descargar.php?id=580&tipo=JSON",
        false
      );
      http_request.send(null);
      break;
    case "8":
      http_request.open(
        "GET",
        "https://opendata.gijon.es/descargar.php?id=579&tipo=JSON",
        false
      );
      http_request.send(null);
      break;
    case "9":
      http_request.open(
        "GET",
        "https://opendata.gijon.es/descargar.php?id=578&tipo=JSON",
        false
      );
      http_request.send(null);
      break;
    case "10":
      http_request.open(
        "GET",
        "https://opendata.gijon.es/descargar.php?id=577&tipo=JSON",
        false
      );
      http_request.send(null);
      break;
    case "11":
      http_request.open(
        "GET",
        "https://opendata.gijon.es/descargar.php?id=576&tipo=JSON",
        false
      );
      http_request.send(null);
      break;
    case "12":
      http_request.open(
        "GET",
        "https://opendata.gijon.es/descargar.php?id=541&tipo=JSON",
        false
      );
      http_request.send(null);
      break;
    case "13":
      http_request.open(
        "GET",
        "https://opendata.gijon.es/descargar.php?id=571&tipo=JSON",
        false
      );
      http_request.send(null);
      break;
    case "14":
      http_request.open(
        "GET",
        "https://opendata.gijon.es/descargar.php?id=588&tipo=JSON",
        false
      );
      http_request.send(null);
      break;
    case "15":
      http_request.open(
        "GET",
        "https://opendata.gijon.es/descargar.php?id=727&tipo=JSON",
        false
      );
      http_request.send(null);
      break;
    case "16":
      http_request.open(
        "GET",
        "https://opendata.gijon.es/descargar.php?id=884&tipo=JSON",
        false
      );
      http_request.send(null);
      break;
    case "17":
      http_request.open(
        "GET",
        "https://opendata.gijon.es/descargar.php?id=591&tipo=JSON",
        false
      );
      http_request.send(null);
      break;
    case "18":
      http_request.open(
        "GET",
        "https://opendata.gijon.es/descargar.php?id=932&tipo=JSON",
        false
      );
      http_request.send(null);
      break;

    //Cuando se publiquen años a partir del 2021,crear otro switch case con codigo 19 y copiar el enlace al JSON correspondiente
  }

  function muestraContenido() {
    if (http_request.readyState == 4) {
      if (http_request.status == 200) {
        jsonDoc = JSON.parse(http_request.responseText);

        //Guardamos el jsonDoc.usotarjetaciudadanas.usotarjetaciudadana en una variable pa no tener que escribirlo entero:
        datos = jsonDoc.usotarjetaciudadanas.usotarjetaciudadana;

        // console.log("Esto coge todo: ", datos[0].toString().split(","));
        // console.log("Esto coge fechas: ", datos[0].fecha);
        // console.log("Esto coge servicios publicos: ", datos[0].servicio);
        // console.log("Esto coge instalacion: ", datos[0].instalacion);
        // console.log("Esto coge usos: ", datos[0].usos);

        titulos = JSON.stringify(datos[0]).split(",");
        if (document.getElementById("botonTabla")) {
          document.getElementById("containerTabla").innerHTML =
            '<table id="tablica"> </table>';
          cadena = "<tr>";
          document.getElementById("mes").value = "-1";

          for (let k = 0; k < titulos.length; k++) {
            cadena += "<th>";
            titulos[k]
              .split(":")[0]
              .replace('"', "")
              .replace('"', "")
              .replace("{", "");

            particionadoTh = titulos[k]
              .split(":")[0]
              .replace('"', "")
              .replace('"', "")
              .replace("{", "");
            // console.log(particionadoTh);
            particionadoTh =
              particionadoTh[0].toUpperCase() + particionadoTh.slice(1);
            particionadoTh += " ";
            cadena += particionadoTh;
            cadena += "</th>";
          }
          cadena += "</tr>";
          // console.log("Esto ye cadena " + cadena);
          document.getElementById("tablica").innerHTML = cadena;
          document.getElementById("tablica").style.border += "1px solid black";
          for (let i = 0; i < datos.length; i++) {
            if (i % 2 == 0) {
              cadenaTr = '<tr class ="pintame1">';
            } else {
              cadenaTr = '<tr class ="pintame2">';
            }
            document.getElementById("tablica").innerHTML +=
              cadenaTr +
              "<td>" +
              datos[i].fecha +
              "</td>" +
              "<td>" +
              datos[i].servicio +
              "</td>" +
              "<td>" +
              datos[i].instalacion +
              "</td>" +
              "<td>" +
              datos[i].usos +
              "</td>";
            +"</tr>";
          }
        } else {
          document.getElementById("containerTabla").innerHTML = "hola";
        }
        // if (document.getElementById("botonBarras").focus) {
        //   document.getElementById("containerTabla").innerHTML = "hola";
        // }
      }
    }
  }
}

//Intentar coger la fecha y que muestre solo estas en el select option de mes.
function traerMes() {
  //Crear desplegable para ordenar por meses y por servicios para que asi la parte grafica svg sea mas manejable.
  var selectedMonth = document.getElementById("mes").value;
  var filteredData = datos.filter(function (item) {
    return item.fecha.split("-")[1] === selectedMonth;
  });

  document.getElementById("tablica").innerHTML = "";
  document.getElementById("tablica").innerHTML +=
    "<tr><th>Fecha</th><th>Servicio</th><th>Instalacion</th><th>Usos</th></tr>";

  filteredData.forEach(function (item, index) {
    var rowClass = index % 2 === 0 ? "pintame1" : "pintame2";
    document.getElementById("tablica").innerHTML +=
      '<tr class="' +
      rowClass +
      '"><td>' +
      item.fecha +
      "</td><td>" +
      item.servicio +
      "</td><td>" +
      item.instalacion +
      "</td><td>" +
      item.usos +
      "</td></tr>";
  });
}

// var auxilioBoton;
// var botones;
// document.getElementsByClassName("btn-1").onclick = function () {
//   auxilioBoton = document.getElementsByClassName("btn-1").style.color;
//   document.getElementsByClassName("btn-1").style.color =
//     document.getElementsByClassName("spanbotones").style.backgroundColor;
//   document.getElementsByClassName("spanbotones").style.backgroundColor =
//     auxilioBoton;
// };
function cambia(btn) {
  botones = document.getElementsByClassName("btn-1");
  for (let i = 0; i < botones.length; i++) {
    botones[i].classList.remove("active");
  }
  btn.classList.add("active");
}

//Crear grafico svg que ordene por servicio y su uso en cada mes,tanto en grafica como en tarta.
//Crear un boton que permita cambiar entre grafica y tabla y dentro de grafica entre grafico de barra y de tarta.

traerFichero();
console.log("ddawjnawdn" + titulos);
