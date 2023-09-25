//////////// VOLVER ET //////////////

et.onclick = function () {
  window.location.href = "../index.html";
};
///////////// MENU ///////////////////
document.getElementById("menunav").style.right = "-20em";
document
  .getElementById("botonHamburguesa")
  .addEventListener("click", function () {
    var menu = document.getElementById("menunav");
    if (menu.style.right == "-20em") {
      menu.style.right = "0em";
      menu.style.transition = "1s";
    } else {
      menu.style.right = "-20em";
    }
  });

//////////////////////CAMBIO DE MODULO/////////////////////////////
var min;
var tope;
var redondeo = document.getElementById("fotoAlu");

function cambioModus(nombre, dire, menor, maxi) {
  nombreModulo.innerHTML = nombre;
  fotoAlu.src = dire;
  min = menor;
  tope = maxi;
}
function noOrla() {
  redondeo.style.borderRadius = "50%";
  redondeo.style.height = "100%";
  redondeo.style.marginTop = "0%";
}

function paraOrla() {
  redondeo.style.height = "80%";
  redondeo.style.marginTop = "10%";
  redondeo.style.borderRadius = "0%";
}
window.onload = function () {
  cambioModus("ORLAS", "images/alu (37).jpg", 37, 40);
  paraOrla();
};

btn1.onclick = function () {
  cambioModus(
    "ATENCIÓN SOCIOSANITARIA CON DINAMIZACIÓN",
    "images/alu (1).jpg",
    1,
    6
  );
  noOrla();
};
btn2.onclick = function () {
  cambioModus("PÁGINAS Y APLICACIONES WEB", "images/alu (10).jpg", 9, 18);
  noOrla();
};
btn3.onclick = function () {
  cambioModus("SERVICIOS DE OFICINA", "images/alu (20).jpg", 19, 26);
  noOrla();
};
btn4.onclick = function () {
  cambioModus("ATENCIÓN SOCIOSANITARIA", "images/alu (27).jpg", 27, 36);
  noOrla();
};
btn5.onclick = function () {
  cambioModus("PERSONAL", "images/alu (41).jpg");
  noOrla();
};
btn6.onclick = function () {
  cambioModus("ORLAS", "images/alu (37).jpg", 37, 40);
  paraOrla();
};

////////////////////////CAMBIO DE FOTO/////////////////////////////

sig.onclick = function () {
  var posi1 = fotoAlu.src.lastIndexOf("(") + 1;
  var posi2 = fotoAlu.src.lastIndexOf(")");
  var num = Number(fotoAlu.src.substring(posi1, posi2));
  if (nombreModulo.innerHTML == "PERSONAL") {
    return false;
  }
  if (num < tope) {
    ++num;
  } else {
    num = min;
  }
  fotoAlu.src = "images/alu (" + num + ").jpg";
};
ant.onclick = function () {
  var posi1 = fotoAlu.src.lastIndexOf("(") + 1;
  var posi2 = fotoAlu.src.lastIndexOf(")");
  var num = Number(fotoAlu.src.substring(posi1, posi2));
  if (nombreModulo.innerHTML == "PERSONAL") {
    return false;
  }
  if (num > min) {
    --num;
  } else {
    num = tope;
  }
  fotoAlu.src = "images/alu (" + num + ").jpg";
};

for (let event of ["cut", "copy", "paste", "contextmenu"]) {
  window.addEventListener(event, (e) => e.preventDefault());
}
