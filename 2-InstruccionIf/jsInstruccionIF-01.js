function mostrar()
{
	//tomo la edad  
	var edadIngresada;

	edadIngresada = document.getElementById("txtIdEdad").value;
	edadIngresada = parseInt(edadIngresada);

	if(edadIngresada >= 18)
	{
		alert("se permite el acceso");
	}

}//FIN DE LA FUNCIÓN

/*if: antes del if todas las lineas se ejecutaban una detras de la otra, con el if podemos hacer que se omitan o agregen algunas lineas de codigo*/

/* Los operadores normales son los siguentes, y todos trabajan con valores numericos.
+: suma / concatena strings
-: resta
*: multiplica
/: divide
%: modulo (resto de la divicion)*/

/* Los operadores para la instruccion IF son los siguientes, y todos trabajan con todos los valores (numericos, boolean, string)
   en una compracion el resultado siempre sera boolean.
==: relacion un elemento con otro (no asigna)
!=: distincion de un elemento con otro
>: mayor
<: menor
>=: mayor o igual
<=: menor o igual */
