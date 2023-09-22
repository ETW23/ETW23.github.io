var peticion = new XMLHttpRequest();
peticion.open('get', 'noticias/index.html');
peticion.send(null);
peticion.onreadystatechange = function () {
    if (peticion.readyState == 4) {
        if (peticion.status == 200) {
            //Cojo el documento
            let doc = peticion.responseText;
            //Lo transformo a HTML
            var raiz = new DOMParser().parseFromString(doc, "text/html");
            //
            let titulos = raiz.querySelectorAll('h2.tituloNoti');
            let contenidos = raiz.querySelectorAll('p.textoNoti');
            let foto = raiz.querySelectorAll('img.fotoNoti');

            let fotos = [];
            fotos[0] = document.getElementById('primeraFotoNoti');
            fotos[1] = document.getElementById('segundaFotoNoti');
            fotos[2] = document.getElementById('terceraFotoNoti');

            let notis = []
            notis[0] = document.getElementById('primeraNoti');
            notis[1] = document.getElementById('segundaNoti');
            notis[2] = document.getElementById('terceraNoti');

            for (let i = 0; i < 3; i++) {
                fotos[i].src = 'noticias/' + foto[i].src.substring(foto[i].src.indexOf("images/"))
                notis[i].innerHTML = '<p>' + '<strong>' + titulos[i].innerHTML + '</strong> <br>' + contenidos[i].innerHTML + '</p>';
            }
        }
    }
}

