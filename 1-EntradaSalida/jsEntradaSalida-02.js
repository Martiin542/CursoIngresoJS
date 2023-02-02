/*
Nombre: Martin Simone
EJ: 2
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var pedirNombre; 
	//utilizar camelCase// //una "var" (variable) es un espacio de memoria donde podemos reservar cualquer cosa, tambien se puede usar "let"//
	
	pedirNombre = prompt("Por favor ingrese su nombre"); 
	//al poner el nombre de la variable mas "=" podemos hacer que lo que se escriba en el prompt se guarde en esa variable, para ver lo que ponen en el prompt (input) tenemos que utilizar el debugger//
	//prompt muestra un cuadro de dialgo que es un input para el usario, retorana el valor cuando el usario da okay//

	alert("Tu nombre es: " + pedirNombre);
	//de esta forma podemos mandar una alerta (alert) sumado (+) a el mensaje que este dentro del prompt que almacena esa variable//
	//todo lo que esta dentro de las comillas es literal, por esto es que no podemos poner la variable dentro de estas//
	//el + es un operador que se encarga de concatenar (agregar cosas / sumrale strigs)//
}	


