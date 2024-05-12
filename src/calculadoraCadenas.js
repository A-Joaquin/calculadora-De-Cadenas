function calculadoraDeCadena(cadena) {
    if (cadena === "") 
    {
        return 0;
    }

    return cadena.split(',').reduce((suma, segmento) => {
        if (segmento.includes('-')) {
            const [inicio, fin] = segmento.split('-').map(Number);
            for (let i = inicio; i <= fin; i++) suma += i;
        } else {
            suma += Number(segmento);
        }
        return suma;
    }, 0);
}

export default calculadoraDeCadena;
