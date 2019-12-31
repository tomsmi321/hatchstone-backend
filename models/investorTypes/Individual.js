const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const individualSchema = new Schema({
    profile: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Profile',
        required: true
    },
    investorIdentification: {
        type: String,
        required: false
    },
    section708WholesaleInvestorCertification: {
      type: String,
      required: false
    }
})

const Individual = mongoose.model('Individual', individualSchema);

module.exports = Individual;