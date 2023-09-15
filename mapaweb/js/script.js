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
et.onclick = function () {
  window.location.href = "../index.html";
};