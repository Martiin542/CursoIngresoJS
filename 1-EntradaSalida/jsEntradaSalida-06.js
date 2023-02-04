/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var numeroUno;
	var numeroDos;
	var resultado;


	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;

	numeroUno = parseInt(numeroUno); //forma de convertir un valor cadena (texto) en un valor entero (numero), solo numeros eneteros
	numeroDos = parseInt(numeroDos); //convierte el numero y lo vuelve a guardar en la variable 
	//numeroDos = parseInt(document.getElementById("txtIdNumeroDos").value); tambien se puede pasar asi (no hacer)
	//numeroDos = parseFloat(numeroDos); para numeros flotantes (ej. 6,21)
	resultado = numeroUno + numeroDos;
	//el resultado no se parsea ya que las dos variables que suma ya son un valor entero (numero)
	

	alert("la suma es: " + resultado);
} 	//prestar atension a el orden del codigo
