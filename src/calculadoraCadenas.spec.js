import calculadoraDeCadena from "./calculadoraCadenas.js";

describe("Calcular numeros de una cadena", () => {
  it("deberia de devolver 0 para cadena vacia", () => {
    expect(calculadoraDeCadena("")).toEqual(0);
  });
  it("deberia de devolver 2 para cadena con 2", () => {
    expect(calculadoraDeCadena("2")).toEqual(2);
  });
  it("deberia de devolver 6 para cadena con 3,3", () => {
    expect(calculadoraDeCadena("3,3")).toEqual(6);
  });
  it("deberia de devolver 55 para cadena con variso numeros", () => {
    expect(calculadoraDeCadena("1,2,3,4,5,6,7,8,9,10")).toEqual(55);
  });
});