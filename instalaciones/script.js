document.getElementById("menunav").style.right = "-20em";
document
  .getElementById("botonHamburguesa")
  .addEventListener("click", function () {
    var menu = document.getElementById("menunav");
    if (menu.style.right == "-20em") {
      menu.style.right = "0";
      menu.style.top = "0.05em";
      menu.style.transition = "1s";
    } else {
      menu.style.right = "-20em";
    }
  });

const hambnav = document.getElementById("botonHamburguesa");
const menuMenu = document.getElementById("menu");

let menuVisible = false;

hambnav.addEventListener("click", () => {
  if (menuVisible) {
    menuMenu.style.display = "none";
  } else {
    menuMenu.style.display = "flex";
  }
  menuVisible = !menuVisible;
});
et.onclick = function () {
  window.location.href = "../index.html";
};