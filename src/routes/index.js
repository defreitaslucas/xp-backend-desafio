const express = require('express');
const investimentoController = require('../controllers/investimentosController');
const ativosController = require('../controllers/ativosController');
const contaController = require('../controllers/contaController');

const router = express.Router();

router.use('/investimentos', investimentoController);
router.use('/ativos', ativosController);
router.use('/conta', contaController);

module.exports = router;