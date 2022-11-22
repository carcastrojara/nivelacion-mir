//Crea una función max que reciba un arreglo de números y retorne 
//el número máximo SIN USAR el método Math.max de JavaScript. 
//Si el arreglo está vacío debe retornar undefined
function max(numeros) {
    var maximo=0;
    if (numeros.length===0) {
        return undefined;
    }
    for (let index = 0; index < numeros.length; index++) {
        if (maximo<numeros[index]) {
            maximo=numeros[index]
        }
    }
    return maximo;
}
console.log(max([1,3,2])); //3
console.log(max([10,9,8,7,6,5,4])); //10
console.log(max([])); //undefined