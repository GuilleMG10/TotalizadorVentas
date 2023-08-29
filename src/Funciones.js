function devolverPrecioDeUnItem(precio)
{
    return precio;
}
function devolverCantidad(cantidad)
{
    return cantidad;
}
function devolverEstado(estado)
{
    return estado;
}
function devolverPrecioNeto(precio,cantidad)
{
    return precio*cantidad;
}
function devolverImpuestoPorEstado(estado)
{
    if(estado=="UT")
    {
        return 6.65;
    }
    else if(estado=="NV")
    {
        return 8.00;
    }
    else if(estado=="TX")
    {
        return 6.25;
    }
   else if(estado=="AL")
    {
        return 4;
    }
    else if(estado=="CA")
    {
        return 8.25;
    }
}
function calcularImpuesto(estado,precio,cantidad)
{
    impuesto=devolverImpuesto(estado);
    tot=devolverTotal(precio,cantidad);
    resul=tot*(impuesto/100);
    return resul;
}
export {devolverPrecioDeUnItem,devolverCantidad,devolverEstado,devolverPrecioNeto,devolverImpuestoPorEstado,calcularImpuesto};