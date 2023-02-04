/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos); //es indispensable hacer el parseInt de las variables cuando sumamos ya que este operador tambien sirve para sumar strings

	//alert("la suma es: " + numeroUno + numeroDos); nunca hacer esto, si o si guardarlo en una variable por si se vuelve a utilizar

	resultado = numeroUno + numeroDos;

	alert("la suma es: " + resultado);
}

function restar()
{
	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);
	resultado = numeroUno - numeroDos; //para hacer la operacion de la resta no es necesario haber parseado las variables

	alert("la resta es: " + resultado); 
}

function multiplicar()
{ 
	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);
	resultado = numeroUno * numeroDos; //para hacer la operacion de la multiplicacion no es necesario haber parseado las variables

	alert("la multiplicacion es: " + resultado);
}

function dividir()
{
	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);
	resultado = numeroUno / numeroDos; //para hacer la operacion de la division no es necesario haber parseado las variables

	alert("la divicion es: " + resultado);
}

//se le puede poner los mismos nombres de las variables a todas las funciones ya que 

