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

document.getElementById('et').onclick= function () {history.back()
  return
}

// document.getElementById("modulos").style.height = "0px";
// document
//   .getElementById("botonModus")
//   .onclick = function () {
//     var modus = document.getElementById("modulos")
//     if (modus.style.height == "0px") {
//       modus.style.height = "209px";
//       document.getElementById('botonModus').style.textDecoration = "underline";
//     } else {
//       modus.style.height = "0px";
//       document.getElementById('botonModus').style.textDecoration = "none";
//     }
//   };

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
  