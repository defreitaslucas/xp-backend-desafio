const Joi = require('joi');

const loginObjValid = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).max(12).required(),
});

const validateLogin = (req, res, next) => {
  const { error } = loginObjValid.validate(req.body);
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

module.exports = { validateLogin };