function cambiarTitulo(titulo) {
document.querySelector('.h1').textContent= titulo;

//Ocultar portada
var secciones= document.querySelectorAll('.portada');
secciones.forEach(function(seccion) {
    seccion.style.display= 'none';
});

//Mostrar h1
var secciones= document.querySelectorAll('.h1');
secciones.forEach(function(seccion) {
seccion.style.display= 'block';
});

//Ocultar todas las secciones
var secciones= document.querySelectorAll('main>div');
for (var i= 0; i< secciones.length; i++) {
    var seccion= secciones[i];
    seccion.classList.remove('active');
}

//Mostrar solo la sección activa
var seccionMostrar= document.querySelector(`.${titulo.replace(/\s/g, '').toLowerCase()}`);
seccionMostrar.classList.add('active');
}

/*Script para los videos "Header"*/

const videoHeader= document.getElementById("vid")
let i= 1

videoHeader.onended= function () {
  i= (i % 2) + 1; //Alterna entre 1 y 2
  this.src= 'vid/headernic'+ i +'.mp4'
}


document.getElementById('menuprinc').onclick= function () {
  history.back()
}