/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var dividendo;
	var divisor; 
	var resultado;

	dividendo = document.getElementById("txtIdNumeroDividendo").value;
	divisor = document.getElementById("txtIdNumeroDivisor").value;

	dividendo = parseFloat(dividendo);
	divisor = parseFloat(divisor);
	
	resultado = dividendo % divisor; //para mostrar el resto se utiliza el operador de porcentaje (%)//
 	
	alert("el resto es: " + resultado);
}
