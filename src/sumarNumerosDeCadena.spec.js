import sumarNumerosDe from "./sumarNumerosDeCadena.js";

describe("Calcular numeros de una cadena", () => {
  it("deberia de devolver 0 para cadena vacia", () => {
    expect(sumarNumerosDe("")).toEqual(0);
  });
  it("deberia de devolver 2 para cadena con 2", () => {
    expect(sumarNumerosDe("2")).toEqual(2);
  });
  it("deberia de devolver 6 para cadena con 3,3", () => {
    expect(sumarNumerosDe("3,3")).toEqual(6);
  });
  it("deberia de devolver 55 para cadena con variso numeros", () => {
    expect(sumarNumerosDe("1,2,3,4,5,6,7,8,9,10")).toEqual(55);
  });
  it("deberia de devolver 6 para cadena con separada con , y -", () => {
    expect(sumarNumerosDe("1,2-3")).toEqual(6);
  });
  it("deberia de devolver 8 para cadena mas larga con separada con , y -", () => {
    expect(sumarNumerosDe("1,2-3,1-1")).toEqual(8);
  });
  it("deberia de devolver 17 para cadena mas larga con delimitador especificado", () => {
    expect(sumarNumerosDe("//[;] 6;7;4")).toEqual(17);
  });
  it("deberia de devolver 4 para cadena con delimitador especificado y delimitadores por defecto - y ,", () => {
    expect(sumarNumerosDe("//[;] 1,1;1-1")).toEqual(4);
  });

  it("deberia de devolver 1 para cadena con numeros >= 1000", () => {
    expect(sumarNumerosDe("//[;] 1,1002;1001-1000")).toEqual(1);
  });

  it("deberia de devolver 1 para cadena con numeros >= 1000 y con delimitador personalizado con cualquier longitud", () => {
    expect(sumarNumerosDe("//[***] 1***1002***1001***1000")).toEqual(1);
  });

  it("deberia de devolver 19 y con delimitador personalizado con cualquier longitud Y delimitadores combinados", () => {
    expect(sumarNumerosDe("//[***] 5-2,10***2")).toEqual(19);
  });
  it("deberia de devolver 25 y con delimitador personalizado con cualquier longitud Y delimitadores combinados", () => {
    expect(sumarNumerosDe("//[***] 1***,2,3***5-2,10***2")).toEqual(25);
  });
});