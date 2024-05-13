function calculadoraDeCadena(cadena) {
    let cadenaFinal=cadena;
    if (cadena === "") 
    {
        return 0;
    }
    let delimitador=',';
    if (cadena.startsWith("//"))
    {
        delimitador=cadena[3];
        let cadenaNumero=(cadena.split(" "))[1];
        cadenaFinal=cadenaNumero;
    }

    return cadenaFinal.split(delimitador).reduce((suma, segmento) => {
        if (segmento.includes('-')) {
            let numeros2 = segmento.split('-');
            for (const numeroStr of numeros2) {
                const numero = parseInt(numeroStr);
                suma += numero;
            }

        }else if(segmento.includes(',')) {
            let numeros2 = segmento.split(',');
            for (const numeroStr of numeros2) {
                const numero = parseInt(numeroStr);
                suma += numero;
            }
        }
        else {
            suma += Number(segmento);
        }
        return suma;
    }, 0);
}

export default calculadoraDeCadena;