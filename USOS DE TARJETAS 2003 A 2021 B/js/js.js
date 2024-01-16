 //insertando mapa    
   var map = L.map('map').setView([43.53573, -5.66152], 13);
   L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
   maxZoom: 19,
   attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
   }).addTo(map);

 // Define el nuevo estilo de marcador
 var customIcon = L.icon({
 iconUrl: 'img/ubicacion.png',
 iconSize: [30, 30], // Tamaño del icono en píxeles
 iconAnchor: [15, 30], // Punto de anclaje del icono
 });

 // Obtener la ubicación actual del usuario utilizando la API de geolocalización de Google Maps
 function obtenerUbicacion() {
 if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
    var latitud = position.coords.latitude;
    var longitud = position.coords.longitude;
    // Crear un marcador con el nuevo estilo
    var marker = L.marker([latitud, longitud], { icon: customIcon }).addTo(map);
    // Centrar el mapa en la ubicación actual
    map.setView([latitud, longitud], 13);
    }, function(error) {
    alert("Error al obtener la ubicación: " + error.message);
    });
 } else {
    alert("La geolocalización no es soportada por este navegador.");
 }
 }

 // Llamar a la función para obtener y mostrar la ubicación actual
 obtenerUbicacion();

 //Recogiendo los datos
let peticion = new XMLHttpRequest();
let datos = 'https://opendata.gijon.es/descargar.php?id=795&tipo=KML';
let inyectar = document.getElementById('carga');
let fichero;
let lat = [];
let lon = [];

 //Accediendo a la dirección
peticion.onreadystatechange = function() {
    if (peticion.readyState == 4 && peticion.status == 200){
        fichero = peticion.responseXML;
        let descriptions = fichero.getElementsByTagName('description');
        let descriptionsdos = [];
        for (let i = 0; i < descriptions.length; i++) {
            let cadena = descriptions[i].textContent;
            let dire = cadena.match(/<b>Dirección: <\/b><\/br>\s*(.*?)<\/br>/);
            descriptionsdos.push(dire[1]);
        }

        for (let j = 0; j < descriptionsdos.length; j++){
            inyectar.innerHTML += "<option value = "+ j +"> " + descriptionsdos[j] + "</option>";
        }

 //marcadores mapa
        let latit = fichero.getElementsByTagName('latitude');
        let longi = fichero.getElementsByTagName('longitude');
        for (let i = 0; i < latit.length; i++) {
            lat.push(latit[i].textContent);
            lon.push(longi[i].textContent);
        }

        for (let i = 0; i < lat.length; i++) {
            let marker = L.marker([lat[i], lon[i]])
            .bindPopup(descriptionsdos[i], { permanent: true, direction: 'top' }) // Puedes personalizar el texto aquí
            .addTo(map);
        }
    }
}

 // Llamar a la función para obtener y mostrar la ubicación actual
obtenerUbicacion();
peticion.open('get',datos);
peticion.send(null);

 //vinculando marcadores con desplegable
 // Definir estilos de marcadores

var blueIcon = L.icon({
    iconUrl:'img/mano.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34]
});

var marker; // Almacena una referencia al marcador original

