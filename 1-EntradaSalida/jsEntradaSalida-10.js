/*
10 BIS: Debemos lograr tomar el importe por ID ,transformarlo
 a entero (parseInt),y tambien pedirle al usuario mediante una entrada de 
 datos cual es el descuento a realizar, y luego mostrar el importe final con 
 el descuento en el TextBox y el descuento realizado en un Alert.
 */
function mostrarAumento()
{
	// 
	var importeIngresado;
	var descuentoIngresado;
	var importeConDescuento;
	var resultado;
	// 
	importeIngresado = document.getElementById("txtIdImporte").value;
	descuentoIngresado = prompt("Especificar el descuento");
	//
	importeIngresado = parseFloat(importeIngresado);
	descuentoIngresado = parseFloat(descuentoIngresado)
	//
	importeConDescuento = importeIngresado * (descuentoIngresado/100);
	resultado = importeIngresado - importeConDescuento; 
	//
	document.getElementById("txtIdResultado").value = resultado;
	alert("El descuento aplicado fue de un " + importeConDescuento + " pesos");
}