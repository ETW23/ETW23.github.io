var controlsVisible = false; // Variable para controlar la visibilidad de los controles

// Función para alternar la visibilidad de los controles
function toggleControls() {
    var videoControls = document.getElementById('video-controls');
    var showControlsBtn = document.getElementById('showControlsBtn');

    if (controlsVisible) {
        videoControls.style.visibility = 'hidden'; // Ocultar controles
        showControlsBtn.textContent = 'Mostrar controles'; // Cambiar texto del botón
    } else {
        videoControls.style.visibility = 'visible'; // Mostrar controles
        showControlsBtn.textContent = 'Ocultar controles'; // Cambiar texto del botón
    }

    controlsVisible = !controlsVisible; // Invertir el valor de la variable de visibilidad
}

document.getElementById('showControlsBtn').addEventListener('click', toggleControls);

var video = document.getElementById("myVideo");
var playPauseBtn = document.getElementById("playPauseBtn");
var muteBtn = document.getElementById("muteBtn");
var backwardBtn = document.getElementById("backwardBtn");
var forwardBtn = document.getElementById("forwardBtn");
var dismiVolumeBtn = document.getElementById("dismiVolumeBtn");
var aumentVolumeBtn = document.getElementById("aumentVolumeBtn");

playPauseBtn.addEventListener("click", function() {
    if (video.paused) {
        video.play();
        playPauseBtn.innerHTML = "Pause";
    } else {
        video.pause();
        playPauseBtn.innerHTML = "Play";
    }
});

muteBtn.addEventListener("click", function() {
    if (video.muted) {
        video.muted = false;
        muteBtn.innerHTML = "Mute";
    } else {
        video.muted = true;
        muteBtn.innerHTML = "Unmute";
    }
});

backwardBtn.addEventListener("click", function() {
    video.currentTime -= 5;
});

forwardBtn.addEventListener("click", function() {
    video.currentTime += 5;
});

dismiVolumeBtn.addEventListener("click", function() {
    if (video.volume >= 0.1) {
        video.volume -= 0.1;
    }
});

aumentVolumeBtn.addEventListener("click", function() {
    if (video.volume <= 0.9) {
        video.volume += 0.1;
    }
});