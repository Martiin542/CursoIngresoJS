function mostrar()
{
    var precio;
    var porcentajeDescuento;
    var descuentoAplicado;
    var resultado;

    precio = prompt("indicar el precio del producto")
    porcentajeDescuento = prompt("indicar el descuento del producto")

    precio = parseInt(precio);
    porcentajeDescuento = parseInt(porcentajeDescuento);

    descuentoAplicado = precio * porcentajeDescuento/100;
    resultado = precio - descuentoAplicado;

    document.getElementById("elPrecioFinal").value = resultado;
}
