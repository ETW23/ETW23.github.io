var fotoN = ['images/norte1.jpg', 'images/norte2.jpg', 'images/norte3.jpg', 'images/norte4.jpg']

var fotoM = ['images/medio1.jpg', 'images/medio2.jpg', 'images/medio3.jpg', 'images/medio4.jpg']

var fotoS = ['images/sur1.jpg', 'images/sur2.jpg', 'images/sur3.jpg', 'images/sur4.jpg']

var norte = document.getElementById('norte');

function cambiarImagenN() {
    var x = norte.src.substring(norte.src.lastIndexOf('images'))
    var imagenSiguiente = fotoN[fotoN.indexOf(x) + 1];
    if (imagenSiguiente === undefined) {
        imagenSiguiente = fotoN[0];
    } norte.classList.add('fade-out');

    setTimeout(function () {
        norte.src = imagenSiguiente;
        norte.classList.remove('fade-out');
    }, 1000);
}
////////////////////////////////////////////////
var medio = document.getElementById('medio');

function cambiarImagenM() {
    var x = medio.src.substring(medio.src.lastIndexOf('images'))
    var imagenSiguiente = fotoM[fotoM.indexOf(x) + 1];
    if (imagenSiguiente === undefined) {
        imagenSiguiente = fotoM[0];
    } medio.classList.add('fade-out');

    setTimeout(function () {
        medio.src = imagenSiguiente;
        medio.classList.remove('fade-out');
    }, 1000);
}
//////////////////////////////////////////////////////////
var sur = document.getElementById('sur');

function cambiarImagenS() {
    var x = sur.src.substring(sur.src.lastIndexOf('images'))
    var imagenSiguiente = fotoS[fotoS.indexOf(x) + 1];
    if (imagenSiguiente === undefined) {
        imagenSiguiente = fotoS[0];
    } sur.classList.add('fade-out');

    setTimeout(function () {
        sur.src = imagenSiguiente;
        sur.classList.remove('fade-out');
    }, 1000);
}
////////////////////////////////////////////////////////
//////////////////////////
///////////////
//////////
/////////////
///////////////////////////////
////////////////////////////////////////////////////////
var selectores = document.getElementsByClassName('selectores');

function colorSelectores() {
    for (let i = 0; i < selectores.length; i++) {
        selectores[i].style.color = 'white';
    }
    this.style.color = 'black'
}

prinInicio.onclick = colorSelectores;
prinHisto.onclick = colorSelectores;
prinPoli.onclick = colorSelectores;
prinEco.onclick = colorSelectores;
prinGeo.onclick = colorSelectores;
//poliSoci.onclick = colorSelectores;

function resaltarSelector(selector) {
    for (let i = 0; i < selectores.length; i++) {
        selectores[i].style.color = 'white';
    }
    selector.style.color = 'black';
}

inicio.onmouseover = function () {
    resaltarSelector(prinInicio);
}
historia.onmouseover = function () {
    resaltarSelector(prinHisto);
}
politica.onmouseover = function () {
    resaltarSelector(prinPoli);
}
economia.onmouseover = function () {
    resaltarSelector(prinEco);
}
geo.onmouseover = function () {
    resaltarSelector(prinGeo);
}
info.onmouseover = function () {
    resaltarSelector(prinInfo);
}

//////////////////////////
///////////
//////////
//////////////////////////
var selectores = document.getElementsByClassName('selectores');

function colorSelectores() {
    for (let i = 0; i < selectores.length; i++) {
        selectores[i].style.color = 'white';
    }
    this.style.color = 'black'
}

poliHisto.onclick = colorSelectores;
poliPol.onclick = colorSelectores;
poliEco.onclick = colorSelectores;
poliGeo.onclick = colorSelectores;


function resaltarSelector(selectorInfo) {
    for (let i = 0; i < selectores.length; i++) {
        selectores[i].style.color = 'white';
    }
    selectorInfo.style.color = 'black';
}

infoAdHisto.onmouseover = function () {
    resaltarSelector(poliHisto);
}
infoAdPol.onmouseover = function () {
    resaltarSelector(poliPol);
}
infoAdEco.onmouseover = function () {
    resaltarSelector(poliEco);
}
infoAdGeo.onmouseover = function () {
    resaltarSelector(poliGeo);
}




window.setInterval(cambiarImagenN, 4500);
window.setInterval(cambiarImagenM, 5500);
window.setInterval(cambiarImagenS, 3500);