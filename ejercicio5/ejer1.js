//Crea una función sum que reciba un arreglo de números 
//y retorne la suma de todos los elementos:
function sum(numero) {
    var suma=0;
    for (let index = 0; index < numero.length; index++) {
        suma = suma+numero[index];
        //console.log(numero[index]); 
    }
    return suma;
}
console.log(sum([1,2,3])); //6
console.log(sum([10,8,12,5])); //35
console.log(sum([1,2,3])); //6