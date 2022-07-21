const Joi = require('joi');

const contaObjValid = Joi.object({
  codCliente: Joi.number().required(),
  valor: Joi.number().precision(2).positive().required(),
});

const validateConta = (req, res, next) => {
  const { error } = contaObjValid.validate(req.body);
  if (error) {
    if (error.details[0].type === 'any.required') {
      const messages = error.details.map((e) => e.message);
      return res.status(401).json({ message: messages[0] });
    }
    const messages = error.details.map((e) => e.message);
    return res.status(422).json({ message: messages[0] });
  }
  next();
};

module.exports = { validateConta };