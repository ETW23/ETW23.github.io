function cambiarTitulo(titulo) {
document.querySelector('.h1').textContent= titulo;

// Ocultar portada
var secciones= document.querySelectorAll('.portada');
secciones.forEach(function(seccion) {
    seccion.style.display= 'none';
});

// Mostrar h1
var secciones= document.querySelectorAll('.h1');
secciones.forEach(function(seccion) {
seccion.style.display= 'block';
});

// Ocultar todas las secciones
var secciones= document.querySelectorAll('main>div');
for (var i= 0; i< secciones.length; i++) {
    var seccion= secciones[i];
    seccion.classList.remove('active');
}

// Mostrar solo la sección activa
var seccionMostrar= document.querySelector(`.${titulo.replace(/\s/g, '').toLowerCase()}`);
seccionMostrar.classList.add('active');
}

/*
document.getElementById("vid").onended = function () {
  document.getElementById("mp4")= function () {
    for (let i= 0; i < 3; i++) {
        this.src= 'vid/headernic'+i+'.mp4'
    }
  }
}
*/

for (let i = 1; i < 3; i++) {
  document.getElementById("vid").onended = function () {
    this.src =  'vid/headernic'+i+'.mp4'
    while (i==2) {
      --i;
      break
    }
  }
}

document.getElementById('menuprinc').onclick= function () {
  history.back()
}