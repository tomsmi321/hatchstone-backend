
// returns an object of Profile attrubutes that are defined in the request body
// this is used in the update for Profile
const getValidProfileAttributes = (req) => {
    const { firstName,
            lastName,
            phone,
            userId,
            address,
            approved,
            investorType,
            dateStarted,
            profileImage,
            documents } = req.body;

    const definedAttributes = {}
    if(firstName || firstName === '') {definedAttributes.firstName = firstName};
    if(lastName || lastName === '') {definedAttributes.lastName = lastName};
    if(phone || phone === '') {definedAttributes.phone = phone};
    if(userId || userId === '') {definedAttributes.userId = userId};
    if(address || address === '') {definedAttributes.address = address};
    if(approved === true || approved === false) {definedAttributes.approved = approved};
    if(investorType || investorType === '') {definedAttributes.investorType = investorType};
    if(dateStarted) {definedAttributes.dateStarted = dateStarted};
    if(profileImage || profileImage === '') {definedAttributes.profileImage = profileImage};
    if(documents) {definedAttributes.documents = documents};
    
    return definedAttributes;
}

module.exports = {
    getValidProfileAttributes
}

