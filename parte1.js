/*Ejercicio 1
Construiremos el calendario de la planta de la industria a partir del ejercicio de apertura.

Parte 1
Primero, cree una función llamada "Horario de negocios". De manera similar al ejercicio de la clase del día de la semana, esta función debe aceptar dos parámetros: númeroDía y númeroHora.

Al leer el número de día y el número de hora,
su programa debe imprimir si es horario comercial o no. Debería devolver verdadero si es horario comercial y falso si no.

function businessHours(dayNumber, hourNumber)

Obs: considerar horario comercial 9am - 6pm. Utilice el sistema de reloj de 24 horas (6pm = 18).*/

var dayNumber = prompt("Ingresa un número de 1 a 7\n1 = Lunes, 7 = Domingo");

switch(dayNumber){
    case "1":
        businessHours();
        break;
    case "2":
        businessHours();
        break;
    case "3":
        businessHours();
        break;
    case "4":
        businessHours();
        break;
    case "5":
        businessHours();
        break;
    case "6":
        alert(`${false}, no es horario laboral`);
        break;
    case "7":
        alert(`${false}, no es horario laboral`);
        break;
    default:
        alert("Numero no valido");
}

function businessHours(){
    var hourNumber = prompt("Ingresa numero\nRepresenta el horario 24hrs");
    if(hourNumber>8&&hourNumber<19){
        alert(`${true}, es horario laboral`);
    }else{
        alert(`${false}, no es horario laboral`);
    }
}


///////////////////////////////////////////////////////////////////////////////////////////
/*
var day = prompt("Ingresa número de día: ");
var hour = prompt("Ingresa hora: ");


function businessHours(dayNumber, hourNumber){
    if(dayNumber>0&&dayNumber<30){
        if(hourNumber>=9&&hourNumber<=18){
            alert(true);
        }else{
            alert(false);
    }
    }else{
        alert("Dia invalido");
    }
}
businessHours(day, hour);
*/