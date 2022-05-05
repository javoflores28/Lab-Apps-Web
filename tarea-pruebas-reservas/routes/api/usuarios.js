var express = require('express');
var router = express.Router();
let usuarioController = require('../../controllers/api/usuarioControllerAPI')

//Listar de usuarios
router.get('/', usuarioController.usuarios_list);

//Crear usuario
router.post('/create', usuarioController.usuarios_create);

//Crear usuario 2

router.post('/newuser', usuarioController.usuarios_create);

//Reservar
router.post('/reservar', usuarioController.usuario_reservar)

module.exports = router;

