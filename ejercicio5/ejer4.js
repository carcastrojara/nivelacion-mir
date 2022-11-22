//Crear una función join que reciba un arreglo y retorne un string 
//con todos los elementos separados por espacio SIN USAR el método join 
//de los arreglos.
function join(arreglo) {
    var cadena="";
    var k=0
    for (var i = 0; i < arreglo.length; i++) {
        cadena+=arreglo[i];
        
        
        //for (var j = 0; j < arreglo[i].length; j++) {
        //    cadena+=arreglo[i][j];
        //    //console.log(cadena); 
        //}
         
    }
return cadena;

}
console.log(join(['Hola', ' Mundo'])); //"Hola Mundo"
console.log(join(['Make', ' It', 'Real'])); //"Make It Real"
console.log(join([])); //""