function cambiarMapa() {
var selecMarca = document.getElementById("carga").value;

 // Eliminar el marcador original si existe
if (marker) {
    map.removeLayer(marker);
}

 // Si el valor seleccionado es igual a -1, vuelve a la posición inicial del mapa
if (selecMarca == -1) {
    map.setView([43.53573, -5.66152], 13);
    document.getElementById("lightbulb").style.backgroundImage = `url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='iso-8859-1'%3F%3E%3C!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0%29 --%3E%3Csvg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 480.8 480.8' style='enable-background:new 0 0 480.8 480.8;' xml:space='preserve'%3E%3Cpath style='fill:%23ffffff;' d='M317.112,314.4c-22.4,22.4-19.6,67.6-19.6,67.6h-113.6c0,0,2.4-45.2-19.6-67.6 c-24.4-21.6-40-52.8-40-87.6c0-64,52-116,116-116s116,52,116,116C356.312,261.6,341.112,292.8,317.112,314.4L317.112,314.4z'/%3E%3Cg%3E%3Cpath style='fill:%23E5E5E5;' d='M300.712,417.6c0,6-4.8,10.8-10.8,10.8h-98.8c-6,0-10.8-4.8-10.8-10.8l0,0c0-6,4.8-10.8,10.8-10.8 h98.4C295.512,406.8,300.712,411.6,300.712,417.6L300.712,417.6z'/%3E%3Cpath style='fill:%23E5E5E5;' d='M285.912,462.4c0,6-4.8,10.8-10.8,10.8h-69.2c-6,0-10.8-4.8-10.8-10.8l0,0c0-6,4.8-10.8,10.8-10.8 h69.2C281.112,451.6,285.912,456.4,285.912,462.4L285.912,462.4z'/%3E%3C/g%3E%3Cg%3E%3Cpath style='fill:%23210B20;' d='M323.112,318.4c26-23.6,40.8-56.8,40.8-91.6c0-68-55.6-123.6-123.6-123.6s-123.6,55.6-123.6,123.6 c0,35.6,15.6,69.6,42,92.8c19.6,19.6,17.6,61.2,17.6,61.6c0,2,0.8,4,2,5.6c1.6,1.6,3.6,2.4,5.6,2.4h113.2c2,0,4-0.8,5.6-2.4 s2-3.6,2-5.6c0-0.4-2-42,17.6-61.6C322.712,319.2,323.112,318.8,323.112,318.4z M311.912,308.4c-0.8,0.4-1.2,1.2-1.6,2 c-17.6,18.8-20.4,49.6-20.8,64h-98c-0.4-14.8-3.6-46.8-22.4-65.6c-23.6-20.8-37.2-50.4-37.2-81.6c0-60,48.8-108.4,108.4-108.4 c60,0,108.4,48.8,108.4,108.4C348.712,258,335.512,288,311.912,308.4z'/%3E%3Cpath style='fill:%23210B20;' d='M240.312,135.2c-4,0-7.6,3.2-7.6,7.6c0,4,3.2,7.6,7.6,7.6c44.8,0,81.2,36.4,81.2,81.2 c0,4,3.2,7.6,7.6,7.6c4,0,7.6-3.2,7.6-7.6C336.712,178.4,293.512,135.2,240.312,135.2z'/%3E%3Cpath style='fill:%23210B20;' d='M308.312,417.6c0-10.4-8.4-18.4-18.4-18.4h-98.8c-10.4,0-18.4,8.4-18.4,18.4 c0,10.4,8.4,18.4,18.4,18.4h98.4C299.912,436,308.312,428,308.312,417.6z M289.512,420.8h-98.4c-2,0-3.2-1.6-3.2-3.2 c0-2,1.6-3.2,3.2-3.2h98.4c2,0,3.2,1.6,3.2,3.2C293.112,419.6,291.512,420.8,289.512,420.8z'/%3E%3Cpath style='fill:%23210B20;' d='M275.112,444h-69.2c-10.4,0-18.4,8.4-18.4,18.4c0,10.4,8.4,18.4,18.4,18.4h69.2 c10.4,0,18.4-8.4,18.4-18.4C293.512,452.4,285.112,444,275.112,444z M275.112,465.6h-69.2c-2,0-3.2-1.6-3.2-3.2 c0-2,1.6-3.2,3.2-3.2h69.2c2,0,3.2,1.6,3.2,3.2C278.312,464.4,277.112,465.6,275.112,465.6z'/%3E%3Cpath style='fill-opacity:0;' d='M247.912,58.8V7.6c0-4-3.2-7.6-7.6-7.6c-4,0-7.6,3.2-7.6,7.6v51.6c0,4,3.2,7.6,7.6,7.6 C244.712,66.4,247.912,63.2,247.912,58.8z'/%3E%3Cpath style='fill-opacity:0;' d='M366.312,38c-3.6-2.4-8-1.2-10.4,2l-28.4,42.8c-2.4,3.6-1.2,8,2,10.4c1.2,0.8,2.8,1.2,4,1.2 c2.4,0,4.8-1.2,6.4-3.2l28.4-42.8C370.712,45.2,369.512,40.4,366.312,38z'/%3E%3Cpath style='fill-opacity:0;' d='M149.912,92.8c1.2,0,2.8-0.4,4-1.2c3.6-2.4,4.4-6.8,2.4-10.4l-27.6-43.2c-2.4-3.6-6.8-4.4-10.4-2.4 c-3.6,2.4-4.4,6.8-2.4,10.4l27.6,43.2C145.112,91.6,147.512,92.8,149.912,92.8z'/%3E%3Cpath style='fill-opacity:0;' d='M43.912,128.8l45.2,24.4c1.2,0.8,2.4,0.8,3.6,0.8c2.8,0,5.2-1.6,6.8-4c2-3.6,0.8-8.4-3.2-10.4 l-45.2-24.4c-3.6-2-8.4-0.8-10.4,3.2C39.112,122.4,40.312,126.8,43.912,128.8z'/%3E%3Cpath style='fill-opacity:0;' d='M387.912,154.4c1.2,0,2.4-0.4,3.6-0.8l45.2-24.4c3.6-2,5.2-6.4,3.2-10.4c-2-3.6-6.4-5.2-10.4-3.2 l-45.2,24.4c-3.6,2-5.2,6.4-3.2,10.4C382.312,152.8,385.112,154.4,387.912,154.4z'/%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3C/svg%3E%0A")`;
} else {
 // Realiza los cambios necesarios en el mapa según el valor seleccionado
 // centrar el mapa en la ubicación seleccionada
    map.setView([lat[selecMarca], lon[selecMarca]], 19);
    document.getElementById("lightbulb").style.backgroundImage = `url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='iso-8859-1'%3F%3E%3C!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0%29 --%3E%3Csvg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 480.8 480.8' style='enable-background:new 0 0 480.8 480.8;' xml:space='preserve'%3E%3Cpath style='fill:%23FFD517;' d='M317.112,314.4c-22.4,22.4-19.6,67.6-19.6,67.6h-113.6c0,0,2.4-45.2-19.6-67.6 c-24.4-21.6-40-52.8-40-87.6c0-64,52-116,116-116s116,52,116,116C356.312,261.6,341.112,292.8,317.112,314.4L317.112,314.4z'/%3E%3Cg%3E%3Cpath style='fill:%23E5E5E5;' d='M300.712,417.6c0,6-4.8,10.8-10.8,10.8h-98.8c-6,0-10.8-4.8-10.8-10.8l0,0c0-6,4.8-10.8,10.8-10.8 h98.4C295.512,406.8,300.712,411.6,300.712,417.6L300.712,417.6z'/%3E%3Cpath style='fill:%23E5E5E5;' d='M285.912,462.4c0,6-4.8,10.8-10.8,10.8h-69.2c-6,0-10.8-4.8-10.8-10.8l0,0c0-6,4.8-10.8,10.8-10.8 h69.2C281.112,451.6,285.912,456.4,285.912,462.4L285.912,462.4z'/%3E%3C/g%3E%3Cg%3E%3Cpath style='fill:%23210B20;' d='M323.112,318.4c26-23.6,40.8-56.8,40.8-91.6c0-68-55.6-123.6-123.6-123.6s-123.6,55.6-123.6,123.6 c0,35.6,15.6,69.6,42,92.8c19.6,19.6,17.6,61.2,17.6,61.6c0,2,0.8,4,2,5.6c1.6,1.6,3.6,2.4,5.6,2.4h113.2c2,0,4-0.8,5.6-2.4 s2-3.6,2-5.6c0-0.4-2-42,17.6-61.6C322.712,319.2,323.112,318.8,323.112,318.4z M311.912,308.4c-0.8,0.4-1.2,1.2-1.6,2 c-17.6,18.8-20.4,49.6-20.8,64h-98c-0.4-14.8-3.6-46.8-22.4-65.6c-23.6-20.8-37.2-50.4-37.2-81.6c0-60,48.8-108.4,108.4-108.4 c60,0,108.4,48.8,108.4,108.4C348.712,258,335.512,288,311.912,308.4z'/%3E%3Cpath style='fill:%23210B20;' d='M240.312,135.2c-4,0-7.6,3.2-7.6,7.6c0,4,3.2,7.6,7.6,7.6c44.8,0,81.2,36.4,81.2,81.2 c0,4,3.2,7.6,7.6,7.6c4,0,7.6-3.2,7.6-7.6C336.712,178.4,293.512,135.2,240.312,135.2z'/%3E%3Cpath style='fill:%23210B20;' d='M308.312,417.6c0-10.4-8.4-18.4-18.4-18.4h-98.8c-10.4,0-18.4,8.4-18.4,18.4 c0,10.4,8.4,18.4,18.4,18.4h98.4C299.912,436,308.312,428,308.312,417.6z M289.512,420.8h-98.4c-2,0-3.2-1.6-3.2-3.2 c0-2,1.6-3.2,3.2-3.2h98.4c2,0,3.2,1.6,3.2,3.2C293.112,419.6,291.512,420.8,289.512,420.8z'/%3E%3Cpath style='fill:%23210B20;' d='M275.112,444h-69.2c-10.4,0-18.4,8.4-18.4,18.4c0,10.4,8.4,18.4,18.4,18.4h69.2 c10.4,0,18.4-8.4,18.4-18.4C293.512,452.4,285.112,444,275.112,444z M275.112,465.6h-69.2c-2,0-3.2-1.6-3.2-3.2 c0-2,1.6-3.2,3.2-3.2h69.2c2,0,3.2,1.6,3.2,3.2C278.312,464.4,277.112,465.6,275.112,465.6z'/%3E%3Cpath style='fill:%23210B20;' d='M247.912,58.8V7.6c0-4-3.2-7.6-7.6-7.6c-4,0-7.6,3.2-7.6,7.6v51.6c0,4,3.2,7.6,7.6,7.6 C244.712,66.4,247.912,63.2,247.912,58.8z'/%3E%3Cpath style='fill:%23210B20;' d='M366.312,38c-3.6-2.4-8-1.2-10.4,2l-28.4,42.8c-2.4,3.6-1.2,8,2,10.4c1.2,0.8,2.8,1.2,4,1.2 c2.4,0,4.8-1.2,6.4-3.2l28.4-42.8C370.712,45.2,369.512,40.4,366.312,38z'/%3E%3Cpath style='fill:%23210B20;' d='M149.912,92.8c1.2,0,2.8-0.4,4-1.2c3.6-2.4,4.4-6.8,2.4-10.4l-27.6-43.2c-2.4-3.6-6.8-4.4-10.4-2.4 c-3.6,2.4-4.4,6.8-2.4,10.4l27.6,43.2C145.112,91.6,147.512,92.8,149.912,92.8z'/%3E%3Cpath style='fill:%23210B20;' d='M43.912,128.8l45.2,24.4c1.2,0.8,2.4,0.8,3.6,0.8c2.8,0,5.2-1.6,6.8-4c2-3.6,0.8-8.4-3.2-10.4 l-45.2-24.4c-3.6-2-8.4-0.8-10.4,3.2C39.112,122.4,40.312,126.8,43.912,128.8z'/%3E%3Cpath style='fill:%23210B20;' d='M387.912,154.4c1.2,0,2.4-0.4,3.6-0.8l45.2-24.4c3.6-2,5.2-6.4,3.2-10.4c-2-3.6-6.4-5.2-10.4-3.2 l-45.2,24.4c-3.6,2-5.2,6.4-3.2,10.4C382.312,152.8,385.112,154.4,387.912,154.4z'/%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3C/svg%3E%0A")`;
 // Crear un nuevo marcador con el nuevo icono
    marker = L.marker([lat[selecMarca], lon[selecMarca]], { icon: blueIcon }).addTo(map);
    marker.setIcon(blueIcon);
}
}
