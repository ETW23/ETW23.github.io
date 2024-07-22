class CapturaJSON {
    constructor(url, archivo) {
        this.url = url;
        this.archivo = archivo;
        this.tipo = 'JSON';
    }

    // Método para hacer la solicitud AJAX
    obtenerDatos(callback) {
        const xhttp = new XMLHttpRequest();
        const rutaCompleta = this.url + this.archivo;

        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                const datos = JSON.parse(this.responseText);
                callback(datos);
            }
        };

        xhttp.open("GET", rutaCompleta, true);
        xhttp.send();
    }

    cambiarTipo(tipo) {
        this.tipo = tipo;
    }
}
