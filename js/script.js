

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

var tarjetas = document.getElementsByClassName('box')
for (let i = 0; i < tarjetas.length; i++) {
    tarjetas[i].onmouseover = function () {
        this.style.filter = 'opacity(100%)';
    }
    tarjetas[i].onmouseout = function () {
        this.style.filter = 'opacity(60%)'
    }
}

// animación carrousel header

var images = [
    "images/DSC_9832.JPG",
    "modulo/images/20230705_135240.jpg",
    "modulo/images/DSC_9856.JPG"
];

function changeBackgroundImage() {
    var backgroundContainer = document.getElementById("background-container");
    var currentImageIndex = 0;

    setInterval(function () {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        backgroundContainer.classList.add("transition-background");
        backgroundContainer.style.backgroundImage = "url(" + images[currentImageIndex] + ")";
        setTimeout(function () {
            backgroundContainer.classList.remove("transition-background");
        }, 500); // Duración de la transición en milisegundos
    }, 3000);
}

changeBackgroundImage();

/////////////////Click derecho desactivado///////////////////

for (let event of ['cut', 'copy', 'paste', 'contextmenu']) {
    window.addEventListener(event, e => e.preventDefault())
}
///////////////////////////////////////////////////////////    
var popupContainer = document.getElementById('popup-container');
var closeButton = document.getElementById('close-btn');

window.addEventListener('DOMContentLoaded', function () {

    if (!localStorage.getItem('popupShown')) {
        popupContainer.style.display = 'block';
    }
    closeButton.addEventListener('click', function () {
        popupContainer.style.display = 'none';
        localStorage.setItem('popupShown', true);
    });
});


var mostrar = document.getElementById('mostrarNota');

mostrar.addEventListener('click', function () {
    popupContainer.style.display = 'block';
    localStorage.setItem('popupShown', true);
});