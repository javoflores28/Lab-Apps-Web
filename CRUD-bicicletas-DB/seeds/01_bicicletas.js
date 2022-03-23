// seeds/01_bicicletas.js
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('bicicletas').del()
    .then(function () {
      // Inserts seed entries
      return knex('bicicletas').insert([
        { id: 1, color: 'negra', modelo: 'Urbana', lat: 19.284770 , lon: -99.137290 },
        { id: 2, color: 'blanca', modelo: 'Montaña', lat: 19.286055, lon: -99.136991},
      ]);
    });
};