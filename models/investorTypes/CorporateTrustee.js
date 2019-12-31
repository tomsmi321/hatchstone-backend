const mongoose = require('mongoose')
const Schema = mongoose.Schema

const corporateTrusteeSchema = new Schema({
    profile: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Profile',
        required: true
    },
    companyVerification: {
        type: String,
        required: false
    },
    section708WholesaleInvestorCertification: {
      type: String,
      required: false
    },
    DirectorAndBeneficialOwnerIdentification: {
      type: String,
      required: false
    },
    TrustSelfManagedSuperannuationFundVerification: {
      type: String,
      required: false
    }
})

const CorporateTrustee = mongoose.model('CorporateTrustee', corporateTrusteeSchema);

module.exports = CorporateTrustee