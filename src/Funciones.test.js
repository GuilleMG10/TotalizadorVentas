import { devolverPrecioDeUnItem , devolverPrecioNeto,devolverEstado,devolverCantidad,devolverImpuestoPorEstado,calcularImpuesto, devolverDescuento,devolverPrecioTotal} from "./Funciones";

describe("Funciones", () => {
    it("deberia devolver el precio de un item", () => {
      expect(devolverPrecioDeUnItem(3)).toEqual(3);
    });
    it("deberia devolver la cantidad de items ingresados", () => {
        expect(devolverCantidad(4)).toEqual(4);
      });
      it("deberia devolver el estado seleccionado", () => {
        expect(devolverEstado("CA")).toEqual("CA");
      });
      it("deberia devolver el precio neto", () => {
        expect(devolverPrecioNeto(3,2)).toEqual(6);
      });
      it("deberia devolver el porcentaje de impuesto por estado", () => {
        expect(devolverImpuestoPorEstado("CA")).toEqual(8.25);
      });
      it("deberia devolver el impuesto total segun el estado", () => {
        expect(calcularImpuesto("TX",20,3)).toEqual(3.75);
      });
      it("deberia devolver el impuesto total segun el estado", () => {
        expect(devolverImpuestoPorEstado("NV")).toEqual(8.00);
      });
      it("deberia devolver el impuesto total segun el estado", () => {
        expect(devolverImpuestoPorEstado("UT")).toEqual(6.65);
      });
      it("deberia devolver el impuesto total segun el estado", () => {
        expect(devolverImpuestoPorEstado("AL")).toEqual(4.0);
      });
      it("deberia devolver el descuento de 1000", () => {
        expect(devolverDescuento(1000,1)).toEqual(30);
      });
      it("deberia devolver el descuento de 3000", () => {
        expect(devolverDescuento(3000,1)).toEqual(3000*0.05);
      });
      it("deberia devolver el descuento de 7000", () => {
        expect(devolverDescuento(7000,1)).toEqual(7000*0.07);
      });
      it("deberia devolver el descuento de 10000", () => {
        expect(devolverDescuento(10000,1)).toEqual(10000*0.10);
      });
      it("deberia devolver el descuento de 30000", () => {
        expect(devolverDescuento(30000,1)).toEqual(30000*0.15);
      });
      it("deberia devolver precio total", () => {
        expect(devolverPrecioTotal(30,2,"TX")).toEqual(63.75);
      });
  
      
      
     
      

  });