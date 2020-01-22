const mongoose = require('mongoose')
const Schema = mongoose.Schema

const companySchema = new Schema({
  profile: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Profile',
    required: true,
  },
  companyVerification: {
    type: String,
    required: false,
  },
  section708WholesaleInvestorCertification: {
    type: String,
    required: false,
  },
  DirectorAndBeneficialOwnerIdentification: {
    type: String,
    required: false,
  },
})

const Company = mongoose.model('Company', companySchema)

module.exports = Company
