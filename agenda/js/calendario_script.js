var daysTag = document.querySelector(".days");
var currentMonth = document.querySelector(".current-date");
var currentYear = document.querySelector(".current-year");
var prevNextIcon = document.querySelectorAll(".icons span");

let date = new Date();

let maxDate = new Date('2024-09-30');
if (date > maxDate) {
    date = maxDate;
}
let minDate = new Date('2023-04-01');
if (date < minDate) {
    date = minDate;
}

let currYear = date.getFullYear();
let currMonth = date.getMonth();

var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

const renderCalendar = () => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay();
    let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate();
    let lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();
    let liTag = "";
    let liCount = 0;

    if (firstDayofMonth === 0) {
        firstDayofMonth = 6;
    } else {
        firstDayofMonth--;
    }

    for (let i = firstDayofMonth; i > 0; i--) {
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
        liCount++;
    }

    for (let i = 1; i < lastDateofMonth+1; i++) {
        let isToday = i === date.getDate() && currMonth === new Date().getMonth() && currYear === new Date().getFullYear() ? "active" : "";
        let isBlue = shouldHaveBlueBackground(currYear, currMonth, i) ? "blue" : "";
        let blueId = shouldHaveBlueBackground(currYear, currMonth, i) ? `element${i}` : "";

        liTag += `<li class="${isToday} ${isBlue}" id="${blueId}" onclick="handleElementClick('${blueId}')">${i}</li>`;
        liCount++;
    }

    let liDespues = 0;
    let rest = 42 - liCount;

    for (let i = 0; liDespues < rest; i++) {
        liTag += `<li class="inactive">${i + 1}</li>`;
        liDespues++;
    }

    currentMonth.innerText = months[currMonth];
    currentYear.innerText = currYear;
    daysTag.innerHTML = liTag;

}

// Función para manejar el clic en los elementos con IDs "elementX"
let clickCount = 0;
function handleElementClick(elementId) {
    const elementNumber = parseInt(elementId.replace("element", ""));
    const event1 = document.getElementById("event1");
    const event2 = document.getElementById("event2");
    const event3 = document.getElementById("event3");
    const event4 = document.getElementById("event4");
    const preport = document.getElementById("preportadaid");
    const notita = document.getElementById("notitas");

    clickCount++; // Incrementar el contador de clics en cada clic

    if (clickCount % 2 === 1) { // Si el número de clics es impar
        if (elementNumber === 1) {
            event1.classList.add("diactive");
            event2.classList.add("diactive");
            event3.classList.remove("diactive");
            event4.classList.remove("diactive");
            preport.classList.add("novisible");
            preport.classList.remove("preportada");
            notita.classList.add("notitas");
            notita.classList.remove("notitnovisible");
        } else if (elementNumber === 2) {
            event1.classList.remove("diactive");
            event2.classList.remove("diactive");
            event3.classList.add("diactive");
            event4.classList.remove("diactive");
            preport.classList.add("novisible");
            preport.classList.remove("preportada");
            notita.classList.add("notitas");
            notita.classList.remove("notitnovisible");
        } else if (elementNumber === 4) {
            event1.classList.remove("diactive");
            event2.classList.remove("diactive");
            event3.classList.remove("diactive");
            event4.classList.add("diactive");
            preport.classList.add("novisible");
            preport.classList.remove("preportada");
            notita.classList.add("notitas");
            notita.classList.remove("notitnovisible");
        }
    } else { // Si el número de clics es par
        event1.classList.remove("diactive");
        event2.classList.remove("diactive");
        event3.classList.remove("diactive");
        event4.classList.remove("diactive");
        preport.classList.remove("novisible");
        preport.classList.add("preportada");
        notita.classList.add("notitnovisible");
        notita.classList.remove("notitas");
    }
}

renderCalendar();

prevNextIcon.forEach(icon => {
    icon.addEventListener("click", () => {
        if (icon.id === "prev") {
            if (currMonth < 4 && currYear < 2024) {
                currMonth = currMonth - 0;
            } else {
                currMonth = currMonth - 1;
            }
        } else {
            if (currMonth > 7 && currYear > 2023) {
                currMonth = currMonth - 0;
            } else {
                currMonth = currMonth + 1;
            }
        }

        if (currMonth < 0 || currMonth > 11) {
            date = new Date(currYear, currMonth, new Date().getDate());
            currYear = date.getFullYear();
            currMonth = date.getMonth();
        } else {
            date = new Date();
        }
        renderCalendar();
    });
});

var btnActual = document.getElementById("actual");

window.onload = function() {
    var currentDate = new Date();
    let maxiDate = new Date('2024-09-30');
    if (currentDate > maxiDate) {
        currentDate = maxiDate;
        btnActual.style.display = "none";
    }

    let miniDate = new Date('2023-04-01');
    if (currentDate < miniDate) {
        currentDate = miniDate;
        btnActual.style.display = "none";
    }
}

btnActual.addEventListener("click", () => {
    var currentDate = new Date();

    currYear = currentDate.getFullYear();
    currMonth = currentDate.getMonth();
    renderCalendar();
});

var chooseYear = () => {
    var currentYear = document.querySelector(".current-year");
    var select = document.createElement("select");

    select.name = "year";
    select.id = "year";

    const optionBlank = document.createElement("option");
    optionBlank.value = "";
    optionBlank.text = "-------";
    select.appendChild(optionBlank);

    var startYear = 2023;
    var endYear = 2024;

    for (let i = startYear; i < endYear+1; i++) {
        const option = document.createElement("option");
        option.value = i;
        option.text = i;
        select.appendChild(option);
    }

    select.addEventListener("change", () => {
        currYear = parseInt(select.value);
        checkYear();
        renderCalendar();
    });

    currentYear.innerHTML = "";
    currentYear.appendChild(select);
}

var checkYear = () => {
    if (currYear === 2023 && currMonth < 3) {
        currMonth = 3;
    }
    if (currYear === 2024 && currMonth > 8) {
        currMonth = 0;
    }
}

const chooseMonth = () =>  {
    var currentMonth = document.querySelector(".current-date");
    var select = document.createElement("select");

    select.name = "month";
    select.id = "month";

    const nadaOption = document.createElement("option");
    nadaOption.value = "nada";
    nadaOption.text = "----------";
    select.appendChild(nadaOption);

    if (currYear === 2023) {
        for (let i = 3; i < months.length; i++) {
            const option = document.createElement("option");
            option.value = i;
            option.text = months[i];
            select.appendChild(option);
            option.style.display = "block";
        }
    }
    if (currYear === 2024) {
        for (let i = 0; i < 9; i++) {
            const option = document.createElement("option");
            option.value = i;
            option.text = months[i];
            select.appendChild(option);
            option.style.display = "block";
        }
    }
    select.addEventListener("change", () => {
        currMonth = parseInt(select.value);
        renderCalendar();
    });

    currentMonth.innerHTML = "";
    currentMonth.appendChild(select);
}

function shouldHaveBlueBackground(year, month, day) {
    const blueDates = [
        { year: 2023, month: 5, day: 1 }, // 01-06-2023
        { year: 2023, month: 5, day: 2 }, // 02-06-2023
        { year: 2023, month: 6, day: 4 }, // 04-07-2023
    ];

    return blueDates.some(date => date.year === year && date.month === month && date.day === day);
}
// visualizacion notitas //