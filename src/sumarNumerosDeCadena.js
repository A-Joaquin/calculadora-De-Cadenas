function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function buscarDelimitadorDe(cadena) {
    let delimitadorPersonalizado = ',';
    let cadenaFinal = cadena;

    if (cadena === "") {
        return { delimitador: delimitadorPersonalizado, cadenaFinal: "" };
    }

    if (cadena.startsWith("//")) {
        delimitadorPersonalizado = '';
        let i = 3;

        while (i < cadena.length) {
            if (cadena[i] === ']') {
                i = cadena.length;
            } else {
                delimitadorPersonalizado += cadena[i];
                i++;
            }
        }

        cadenaFinal = cadena.split(" ")[1];
    }

    let escapedDelimitador = escapeRegExp(delimitadorPersonalizado);
    return { delimitador: escapedDelimitador, cadenaFinal: cadenaFinal };
}

function sumarPorDelimitador(escapedDelimitador, cadenaFinal) {
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

function sumarNumerosDe(cadena) {
    const { delimitador, cadenaFinal } = buscarDelimitadorDe(cadena);
    let suma = sumarPorDelimitador(delimitador, cadenaFinal);
    return suma;
}

function verificarNumeroMenorA1000(numero) {
    return numero < 1000;
}

export default sumarNumerosDe;
