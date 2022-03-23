var express = require('express');
var router = express.Router();
let bicicletaControllerAPI = require('../../controllers/api/bicicletasControllerAPI')

//API GET, get all bicis

router.get('/', bicicletaControllerAPI.bicicleta_list)

//API POST, create bici
router.post('/create', bicicletaControllerAPI.bicicleta_create)

//API POST, delete bici
router.post('/delete', bicicletaControllerAPI.bicicleta_delete)


module.exports = router;