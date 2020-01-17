// import mongoose and Schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new Schema({
    firstName: {
        type: String, 
        trim: true,
        lowercase: true
    },
    lastName: {
        type: String,
        trim: true,
        lowercase: true
    },
    phone: {
        type: String,
        trim: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    address: {
        type: String,
        trim: true,
        lowercase: true
    },
    approved: {
        type: Boolean,
        default: false
    },
    investorType: {
        type: String,
        enum: ['individual', 'individualTrustee', 'company', 'corporateTrustee']
    },
    dateStarted: {
        type: Date,
        default: Date.now
    },
    profileImage: {
        type: String
    },
    documents: {
        type : Array , "default" : [] 
    },
    appProgress: {
        type: Number,
        default: 0
    }
})

profileSchema.pre("save", function (next) {
     // create refs to variables, we only have access to 'this' at this scope level
     const docs = this.documents;
     const firstName = this.firstName;
     const lastName = this.lastName
     const phone = this.phone
     const address = this.address
     const investorType = this.investorType

     function profileFieldsFilled() {
         // a completed profile excluding docs has a weight of 1 unit for appProgress,
         // if any of the below fields is not present it will be maked as 0
         if(firstName && lastName && phone && address && investorType) {
             return 1;
         } else {
             return 0;
         }
     }   

     function calcProgressBaseScore () {
        if(investorType === 'individual') {
             return 3;
        }
         if(investorType === 'individualTrustee') {
            console.log('individualTrustee');
            return 4;
        }
        if(investorType === 'company') {
            console.log('company');
            return 4;
        }
        if(investorType === 'corporateTrustee') {
            console.log('corporateTrustee');
            return 5;
        }
     }
     
     function calcAppProgress () {
         // handle divide by zero edge case
         if ((profileFieldsFilled() + docs.length) === 0) {
             return 0;
         } else {
             const progress = ( (profileFieldsFilled() + docs.length) / calcProgressBaseScore() ) * 100;
             if(progress > 100) return 100;
             return progress;
         }
     }
     
    this.appProgress = calcAppProgress();

    next();
});

// profileSchema.pre("findOneAndUpdate", function(next) {
//     console.log('in findOneAndUpdate pre save hook');
//     next()
// })

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile
