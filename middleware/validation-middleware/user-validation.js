// dependencies
const Joi = require('@hapi/joi')

// Joi validation schema for user
const userValidationSchema = Joi.object().keys({
  email: Joi.string()
    .email()
    .required(),
  password: Joi.string()
    .min(6)
    .max(30)
    .required(),
  admin: Joi.boolean(),
  isActive: Joi.boolean(),
})

// middleware function for a user, this will be passed in on the register route
const validateNewUser = async (req, res, next) => {
  try {
    const validateResult = await userValidationSchema.validateAsync(req.body)
    if (validateResult.error) {
      res.status(500).send(validateResult.error.details[0].message)
    } else {
      next()
    }
  } catch (err) {
    res.status(500).send(`${err}`)
  }
}

module.exports = {
  validateNewUser,
}
