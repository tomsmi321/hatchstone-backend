const mongoose = require('mongoose')
const Schema = mongoose.Schema

const individualTrusteeSchema = new Schema({
  profile: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Profile',
    required: true,
  },
  investorIdentification: {
    type: String,
    required: false,
  },
  section708WholesaleInvestorCertification: {
    type: String,
    required: false,
  },
  TrustSelfManagedSuperannuationFundVerification: {
    type: String,
    required: false,
  },
})

const IndividualTrustee = mongoose.model(
  'IndividualTrustee',
  individualTrusteeSchema,
)

module.exports = IndividualTrustee
