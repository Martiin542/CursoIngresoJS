/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
	var descuento;
	var resultado;

	importe = document.getElementById("txtIdImporte").value
	importe = parseInt(importe);
	descuento = importe * (25/100); //explicado en el ejercicio 9
	resultado = importe - descuento; //en este caso como se querie indicar un descuento es necesario restrarlo
	
	document.getElementById("txtIdResultado").value = resultado; 
}
