import { devolverPrecioDeUnItem , devolverPrecioNeto,devolverEstado,devolverCantidad,devolverImpuestoPorEstado} from "./Funciones";

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
     
      

  });