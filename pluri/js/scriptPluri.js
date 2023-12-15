document.querySelector(".botonMenu").onclick = function (e) {
  e.preventDefault();
  document.querySelector("header").classList.toggle("menuAbierto");
  document.querySelector(".main").classList.toggle("mainAbierto");
  document.querySelector(".navegador").classList.toggle("navegadorAbierto");
};

let figuras = document.querySelectorAll(".bande");
let congo = document.getElementById("con");

figuras.forEach((figura) => {
  figura.addEventListener("click", () => {
    const texto = figura.querySelector(".texto");

    if (figura.id === "con") {
      // Verificar si ya está abierto
      const estaAbierto = figura.classList.contains("bandeAbierto");

      // Cambiar la clase y la altura
      figura.classList.toggle("bandeAbierto");
      texto.classList.toggle("textoAbierto");

      if (estaAbierto) {
        // Si ya estaba abierto, revertir la altura a 11.4
        figura.style.height = "11.8em";
      } else {
        // Si no estaba abierto, establecer la altura a "auto"
        figura.style.height = "auto";
      }
    } else {
      // Si no es el elemento con el ID "con", simplemente cambiar clases
      figura.classList.toggle("bandeAbierto");
      texto.classList.toggle("textoAbierto");
    }
  });
});

// funciones paises
//argentina
document.querySelector("#arg").ondblclick = function () {
  window.location.href = "argentina/index.html";
};
document.querySelector("#arg").onclick = function (e) {
  e.preventDefault();
  document.querySelector(".AR").classList.toggle("pathOpen");
};
//nicaragua
document.querySelector("#nic").ondblclick = function () {
  window.location.href = "nicaragua/index.html";
};
document.querySelector("#nic").onclick = function (e) {
  e.preventDefault();
  document.querySelector(".NI").classList.toggle("pathOpen");
};
//rumania
document.querySelector("#rom").ondblclick = function () {
  window.location.href = "rumania/index.html";
};
document.querySelector("#rom").onclick = function (e) {
  e.preventDefault();
  document.querySelector(".RO").classList.toggle("pathOpen");
};
//ucrania
document.querySelector("#ucr").ondblclick = function () {
  window.location.href = "ucrania/index.html";
};
document.querySelector("#ucr").onclick = function (e) {
  e.preventDefault();
  document.querySelector(".UA").classList.toggle("pathOpen");
};
//etnia gitana
document.querySelector("#git").ondblclick = function () {
  window.location.href = "etnia_gitana/index.html";
};
document.querySelector("#git").onclick = function (e) {
  e.preventDefault();
  document.querySelector(".ES").classList.toggle("pathOpen");
  document.querySelector(".IN").classList.toggle("pathOpen");
  document.querySelector(".MA").classList.toggle("pathOpen");
};
//venezuela
document.querySelector("#ven").ondblclick = function () {
  window.location.href = "venezuela/index.html";
};
document.querySelector("#ven").onclick = function (e) {
  e.preventDefault();
  document.querySelector(".VE").classList.toggle("pathOpen");
};
//afganistan
document.querySelector("#afg").ondblclick = function () {
  window.location.href = "afganistan/index.html";
};
document.querySelector("#afg").onclick = function (e) {
  e.preventDefault();
  document.querySelector(".AF").classList.toggle("pathOpen");
};
//sahara
document.querySelector("#sah").ondblclick = function () {
  window.location.href = "sahara/index.html";
};
document.querySelector("#sah").onclick = function (e) {
  e.preventDefault();
  document.querySelector(".EH").classList.toggle("pathOpen");
};
//congo
document.querySelector("#con").ondblclick = function () {
  window.location.href = "congo/index.html";
};
document.querySelector("#con").onclick = function (e) {
  e.preventDefault();
  document.querySelector(".CD").classList.toggle("pathOpen");
};
//marruecos
document.querySelector("#mar").ondblclick = function () {
  window.location.href = "marruecos/index.html";
};
document.querySelector("#mar").onclick = function (e) {
  e.preventDefault();
  document.querySelector(".MA").classList.toggle("pathOpen");
};
//colombia
document.querySelector("#col").ondblclick = function () {
  window.location.href = "colombia/index.html";
};
document.querySelector("#col").onclick = function (e) {
  e.preventDefault();
  document.querySelector(".CO").classList.toggle("pathOpen");
};

//////////////////////AUDIO//////////////////////////////////////
muteador.onclick = function () {
  if (iconoMuteador.src.includes("mute.png")) {
    iconoMuteador.src = "images/sonido.png";
    intro.muted = false;
  } else {
    iconoMuteador.src = "images/mute.png";
    intro.muted = true;
  }
};

reproductor.onclick = function () {
  if (intro.paused) {
    intro.play();
    intro.currentTime = 0;
  } else {
    intro.pause();
  }
};
