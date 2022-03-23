const Bicicleta = require('../models/bicicleta')

exports.bicicleta_list = function(req, res){
    Bicicleta.all()
    .then((data) => {
      // Guardamos las bicicletas en una variable
      let bicis = data;
      // Enviamos los datos a la vista
      res.render('bicicletas/index', {bicis: bicis})
    });

}

exports.bicicleta_create_get = function(req, res){
    res.render('bicicletas/create')
}

exports.bicicleta_create_post = function(req, res){
    let bicicleta = {
        id: req.body.id,
        color: req.body.color,
        modelo: req.body.modelo,
        lat: req.body.lat,
        lon: req.body.lon
    };
    Bicicleta.add(bicicleta)
        .then((id) => {
          res.redirect('/bicicletas')
    })
} 

exports.bicicleta_delete_post = function(req, res){
  Bicicleta.findById(req.params.id).then((bicicleta) => {
    Bicicleta.removeById(bicicleta.id)
      .then((id) => {
        res.redirect('/bicicletas')
      });
  });
}

exports.bicicleta_update_get = function(req, res){
    Bicicleta.findById(req.params.id).then((bicicleta) => {
      res.render('bicicletas/update', {bicicleta})
    })
    
}

exports.bicicleta_update_post = function(req, res){
    Bicicleta.findById(req.params.id).then((bicicleta) => {
        let bicicletaUpdate = {
            //id: req.body.id,
            color: req.body.color,
            modelo: req.body.modelo,
            lat: req.body.lat,
            lon: req.body.lon
        };
    Bicicleta.updateById(bicicleta.id, bicicletaUpdate)
        .then((id) => {
            res.redirect('/bicicletas')
        });
    });
}