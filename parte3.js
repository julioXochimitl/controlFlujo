/*Parte 3
Finalmente, cree una función que, a partir de un número de día del año (int, 0-365) y un número de hora (int, 0-23), devuelva verdadero si es horario comercial.*/



var yearDayNumber = prompt("Ingresa un numero de 0 a 365");
var count = (yearDayNumber%7)+5;
var hourNumber;

if(yearDayNumber>0&&yearDayNumber<366){
    if(count==6||count==7){
        alert("No es horario laboral");
    }else{
        hourNumber = prompt("Ingresa numero\nRepresenta el horario 24hrs");
        getBusinessHour(hourNumber);
    }
}else{
    alert("Numero no valido");
}

function getBusinessHour(a){
    if(a>8&&a<19){
        alert("Es horario laboral")
    }else{
        alert("No es horario laboral");
    }
}