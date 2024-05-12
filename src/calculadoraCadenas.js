function calculadoraDeCadena(cadena) {
    if (cadena === "") {
        return 0;
    }

    const numeros = cadena.split(',');
    let sumaDeNumeros = 0;

    for (const numeroStr of numeros) {
        const numero = parseInt(numeroStr);
        sumaDeNumeros += numero;
    }

    return sumaDeNumeros;
}

export default calculadoraDeCadena;
