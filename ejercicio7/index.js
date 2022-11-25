const receta = {}
receta.nombre="Sandwich"
receta.ingredientes=[]
receta.ingredientes.push({nombre: "Pan",cantidad:2})
receta.ingredientes.push({nombre: "Queso",cantidad:1})
console.log('Primer ingrediente: ' + receta.ingredientes[0].nombre)
var suma=0
for (let i = 0; i < receta.ingredientes.length; i++) {
        suma += (receta.ingredientes[i].cantidad)
}
console.log('Cantidad de ingredientes: ' + suma)