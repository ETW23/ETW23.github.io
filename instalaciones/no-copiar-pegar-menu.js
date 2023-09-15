for (let event of ['cut', 'copy', 'paste', 'contextmenu']) {
    window.addEventListener(event, e => e.preventDefault())
}