/*9 BIS : Debemos lograr tomar el importe por ID ,transformarlo a entero (parseInt), y tambien 
pedirle al usuario mediante una entrada de datos cual es el aumento a realizar, 
y luego mostrar el importe con el aumento en el TextBox"RESULTADO".*/
function mostrarAumento()
{
	var sueldo;
	var pedirAumento;
	var sueldoAumentado;
	var resultado;

	sueldo = document.getElementById("txtIdSueldo").value;
	pedirAumento = prompt("Especificar el aumento");

	sueldo = parseFloat(sueldo);
	pedirAumento = parseFloat(pedirAumento);

	sueldoAumentado = sueldo * (pedirAumento/100);
	resultado = sueldo + sueldoAumentado;

	document.getElementById("txtIdResultado").value = resultado;
}
