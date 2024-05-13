function calculadoraDeCadena(cadena) {
    let cadenaFinal=cadena;
    let delimitadorPersonalizado=',';
    if (cadena === "") 
    {
        return 0;
    }
    if (cadena.startsWith("//"))
    {
        delimitadorPersonalizado='';
        let i = 3;

        while (i < cadena.length) {
          if(cadena[i]==']')
            {
                i=cadena.length;
            }
            else{
                delimitadorPersonalizado=delimitadorPersonalizado+cadena[i];
                i++;
            }
        }
        let cadenaNumero=(cadena.split(" "))[1];
        cadenaFinal=cadenaNumero;
    }

    return cadenaFinal.split(delimitadorPersonalizado).reduce((suma, segmento) => {
        if (segmento.includes('-')) {
            let numeros2 = segmento.split('-');
            for (const numeroStr of numeros2) {
                const numero = parseInt(numeroStr);
                if(verificarNumeroMenorA1000(numero))
                {
                    suma += numero;
                }
            }

        }else if(segmento.includes(',')) {
            let numeros2 = segmento.split(',');
            for (const numeroStr of numeros2) {
                const numero = parseInt(numeroStr);
                if(verificarNumeroMenorA1000(numero))
                {
                    suma += numero;
                }
            }
        }
        else {
            if(verificarNumeroMenorA1000(Number(segmento)))
                {
                    suma += Number(segmento);
                }
        }
        return suma;
    }, 0);
}

function verificarNumeroMenorA1000(numero)
{
    let isMinor1000=false;
    if(numero<1000)
    {
        isMinor1000=true;
    }
    return isMinor1000;
}
export default calculadoraDeCadena;