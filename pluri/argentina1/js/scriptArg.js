const carrusel = document.querySelector('.carrusel');
const cajas = carrusel.querySelectorAll('.cajas');
let contador = -1;
function animacion(index) {
    cajas.forEach((cajas, i) => {
        cajas.style.transform = `translateX(${100 * (i - index)}%)`;
    });
}
function avanza() {
    contador++;
    if (contador >= cajas.length) {
        contador = 0;
    }
    animacion(contador);
}
function retrocede() {
    contador--;
    if (contador < 0) {
        contador = cajas.length - 1;
    }
    animacion(contador);
}

const nextButton = document.querySelector('nextButton');
const prevButton = document.querySelector('prevButton');
sig.onclick = function () {
    avanza();
}
ant.onclick = function () {
    retrocede();
}


/////////////////////////////////////////////
var video1 = document.getElementById('bsas');
var video2 = document.getElementById('cordoba');
var video3 = document.getElementById('santaFe');
var video4 = document.getElementById('mendoza');
video1 = document.getElementById('bsas');
video2 = document.getElementById('cordoba');
video3 = document.getElementById('santaFe');
video4 = document.getElementById('mendoza');
p4.onclick = function () {
    video1.play();
    video1.loop = true;
    video2.play();
    video2.loop = true;
    video3.play();
    video3.loop = true;
    video4.play();
    video4.loop = true;
    video1.muted = true;
    video2.muted = true;
    video3.muted = true;
    video4.muted = true;
}
p4.ondblclick = function () {
    video1.pause();
    video2.pause();
    video3.pause();
    video4.pause();
    video1.loop = false;
    video2.loop = false;
    video3.loop = false;
    video4.loop = false;
}

/////////////////////////////////////////////////
function ampliarInfo(a, b, c, d, e, f) {
    a.style.display = 'none';
    b.style.display = 'none';
    c.style.display = 'none';
    d.style.width = '80%';
    e.style.display = 'flex';
    f.style.display = 'flex';
}

function devolver(a, b, c, d, e, f) {
    a.style.display = 'flex';
    b.style.display = 'flex';
    c.style.display = 'flex';
    d.style.width = '40%';
    e.style.display = 'none';
    f.style.display = 'none';
}

bsas.onclick = function () {
    ampliarInfo(cajaVideo4, cajaVideo3, cajaVideo2, cajaVideo1, ocultoTexto1, ocultoVideo1);
}
ocultoVideo1.onclick = function () {
    devolver(cajaVideo4, cajaVideo3, cajaVideo2, cajaVideo1, ocultoTexto1, ocultoVideo1);
}


cordoba.onclick = function () {
    ampliarInfo(cajaVideo4, cajaVideo3, cajaVideo1, cajaVideo2, ocultoTexto2, ocultoVideo2);
}
ocultoVideo2.onclick = function () {
    devolver(cajaVideo4, cajaVideo3, cajaVideo1, cajaVideo2, ocultoTexto2, ocultoVideo2);
}



santaFe.onclick = function () {
    ampliarInfo(cajaVideo4, cajaVideo2, cajaVideo1, cajaVideo3, ocultoTexto3, ocultoVideo3);
}
ocultoVideo3.onclick = function () {
    devolver(cajaVideo4, cajaVideo2, cajaVideo1, cajaVideo3, ocultoTexto3, ocultoVideo3);
}


mendoza.onclick = function () {
    ampliarInfo(cajaVideo1, cajaVideo3, cajaVideo2, cajaVideo4, ocultoTexto4, ocultoVideo4)
}
ocultoVideo4.onclick = function () {
    devolver(cajaVideo1, cajaVideo3, cajaVideo2, cajaVideo4, ocultoTexto4, ocultoVideo4)
}

/////////////////////////////////////////////////////////

var selectores = document.getElementsByClassName('selectores');

function colorSelectores() {
    for (let i = 0; i < selectores.length; i++) {
        selectores[i].style.color = 'white';
    }
    this.style.color = 'black'
}

poliHisto.onclick = colorSelectores;
poliSele.onclick = colorSelectores;
poliEco.onclick = colorSelectores;
poliGeo.onclick = colorSelectores;
//poliSoci.onclick = colorSelectores;

function resaltarSelector(selector) {
    for (let i = 0; i < selectores.length; i++) {
        selectores[i].style.color = 'white';
    }
    selector.style.color = 'black';
    console.log('hola')
}

infoAdHisto.onmouseover = function () {
    resaltarSelector(poliHisto);
}
infoAdPol.onmouseover = function () {
    resaltarSelector(poliSele);
}
infoAdEco.onmouseover = function () {
    resaltarSelector(poliEco);
}
infoAdGeo.onmouseover = function () {
    resaltarSelector(poliGeo);
}