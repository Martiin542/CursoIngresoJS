/*
Nombre: Martin Simone
EJ: 5
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var nombreIngresado;
	var edadIngresada;

	nombreIngresado = document.getElementById("txtIdNombre").value;
	edadIngresada = document.getElementById("txtIdEdad").value;

	alert("usted se llama " + nombreIngresado + " y tiene " + edadIngresada + " años");

} //en el caso de tener un error fijarse en el debugger

