// returns an object of Profile attrubutes that are defined in the request body
// this is used in the update for Profile
const getValidProfileAttributes = (req) => {
  const {
    firstName,
    lastName,
    phone,
    userId,
    address,
    approved,
    investorType,
    dateStarted,
    profileImage,
    documents,
  } = req.body

  const definedAttributes = {}
  if (firstName) {
    definedAttributes.firstName = firstName
  }
  if (lastName) {
    definedAttributes.lastName = lastName
  }
  if (phone) {
    definedAttributes.phone = phone
  }
  if (userId) {
    definedAttributes.userId = userId
  }
  if (address) {
    definedAttributes.address = address
  }
  if (approved === true || approved === false) {
    definedAttributes.approved = approved
  }
  if (investorType) {
    definedAttributes.investorType = investorType
  }
  if (dateStarted) {
    definedAttributes.dateStarted = dateStarted
  }
  if (profileImage) {
    definedAttributes.profileImage = profileImage
  }
  if (documents) {
    definedAttributes.documents = documents
  }

  return definedAttributes
}

module.exports = {
  getValidProfileAttributes,
}
