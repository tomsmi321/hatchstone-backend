// dependencies
const Joi = require('@hapi/joi');

// Joi validation schema for new message
const NewMessageValidationSchema = Joi.object().keys({
    author: Joi.string()
               .alphanum()
               .max(100)
               .required(),
    conversationId: Joi.string()
               .alphanum()
               .max(100)
               .required(),
    content: Joi.string()
               .max(500)
               .required(),
    dateCreated: Joi.date()
  })
  
// middleware function for a new message, this will be passed in on the new message route
const validateNewMessage = async (req, res, next) => {
    try {
        const validateResult = await NewMessageValidationSchema.validateAsync(req.body)
        if (validateResult.error) {
            res.status(500).send(validateResult.error.details[0].message)
        } else {
            next();
        }
    } catch(err) {
        res.status(500).send(`${err}`)
    }
}

module.exports = {
    validateNewMessage
}