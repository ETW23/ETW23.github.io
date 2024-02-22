function ampliarImagen(imagen) {
    // Crea un elemento <div> para la ventana modal
    var ventanaModal = document.createElement("div");
    ventanaModal.style.display = "block";
    ventanaModal.style.position = "fixed";
    ventanaModal.style.zIndex = "1";
    ventanaModal.style.paddingTop = "100px";
    ventanaModal.style.left = "0";
    ventanaModal.style.top = "0";
    ventanaModal.style.width = "100%";
    ventanaModal.style.height = "100%";
    ventanaModal.style.overflow = "auto";
    ventanaModal.style.backgroundColor = "rgba(0,0,0,0.9)";
  
    // Crea un elemento <img> para la imagen ampliada
    var imagenAmpliada = document.createElement("img");
    imagenAmpliada.src = imagen.src;
    imagenAmpliada.style.display = "block";
    imagenAmpliada.style.margin = "auto";
    imagenAmpliada.style.maxWidth = "80%";
    imagenAmpliada.style.maxHeight = "80%";
  
    // Agrega la imagen ampliada a la ventana modal
    ventanaModal.appendChild(imagenAmpliada);
  
    // Agrega la ventana modal al documento
    document.body.appendChild(ventanaModal);
  
    // Cierra la ventana modal cuando se hace clic fuera de la imagen
    ventanaModal.onclick = function() {
      ventanaModal.style.display = "none";
    }
  }