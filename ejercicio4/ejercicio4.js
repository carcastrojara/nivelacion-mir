function calcularColor(numero) { //se agrega el argumento 
    var color;
    if (numero === 1){
        color='negro';//se cambia black a negro
    }else if (numero === 2){//Estaba como asignacion, se cambia a comparacion, tambien se modifica a else if
        color='blanco';
    }else if (numero === 3){
        color='azul';
    }else{
        color='verde';}
    return "El color es " + color;
}
console.log(calcularColor(1));
console.log(calcularColor(2));
console.log(calcularColor(3));
console.log(calcularColor(8));