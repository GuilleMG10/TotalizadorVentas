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
function devolverDescuento(precio,cantidad)
{
    if(precio*cantidad>=1000 && precio*cantidad<3000 )
    {
        return (1000*0.03);
    }

    if(precio*cantidad>=3000 && precio*cantidad<7000)
    {
        return (3000*0.05);
    }

    if(precio*cantidad==7000 && precio*cantidad <10000)
    {
        return (7000*0.07);
    }

    if(precio*cantidad==10000 && precio*cantidad <30000)
    {
        return (10000*0.10);
    }


    if(precio*cantidad>=30000)
   {
    return (30000*0.15);
   }
   else{
    return 0;
   }
}
export {devolverPrecioDeUnItem,devolverCantidad,devolverEstado,devolverPrecioNeto,devolverImpuestoPorEstado,calcularImpuesto,devolverDescuento};