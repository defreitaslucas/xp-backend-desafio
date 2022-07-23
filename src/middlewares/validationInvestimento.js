const Joi = require('joi');

const investimentoObjValid = Joi.object({
  codCliente: Joi.number().required(),
  codAtivo: Joi.number().min(1).required(),
  qtdeAtivo: Joi.number().min(1).required(),
});

const validateInvestimento = (req, res, next) => {
  const { error } = investimentoObjValid.validate(req.body);
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

module.exports = { validateInvestimento };