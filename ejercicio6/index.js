//Creacion de la variable pedro de tipo objeto
const pedro = {
    nombre: "Pedro Perez",
    edad: 30,
    activo: true,
    hobbies: ['programar', 'squash', 'piano']
}
//Imprime en la consola el valor de la llave edad.
console.log(pedro.edad)
//Agrega una propiedad con llave estatura y valor 1.8
pedro.estatura = 1.8
//Elimina la propiedad con llave activo
delete pedro.activo
//Recorre todas las propiedades e imprímelas en consola 
for (var llave in pedro) {
    if (pedro.hasOwnProperty(llave)) {
      console.log(llave + ': '+pedro[llave]+ "\n")
    }
  }
//Agrégale al objeto una función llamada saluda 
pedro.saluda= function() { return "Hola, me llamo " + this.nombre}
//pedro.saluda= ()=> { return "Hola, me llamo " + this.nombre} 
//con this.nombre no retorna el valor 

//Llama la función saluda y verifica el resultado
console.log(pedro.saluda())