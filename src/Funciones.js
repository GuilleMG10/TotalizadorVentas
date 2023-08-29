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
    if(estado=="NV")
    {
        return 8.00;
    }
     if(estado=="TX")
    {
        return 6.25;
    }
    if(estado=="AL")
    {
        return 4;
    }
     if(estado=="CA")
    {
        return 8.25;
    }
}
function calcularImpuesto(estado,precio,cantidad)
{ 
  
    return devolverPrecioNeto(precio,cantidad)*(devolverImpuestoPorEstado(estado)/100);
    
}
export {devolverPrecioDeUnItem,devolverCantidad,devolverEstado,devolverPrecioNeto,devolverImpuestoPorEstado,calcularImpuesto};