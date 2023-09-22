var peticion = new XMLHttpRequest();
peticion.open('get', 'noticias/index.html');
peticion.send(null);
peticion.onreadystatechange = function () {
    if (peticion.readyState == 4) {
        if (peticion.status == 200) {
            let raiz = peticion.responseText;
            let root = raiz.querySelectorAll('news-container');
            console.log('root');
            let titulo = root.getElementsByClassName('tituloNoti');
            let contenido = root.getElementsByClassName('textoNoti');
            let foto = root.getElementsByClassName('fotoNoti');
            let noti1 = document.getElementById('primeraNoti');
            let noti2 = document.getElementById('segundaNoti');
            let noti3 = document.getElementById('terceraNoti');
            let fotoNoti1 = document.getElementById('primeraFotoNoti');
            let fotoNoti2 = document.getElementById('segundaFotoNoti')
            let fotoNoti3 = document.getElementById('terceraFotoNoti')
            for (let i = 0; i < 3; i++) {
                fotoNoti1.src = ''
                noti1.innerHTML = '<p>' + '<strong>' + titulo.innerHTML + '</strong> <br>' + contenido.innerHTML + '</p>';
            }
        }
    }
}

