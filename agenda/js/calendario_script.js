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
        let blueId = shouldHaveBlueBackground(currYear, currMonth, i) ? `${currYear}${currMonth.toString().padStart(2, '0')}${i.toString().padStart(2, '0')}` : "";

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

var elementNumEx;

function handleElementClick(elementId) {
    const elementNumber = parseInt(elementId.replace("element", ""));
    var events = Array.from(document.querySelectorAll('[id^="event"]'));
    const preport = document.getElementById("preportadaid");
    const notita = document.getElementById("notitas");
    var clickedElement = document.getElementById(elementId);

    function prepoNotita() {
        preport.classList.add("novisible");
        preport.classList.remove("preportada");
        notita.classList.add("notitas");
        notita.classList.remove("notitnovisible");
    }

    if ( clickedElement != null) {
        if (elementNumber === 20230501) {
            prepoNotita();
            events.forEach(event => {
                if (event === event1 || event === event2) {
                    event.classList.add("diactive");
                } else {
                    event.classList.remove("diactive");
                }
            });
        } else if (elementNumber === 20230502) {
            prepoNotita();
            events.forEach(event => {
                if (event === event3) {
                    event.classList.add("diactive");
                } else {
                    event.classList.remove("diactive");
                }
            });
        } else if (elementNumber === 20230604) {
            prepoNotita();
            events.forEach(event => {
                if (event === event4) {
                    event.classList.add("diactive");
                } else {
                    event.classList.remove("diactive");
                }
            });
        } else if (elementNumber === 20230909) {
            prepoNotita();
            events.forEach(event => {
                if (event === event5) {
                    event.classList.add("diactive");
                } else {
                    event.classList.remove("diactive");
                }
            });
        } else if (elementNumber === 20231006) {
            prepoNotita();
            events.forEach(event => {
                if (event === event6) {
                    event.classList.add("diactive");
                } else {
                    event.classList.remove("diactive");
                }
            });
        } else if (elementNumber === 20231016) {
            prepoNotita();
            events.forEach(event => {
                if (event === event7) {
                    event.classList.add("diactive");
                } else {
                    event.classList.remove("diactive");
                }
            });
        } else if (elementNumber === 20231020) {
            prepoNotita();
            events.forEach(event => {
                if (event === event8) {
                    event.classList.add("diactive");
                } else {
                    event.classList.remove("diactive");
                }
            });
        } else if (elementNumber === 20231028) {
            prepoNotita();
            events.forEach(event => {
                if (event === event9) {
                    event.classList.add("diactive");
                } else {
                    event.classList.remove("diactive");
                }
            });
        } else if (elementNumber === 20231101) {
            prepoNotita();
            events.forEach(event => {
                if (event === event10) {
                    event.classList.add("diactive");
                } else {
                    event.classList.remove("diactive");
                }
            });
        } else if (elementNumber === 20231112) {
            prepoNotita();
            events.forEach(event => {
                if (event === event11) {
                    event.classList.add("diactive");
                } else {
                    event.classList.remove("diactive");
                }
            });
        } else if (elementNumber === 20231122) {
            prepoNotita();
            events.forEach(event => {
                if (event === event12) {
                    event.classList.add("diactive");
                } else {
                    event.classList.remove("diactive");
                }
            });
        } else if (elementNumber === 20240018) {
            prepoNotita();
            events.forEach(event => {
                if (event === event13) {
                    event.classList.add("diactive");
                } else {
                    event.classList.remove("diactive");
                }
            });
        } else if (elementNumber === 20240025) {
            prepoNotita();
            events.forEach(event => {
                if (event === event14) {
                    event.classList.add("diactive");
                } else {
                    event.classList.remove("diactive");
                }
            });
        } else if (elementNumber === 20240108) {
            prepoNotita();
            events.forEach(event => {
                if (event === event15) {
                    event.classList.add("diactive");
                } else {
                    event.classList.remove("diactive");
                }
            });
        } else if (elementNumber === 20240220) {
            prepoNotita();
            events.forEach(event => {
                if (event === event16) {
                    event.classList.add("diactive");
                } else {
                    event.classList.remove("diactive");
                }
            });
        }
    } else { 
        events.forEach(event => {
            event.classList.remove("diactive");
        });
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
        { year: 2023, month: 9, day: 9 }, // 09-10-2023
        { year: 2023, month: 10, day: 6 }, // 06-11-2023
        { year: 2023, month: 10, day: 16 }, // 16-11-2023
        { year: 2023, month: 10, day: 20 }, // 20-11-2023
        { year: 2023, month: 10, day: 28 }, // 28-11-2023
        { year: 2023, month: 11, day: 1 }, // 01-12-2023
        { year: 2023, month: 11, day: 12 }, // 12-12-2023
        { year: 2023, month: 11, day: 22 }, // 22-12-2023
        { year: 2024, month: 0, day: 18 }, // 18-01-2024
        { year: 2024, month: 0, day: 25 }, // 25-01-2024
        { year: 2024, month: 1, day: 8 }, // 08-02-2024
        { year: 2024, month: 2, day: 20 }, // 20-03-2024
    ];

    return blueDates.some(date => date.year === year && date.month === month && date.day === day);
}
// visualizacion notitas //