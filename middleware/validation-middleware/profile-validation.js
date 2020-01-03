// dependencies
const Joi = require('@hapi/joi');

// Joi validation schema for profile
const profileValidationSchema = Joi.object().keys({
    firstName: Joi.string()
                  .max(30)
                  .required(),
    lastName: Joi.string()
                  .max(30)
                  .required(),
    phone: Joi.string()
                  .pattern(new RegExp('^[0-9]+$'))
                  .min(8).max(30)
                  .required(),
    userId: Joi.string()
                  .alphanum()
                  .max(100)
                  .required(),
    address: Joi.string()
                  .max(100)
                  .required(),
    appProgress: Joi.number()
                  .max(100),
    approved: Joi.boolean(),
    investorType: Joi.any()
                  .valid('individual', 'individual trustee', 'company', 'corporate trustee')
                  .required(),
    dateStarted: Joi.date(),
    profileImage: Joi.string(),
    documents: Joi.string()
  })
  
// middleware function for a profile, this will be passed in on create and update routes
const validateProfile = async (req, res, next) => {
    try {
        const validateResult = await profileValidationSchema.validateAsync(req.body);
        if (validateResult.error) {
            throw validateResult.error.details[0].message;
        } else {
            next();
        }
    } catch(err) {
        res.status(500).send(`${err}`);
    }
}

module.exports = {
    validateProfile
}