// dependencies
const Joi = require('@hapi/joi');

// Joi validation schema for new conversation
const NewConversationValidationSchema = Joi.object().keys({
    clientUser: Joi.string()
                   .alphanum()
                   .max(100)
                   .required(),
    adminUser: Joi.string()
                   .alphanum()
                   .max(100)
                   .required()
  })
  
// middleware function for a new conversation, this will be passed in on the new conversation route
const validateNewConversation = async (req, res, next) => {
    try {
        const validateResult = await NewConversationValidationSchema.validateAsync(req.body)
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
    validateNewConversation
}