/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var numUno;
    var numDos;
    var numTres;
    var resultado;

    numUno = document.getElementById("txtIdPrecioUno").value;
    numUno = parseInt(numUno);
    numDos = document.getElementById("txtIdPrecioDos").value;
    numDos = parseInt(numDos);
    numTres = document.getElementById("txtIdPrecioTres").value;
    numTres = parseInt(numTres);
    
    resultado = numUno + numDos + numTres;
    
    alert("La suma de los tres productos es: " + resultado);

}
function Promedio () 
{
    var numUno;
    var numDos;
    var numTres;
    var resultado;

    numUno = document.getElementById("txtIdPrecioUno").value;
    numUno = parseInt(numUno);
    numDos = document.getElementById("txtIdPrecioDos").value;
    numDos = parseInt(numDos);
    numTres = document.getElementById("txtIdPrecioTres").value;
    numTres = parseInt(numTres);
    
    resultado = numUno + numDos + numTres;

    alert("el promiedo de los tres productos es: " + resultado / 3);
}
function PrecioFinal () 
{
    var numUno;
    var numDos;
    var numTres;
    var resultado;
    var iva
    var precioFinal

    numUno = document.getElementById("txtIdPrecioUno").value;
    numUno = parseInt(numUno);
    numDos = document.getElementById("txtIdPrecioDos").value;
    numDos = parseInt(numDos);
    numTres = document.getElementById("txtIdPrecioTres").value;
    numTres = parseInt(numTres);
    
    resultado = numUno + numDos + numTres;
    iva = resultado * 21 / 100;
    precioFinal = resultado + iva;
    alert("el precio final de los tres productos es: " + precioFinal);
}