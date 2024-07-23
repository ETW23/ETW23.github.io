// Se obtiene la fecha actual
var fechaActual = new Date();

// Se obtiene el dia
var dia = fechaActual.getDate();

// Se obtiene el mes
var mes = fechaActual.getMonth() + 1;

//Se determina el horario de salvamento dependiendo de la playa
var horario = {
    'mayores': [
        '11:30h a 19:00h',//pos 0 mayo
        '10:00h a 21:00h',//pos 1 junio 1 - 14
        '10:00h a 21:00h',//pos 2 junio 15 agosto 31
        '10:00h a 20:00h',//pos 3 septiembre 1 - 14
        '11:30h a 19:00h',//pos 4 sep 15 / octu 15
        'Sin Servicio'],//no servi
    'poniarbe': [
        '11:30h a 19:00h',
        '12:00h a 20:00h',
        '12:00h a 20:00h',
        '12:00h a 20:00h',
        '11:30h a 19:00h',
        'Sin Servicio'],
    'este': [
        'Sin Servicio',
        'Sin Servicio',
        '12:00h a 19:00h',
        'Sin Servicio',
        'Sin Servicio',
        'Sin Servicio']
}



//Permite determinar el servicio en mayo y fuera de temporada
function esMayo() {
    if (mes > 10 || mes < 5) {
        return 'TEMPORADA FINALIZADA'
    }
    if (mes == 5 && dia <= 14) {
        return 'FINES DE SEMANA Y FESTIVOS';
    }
    return 'DIARIO';
}

//Determina el servicio en las playas operativas desde junio a agosto
function playaMenor() {
    if (mes > 5 && mes < 9) {
        return 'DIARIO'
    }
    return 'Sin Servicio';
}



//Se obtiene el horario concreto dependiendo del dia del mes
function fecha() {
    switch (mes) {
        case 5: {
            // Mayo
            return 0;
        }
        case 6: {
            if (dia < 15) {
                // Junio: 1 al 14
                return 1;
            }
            // Junio: 15 al 30
            return 2;
        }
        case 7:
        case 8: {
            // Julio y Agosto
            return 2;
        }
        case 9: {
            if (dia < 15) {
                // Septiembre: 1 al 14
                return 3;
            }
            //Septiembre: 15 al 30
            return 4;
        }
        case 10: {
            if (dia < 15) {
                //Octubre: 1 al 15
                return 4;
            }
            //Octubre 16 fin de temporada
            return 5;
        }
        default: {
            //Asignado a meses sin salvamento
            return 5;
        }
    }
}