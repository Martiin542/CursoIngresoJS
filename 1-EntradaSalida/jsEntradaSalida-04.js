/* 
Nombre: Martin Simone
EJ: 4
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var nombreIngresado;

	nombreIngresado = prompt("Ingrese su nombre");
	//dato: lo que se escribe en la derecha se almacena en la izquierda//

	document.getElementById("txtIdNombre").value = nombreIngresado;
	//para mostrar por "ID" debemos pedirlo por prompt, luego mostrarlo en el textbox, para hacer esto debemos hacer lo contrario al ej.3, es decir cambiar los valores de lugar//
}

  
