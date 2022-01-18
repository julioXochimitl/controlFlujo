/*Parte 2
Ahora, crea la función getDayNumber.

Debe aceptar dos parámetros: janFirstDayNumber y yearDayNumber.

El yearDayNumber será un int que va de 0 a 365.

janFirstDayNumber será un int que va de 0 a 6, que representa el día de la semana del 1 de enero.
Luego, su función debe calcular y devolver el día de la semana correspondiente al yearDayNumber pasado.

Sugerencia: use el operador de resto (%), dividiendo su yearDayNumber por 7.*/



////////////////////////////////VERSION NORMAL////////////////////////////////////////////////////////

/*
var yearDayNumber = prompt("Ingresa un numero de 1 a 365\nRepresenta todos los dias del año"); //a

if(yearDayNumber>0&&yearDayNumber<366){
    var janFirstDayNumber = prompt("Ingresa un número de 0 a 6\n0 = Domingo, 7 = Sabado"); //b
    if(janFirstDayNumber>=0&&janFirstDayNumber<7){
        getDayNumber(yearDayNumber, janFirstDayNumber);
    }else{
        alert("Numero invalido");
    }
}else{
    alert("Numero invalido");
}

function getDayNumber(a, b){
    var day = ((a%7)-2);
    alert(`Callo el dia ${day} de la semana`);
    //alert("entraste a la funcion");
}
*/

////////////////////////////////VERSION METODO Date()/////////////////////////////////////////////////

var arrayMonth = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];

const dateYear = new Date("2022");
let year = dateYear.getFullYear();

var numMonth = prompt("Ingresa un numero de 1 a 12\nEnero = 1 y Diciembre = 12"); //Representa el número del mes
if(numMonth>0&&numMonth<13){
    var daySet = prompt("Inresa número de día: ");//Representa los dias que tiene cada mes
    if(daySet>0&&daySet<32){
        getDayNumber(numMonth, daySet, year);
    }else{
        alert("Número invalido");
    }
}else{
    alert("Número invalido");
}

function getDayNumber(month, day, year){
    const dateDay = new Date(`${month} ${day}, ${year}`);
    let dayNumber = dateDay.getDay();
    
    alert(`El dia es "${dayNumber}" = "${arrayMonth[dayNumber]}" del año "${year}"`);
}