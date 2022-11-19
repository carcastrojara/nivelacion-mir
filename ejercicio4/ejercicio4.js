function calcularColor(numero) {
    var cadena;
    if (numero === 1){
        cadena='El color es negro';
    }else if (numero === 2){
        cadena='El color es blanco';
    }else if (numero === 3){
        cadena='El color es azul';
    }else{
        cadena='El color es verde';}
    return cadena;
}
console.log(calcularColor(1));
console.log(calcularColor(2));
console.log(calcularColor(3));
console.log(calcularColor(4));