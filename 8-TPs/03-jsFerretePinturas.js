/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura 
    en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos
    mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var tempFahrenheit;
    var tempCentigrados;

    tempFahrenheit = document.getElementById("txtIdTemperatura").value;

    tempFahrenheit = parseFloat(tempFahrenheit);
    
    tempCentigrados = (tempFahrenheit - 32) * 5/9;

    alert("La tempreatura en grados centigrados es de " + tempCentigrados + " grados");

    
}

function CentigradosFahrenheit () 
{
    var tempFahrenheit;
    var tempCentigrados;

    tempCentigrados = document.getElementById("txtIdTemperatura").value;

    tempCentigrados = parseFloat(tempCentigrados);
    
    tempFahrenheit = (tempCentigrados * 9/5) + 32;

    alert("La tempreatura en grados fahrenheit es de " + tempFahrenheit + " grados");
}
