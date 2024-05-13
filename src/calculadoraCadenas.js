function calculadoraDeCadena(cadena) {
    if (cadena === "") 
    {
        return 0;
    }

    return cadena.split(',').reduce((suma, segmento) => {
        if (segmento.includes('-')) {
            console.log(segmento);
            let numeros2 = segmento.split('-');
            for (const numeroStr of numeros2) {
                const numero = parseInt(numeroStr);
                suma += numero;
            }

        }else {
            suma += Number(segmento);
        }
        return suma;
    }, 0);
}

export default calculadoraDeCadena;