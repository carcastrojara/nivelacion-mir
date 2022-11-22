//Crea una función maxIndex que reciba una arreglo de números y 
//retorne el índice donde se encuentra el mayor. 
//Si el arreglo está vacío debe retornar -1.
function maxindex(num) {
    var maximo=0;
    var maxind=1;
    if (num.length===0) {
        return -1;
    }
    for (let index = 0; index < num.length; index++) {
        if (maximo<num[index]) {
            maximo=num[index];
            maxind+=index;
        }
    }
    return maxind;
}
console.log(maxindex([1,3,2])); //2
console.log(maxindex([10,9,8,7,6,5,4,15])); //8
console.log(maxindex([])); //undefined