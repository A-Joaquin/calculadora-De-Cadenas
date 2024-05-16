function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function sumarNumerosDe(cadena) {
    let cadenaFinal = cadena;
    let delimitadorPersonalizado = ',';
    
    if (cadena === "") {
        return 0;
    }

    if (cadena.startsWith("//")) {
        delimitadorPersonalizado = '';
        let i = 3;

        while (i < cadena.length) {
            if (cadena[i] === ']') {
                i = cadena.length;
            } else {
                delimitadorPersonalizado = delimitadorPersonalizado + cadena[i];
                i++;
            }
        }
        let cadenaNumero = (cadena.split(" "))[1];
        cadenaFinal = cadenaNumero;
    }

    const escapedDelimitador = escapeRegExp(delimitadorPersonalizado);

    cadenaFinal = cadenaFinal.replace(new RegExp(escapedDelimitador, 'g'), ',');

    return cadenaFinal.split(',').reduce((suma, segmento) => {
        const numeros = segmento.split('-').map(Number);
        for (const numero of numeros) {
            if (verificarNumeroMenorA1000(numero)) {
                suma += numero;
            }
        }
        return suma;
    }, 0);
}

function verificarNumeroMenorA1000(numero) {
    return numero < 1000;
}

export default sumarNumerosDe;
