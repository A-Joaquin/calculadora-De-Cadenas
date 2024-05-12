function calculadoraCadena(cadena) {
    let sumaDeNumeros=0;

    if(cadena=="")
    {
        sumaDeNumeros=0;
    }
    else
    {
        let numeros=cadena.split(',');
        for (let i = 0; i < numeros.length; i++) {
            sumaDeNumeros = sumaDeNumeros + parseInt(numeros[i]);
            console.log(numeros[i])
        }
    }

    return sumaDeNumeros;
  }
  
  export default calculadoraCadena;
  