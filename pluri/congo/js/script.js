// Obtener todos los elementos con la clase "tarjeta"
const tarjetas = document.querySelectorAll(".tarjeta");

// Agregar un evento de clic a cada tarjeta
tarjetas.forEach((tarjeta) => {
  tarjeta.addEventListener("click", function () {
    // Remover la clase "activa" de todas las tarjetas
    tarjetas.forEach((tarjeta) => {
      tarjeta.classList.remove("activa");
    });

    // Agregar la clase "activa" a la tarjeta actual
    this.classList.add("activa");
  });
});
