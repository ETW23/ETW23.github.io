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

document.getElementById("modulos").style.height = "0px";
document.getElementById("botonModus").onclick = function () {
  var modus = document.getElementById("modulos");
  if (modus.style.height == "0px") {
    modus.style.height = "209px";
    document.getElementById("botonModus").style.textDecoration = "underline";
  } else {
    modus.style.height = "0px";
    document.getElementById("botonModus").style.textDecoration = "none";
  }
};

//////////////////////////////

et.onclick = function () {
  window.location.href = "../index.html";
};
