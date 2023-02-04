
function mostrar()
{
    var ancho;
    var largo;
    var perimetro;

    ancho = prompt("indicar el ancho del terreno");
    largo = prompt("indicar el largo del terreno");

    ancho = parseFloat(ancho);
    largo = parseFloat(largo);

    perimetro = 2 * ancho + 2 * largo;

    alert("el permitro del terreno es de " + perimetro + " metros")
}
