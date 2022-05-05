var express = require('express');
var router = express.Router();
let reservaController = require('../controllers/reservas')
 
//Listar las reservas
router.get('/', reservaController.reserva_list);

//Añadir nueva reserva
router.get('/:id/create', reservaController.reserva_create_get)
router.post('/create', reservaController.reserva_create_post)

//Eliminar reserva
router.post('/:id/delete', reservaController.reserva_delete_post)

//Update reserva
router.get('/:id/update', reservaController.reserva_update_get)
router.post('/:id/update', reservaController.reserva_update_post)


module.exports = router;



 