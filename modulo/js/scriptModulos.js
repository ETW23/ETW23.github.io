

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

document

    .getElementById("botonModus")

    .onclick = function () {

        var modus = document.getElementById("modulos")

        if (modus.style.height == "0px") {

            modus.style.height = "209px";

            document.getElementById('botonModus').style.textDecoration = "underline";

        } else {

            modus.style.height = "0px";



            document.getElementById('botonModus').style.textDecoration = "none";

        }

    };


et.onclick = function () {

    window.location.href = "../index.html";

}




var tarjetas = document.getElementsByClassName('box')

for (let i = 0; i < tarjetas.length; i++) {

    tarjetas[i].onmouseover = function () {

        this.style.filter = 'opacity(100%)';

    }

    tarjetas[i].onmouseout = function () {

        this.style.filter = 'opacity(60%)'

    }

}


var agr = document.getElementsByClassName('agrandar');
var imgg = document.getElementsByClassName('fotito');

for (var i = 0; i < agr.length; i++) {
    (function (index) {
        agr[index].addEventListener("mouseover", function () {
            imgg[index].style.transform = "scale(1.2)";
        });

        agr[index].addEventListener("mouseout", function () {
            imgg[index].style.transform = "";
        });
    })(i);
}