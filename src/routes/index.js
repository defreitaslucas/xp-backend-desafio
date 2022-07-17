const express = require('express');
const investimentoController = require('../controllers/investimentosController');

const router = express.Router();

router.use('/investimentos', investimentoController);
// router.use('/ativos');
// router.use('/conta');

module.exports = router;