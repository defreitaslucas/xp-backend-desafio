const express = require('express');
const investimentoController = require('../controllers/investimentosController');
const ativosController = require('../controllers/ativosController');
const contaController = require('../controllers/contaController');
const loginController = require('../controllers/loginController');
const { validateLogin } = require('../middlewares/loginAuth');
const tokenAuthenticated = require('../middlewares/tokenAuth');
const { validateInvestimento } = require('../middlewares/validationInvestimento');

const router = express.Router();

router.use('/investimentos', tokenAuthenticated, validateInvestimento, investimentoController);
router.use('/ativos', tokenAuthenticated, ativosController);
router.use('/conta', tokenAuthenticated, contaController);
router.use('/login', validateLogin, loginController);

module.exports = router;