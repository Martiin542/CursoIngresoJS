//Comentario en linea//
/*Comentario multilineal*/

/*
Nombre: Martin Simone
EJ: 1
Al presionar el  botón, 
se debe mostrar un mensaje como el siguiente "Esto funciona de maravilla"*/
function mostrar() //una funcion es un segnmento de codigo al cual lo podemos llamar y darle funciones dentro de los scopes {}//
{
	alert("Esto funciona de maravilla"); //este alert es una funcion definida es decir que no hace falta los scopes, "alert" lo que recibe por parentesis lo muestra // el ; corta la funcion//
	alert('otra cosa que mostrar'); //tambien se puede usar comillas dobles, se entiende que los comillas dobles son para strings (chars) y las simples para una sola instruccion//
	Alert("esto no funciona"); //esto no funciona porque no podemos escribir las funciones de cualquer forma, por esto hay que tener cuidado ya que visual no lo marca, usar debugger de chrome para saber que esta mal//
}

