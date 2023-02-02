/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldo;
	var aumento;
	var nuevoSueldo; 
	
	sueldo = document.getElementById("txtIdSueldo").value;

	sueldo = parseInt(sueldo); //nunca olvidr cambiar a Int
	
	aumento = sueldo * (10 / 100); //para calcular el desceunto hay que multiplicarle a el numero inicial la cantidad de descuento dividio 100
	nuevoSueldo = sueldo + aumento; // luego si queremos indicar un aumento hay que sumarlo

	document.getElementById("txtIdResultado").value = nuevoSueldo
}
