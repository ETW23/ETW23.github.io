var jsonDoc;
var datos;
var particionadoTh;
var cadena;
//Declaro el set para guardar lo que hay en servicios:
let servicioSet = new Set();
//Aqui guardamos la url menos el numero de esta.
var cadenaURL;
var cadenaFunction;
var titulos;
var flechaArriba = "&#9650";
var flechaAbajo = "&#9660;";
function marcoTabla() {
  //Marcar el boton de tabla na mas cargar la pagina
  // document.getElementById("botonTabla").click();
}
function traerFichero() {
  // Obtener la instancia del objeto JSON
  var http_request = new XMLHttpRequest();

  //Hacer que llame a una funcion diferente dependiendo del boton marcado.Para ello,habra que crear una cadenica.

  //Hacer una especie de if que me lo analice.No deberia ser un if creo pero bue
  cadenaFunction =
    // Preparar la funcion de respuesta

    http_request.onreadystatechange = muestracontenidoTabla;
  cadenaURL = "https://opendata.gijon.es/descargar.php?id=";
  cadenaURL += document.getElementById("ano").value;

  cadenaURL += "&tipo=JSON";
  http_request.open("GET", cadenaURL, false);
  http_request.send();
  console.log(cadenaURL);
  // Realizar peticion HTTP

  function muestracontenidoTabla() {
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
        botonTabla();
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

  document.querySelector("#tablica tbody").innerHTML = "";
  document.querySelector("#tablica tbody").innerHTML +=
    "<tr><th>Fecha</th><th>Servicio</th><th>Instalacion</th><th>Usos</th></tr>";

  filteredData.forEach(function (item, index) {
    var rowClass = index % 2 === 0 ? "pintame1" : "pintame2";
    document.querySelector("#tablica tbody").innerHTML +=
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

// document.getElementById("botonTabla").onclick =
//   document.getElementById("botonBarras").onclick =
//   document.getElementById("botonLineas").onclick =
//     function () {
//       botones = document.getElementsByClassName("btn-1");
//       for (let i = 0; i < botones.length; i++) {
//         botones[i].classList.remove("active");
//       }
//       this.classList.add("active");
//       eval(this.id + "()");
//     };

function sortTable(column) {
  // console.log(column);

  const table = document.querySelector("table#tablica");

  // console.log(table);

  const tbody = table.querySelector("tbody");
  const rows = Array.from(tbody.querySelectorAll("tr"));
  rows.sort((a, b) => {
    const valueA = a.querySelectorAll("td, th")[column].textContent;
    const valueB = b.querySelectorAll("td, th")[column].textContent;

    if (!isNaN(valueA) && !isNaN(valueB)) {
      return valueA - valueB;
    }

    if (valueA < valueB) {
      return -1;
    } else if (valueA > valueB) {
      return 1;
    } else {
      return 0;
    }
  });
  tbody.innerHTML = "";
  rows.forEach((row) => tbody.appendChild(row));
}

//Esto se llama al hacer click al boton de tabla
function botonTabla() {
  // if (document.getElementById("botonTabla")) {
  if (true) {
    document.getElementById("containerTabla").innerHTML =
      '<table id="tablica"><thead></thead><tbody></tbody></table>';
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

      cadena +=
        particionadoTh +
        "<button id='flechicas' class='flechicasClass' onclick='sortTable(" +
        k +
        ")'>" +
        flechaArriba +
        "</button>";
      cadena += "</th>";
    }
    cadena += "</tr>";
    // console.log("Esto ye cadena " + cadena);
    document.querySelector("#tablica thead").innerHTML = cadena;
    document.querySelector("#tablica thead").style.border += "1px solid black";
    for (let i = 0; i < datos.length; i++) {
      // if (i % 2 == 0) {
      //   cadenaTr = '<tr class ="pintame1">';
      // } else {
      //   cadenaTr = '<tr class ="pintame2">';
      // }
      cadenaTr = "<tr>";
      document.querySelector("#tablica tbody").innerHTML +=
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
  }
}
//Esto se llama al hacer click al boton de grafico de barras
function botonBarras() {
  document.getElementById("containerTabla").innerHTML = "BORRAU";
}
//Esto se llama al hacer click al boton de grafico de lineas
function botonLineas() {
  document.getElementById("containerTabla").innerHTML = "BORRAU";
}

//Hacer los botones de las flechas funcionales:
function flechicas() {
  document.getElementById("containerTabla").innerHTML = "BORRAU";
}

marcoTabla();
traerFichero();

// document.getElementById("flechicas").onclick = function () {
//   botones1 = document.getElementsByClassName("flechicasClass");
//   for (let i = 0; i < botones1.length; i++) {
//     botones1[i].classList.remove("active");
//     document.getElementById("flechicas").innerHTML = flechaAbajo;
//   }
//   this.classList.add("active");
//   document.getElementById("flechicas").innerHTML = flechaArriba;
//   eval(this.id + "()");
// };
//Crear grafico svg que ordene por servicio y su uso en cada mes,tanto en grafica como en tarta.
//Crear un boton que permita cambiar entre grafica y tabla y dentro de grafica entre grafico de barra y de tarta.

console.log("ddawjnawdn" + titulos);
