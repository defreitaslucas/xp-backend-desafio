const express = require('express');

const router = express.Router();

router.use('/investimentos');
router.use('/ativos');
router.use('/conta');

module.exports = router;