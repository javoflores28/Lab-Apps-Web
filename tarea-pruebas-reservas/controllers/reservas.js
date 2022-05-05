const Reserva = require('../models/reserva')
const Bicicleta = require('../models/bicicleta')

exports.reserva_list = function (req, res) {
    Reserva.find({}, function (err, rs) {
        if (err) console.log(err)
        console.log(rs)
        res.render('reservas/index', { reservas: rs })
    })
}

exports.reserva_create_get = function (req, res) {
    res.render('reservas/create')
}

exports.reserva_create_post = function (req, res) {
    Bicicleta.findOne({code : req.body.code}).then(function (bici){
        let rs = Reserva.createInstance(req.body.desde, req.body.hasta, bici._id, req.user._id)
        Reserva.add(rs)
        res.redirect('/reservas')
    })
    
}

exports.reserva_delete_post = function (req, res) {
    Reserva.removeByCode(req.body.code).then(function(){
        res.redirect('/reservas')
    })
}

exports.reserva_update_get = function (req, res) {

    Reserva.findOne({ code: req.params.num_reserva }).then(function (rs) {
        res.render('reservas/update', { reservas: rs })
    });
}

exports.reserva_update_post = function (req, res) {
    Reserva.findOne({ code: req.params.num_reserva }).then(function (rs) {
        rs.num_reserva = req.body.num_reserva
        rs.Inicio = req.body.Inicio
        rs.Fin = req.body.Fin
        rs.save()
        res.redirect('/reservas')
    });

} 