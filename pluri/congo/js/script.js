// Obtener todos los elementos con la clase "imagenes"
const tarjetas = document.querySelectorAll(".imagenes div");

// Agregar un evento de clic a cada tarjeta
tarjetas.forEach((tarjeta) => {
  tarjeta.addEventListener("click", function (e) {
    // Remover la clase "activa" de todas las tarjetas
    tarjetas.forEach((tarjeta) => {
      tarjeta.classList.remove("activa");
      tarjeta.classList.add("tarjeta");
    });

    // Agregar la clase "activa" a la tarjeta actual
    this.classList.remove("tarjeta");
    this.classList.add("activa");

    e.preventDefault();
    e.stopPropagation();
  });
});
