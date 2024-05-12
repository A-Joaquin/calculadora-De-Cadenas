import calculadoraCadena from "./calculadoraCadenas.js";

describe("Calcular numeros de una cadena", () => {
  it("deberia de devolver 0 para cadena vacia", () => {
    expect(calculadoraCadena("")).toEqual(0);
  });
  it("deberia de devolver 2 para cadena con 2", () => {
    expect(calculadoraCadena("2")).toEqual(2);
  });
  it("deberia de devolver 6 para cadena con 3,3", () => {
    expect(calculadoraCadena("3,3")).toEqual(6);
  });
});