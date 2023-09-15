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
function cambioModus(nombre, dire, menor, maxi) {
  nombreModulo.innerHTML = nombre;
  fotoAlu.src = dire;
  min = menor;
  tope = maxi;
}

btn1.onclick = function () {
  cambioModus(
    "ATENCIÓN SOCIOSANITARIA CON DINAMIZACIÓN",
    "images/alu (1).jpg",
    1,
    5
  );
};
btn2.onclick = function () {
  cambioModus("PÁGINAS Y APLICACIONES WEB", "images/alu (10).jpg", 9, 18);
};
btn3.onclick = function () {
  cambioModus("SERVICIOS DE OFICINA", "images/alu (20).jpg", 19, 26);
};
btn4.onclick = function () {
  cambioModus("ATENCIÓN SOCIOSANITARIA", "images/alu (29).jpg", 29, 36);
};
btn5.onclick = function () {
  cambioModus("PERSONAL", "images/profezo.jpg");
};
btn6.onclick = function () {
  cambioModus("ORLA", "images/portada.jpg");
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

for (let event of ['cut', 'copy', 'paste', 'contextmenu']) {
  window.addEventListener(event, e => e.preventDefault())
}
