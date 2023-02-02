/*
Nombre: Martin Simone
EJ: 3
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombreIngresado;
	//variable//

	nombreIngresado = document.getElementById("txtIdNombre").value;
	//para poder guradar un input en una variable, el cual es un texbox (input html) debemos utilizar "document.getElementById" mas la id del input de html entre ("") y el .value//
	
	alert("tu nombre es: " + nombreIngresado);

}


