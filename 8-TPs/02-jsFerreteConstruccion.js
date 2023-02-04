/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{   // variables
    var largoIngresado;
    var anchoIngresado; 
    var perimetro;
    var alambre;
    // IDs
    largoIngresado = document.getElementById("txtIdLargo").value;
    anchoIngresado = document.getElementById("txtIdAncho").value;
    // traspaso a Float
    largoIngresado = parseFloat(largoIngresado);
    anchoIngresado = parseFloat(anchoIngresado);
    // calculos
    perimetro = (anchoIngresado * 2) + (largoIngresado * 2); //formula para sacar el perimetro (tambien se puede usar perimetro = (ancho + largo) * 2;, pero javaScript no la reconoce porque no sabe como hacer distributiva)
    alambre = perimetro * 3; //*3 ya que se debe alambrar con tres hilos de alambre
    // output
    alert("se requieren " + alambre + " metros de alambre para un terreno de " + largoIngresado + " metros de largo por " + anchoIngresado + " metros de ancho");
}
function Circulo () 
{   // variables
    var radioIngresado;
    var perimetro;
    var cantidadAlambre;
    // IDs
    radioIngresado = document.getElementById("txtIdRadio").value;
    // traspaso a Float
    radioIngresado = parseFloat(radioIngresado);
    // calculos
    perimetro = 2 * 3.14 * radioIngresado; //forma de sacar el perimetro de una circunferencia, para luego calcular la cantidad de alambre
    console.log(perimetro)
    perimetro = (3.14 * radioIngresado) * 2; //otra forma de sacar el perimetro
    console.log(perimetro)
    cantidadAlambre = perimetro * 3; //*3 ya que se debe alambrar con tres hilos de alambre
    // output
    alert("se requieren " + cantidadAlambre + " metros de alambre para un terreno de " + radioIngresado + " radio");
    

}
function Materiales () 
{   // variables
    var largoTerreno;
    var anchoTerreno;
    var metrosCuadrados;
    var bolsasCemento;
    var bolsasCal;
    // IDs
    largoTerreno = document.getElementById("txtIdLargo").value;
    anchoTerreno = document.getElementById("txtIdAncho").value;
    // traspaso a Float
    largoTerreno = parseFloat(largoTerreno); 
    anchoTerreno = parseFloat(anchoTerreno);
    // calculos
    metrosCuadrados = (largoTerreno * anchoTerreno); //formula para saber los metros cuadrados
    bolsasCemento = metrosCuadrados * 2;
    bolsasCal = metrosCuadrados * 3;
    // output
    alert(`Se requieren ${bolsasCemento} bolsas de cemento y ${bolsasCal} bolsas de cal para un contrapiso de ${metrosCuadrados} metros cuadrados`) //nueva forma de concatenar
}


