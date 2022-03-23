// Obtiene la conexión con la base de datos
const knex = require('../database/connection');

let Bicicleta = function(id, color, modelo, lat, lon){
    this.id = id
    this.color = color
    this.modelo = modelo
    this.lat = lat
    this.lon = lon
}

Bicicleta.prototype.toString = function(){
    return `Id: ${this.id}, color: ${this.color}`
}

//Bicicleta.allBicis = []

Bicicleta.add = (bicicleta) => {
    return knex('bicicletas')
      .insert({
        id: bicicleta.id,
        color: bicicleta.color,
        modelo: bicicleta.modelo,
        lat: bicicleta.lat,
        lon: bicicleta.lon
      });
}

//Añadir un par de bicis:
let b1 = new Bicicleta(1, 'rojo', 'bmx', [19.284770943610578, -99.13729060406136])
let b2 = new Bicicleta(2, 'blanca', 'Benotto', [19.286055116801744, -99.1369912899661])

Bicicleta.add(b1)
Bicicleta.add(b2)

//Eliminar
Bicicleta.findById = (id) => {
    return knex
      .select('*')
      .from('bicicletas')
      .where('id', id)
      .first();
}

Bicicleta.removeById = (id) => {
    return knex('bicicletas')
      .delete()
      .where('id', id);
}

Bicicleta.updateById = (id, bici) => {
    return knex('bicicletas')
      .update(bici)
      .update('updated_at', knex.fn.now())
      .where('id', id);
}

// Obtiene todos los productos en la base
Bicicleta.all = () => {
  // Realiza la consulta dentro de knex
  return knex
    .select('*')
    .from('bicicletas');
}

module.exports = Bicicleta